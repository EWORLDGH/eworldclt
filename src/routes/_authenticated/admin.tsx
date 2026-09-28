import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { claimAdmin } from "@/lib/content.functions";
import { siteContentQuery, type ContactContent, type HeroContent, type CtaContent } from "@/lib/content";
import { site as defaultSite } from "@/lib/site";
import {
  linuxResellerPlans,
  windowsResellerPlans,
  microsoftMailPlans,
  zohoMailPlans,
} from "@/lib/plan-defaults";
import type { Plan } from "@/components/site/Plans";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin panel | Eworld" },
      { name: "description", content: "Edit Eworld website content, images, plans and enquiries." },
      { property: "og:title", content: "Admin panel | Eworld" },
      { property: "og:description", content: "Edit Eworld website content, images, plans and enquiries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

const pages = [
  ["/", "Home"],
  ["/services", "Web Design"],
  ["/hosting", "Hosting"],
  ["/cloud-hosting", "Cloud Hosting"],
  ["/linux-reseller-hosting", "Linux Reseller Hosting"],
  ["/windows-reseller-hosting", "Windows Reseller Hosting"],
  ["/microsoft-mail", "Microsoft Mail"],
  ["/zoho-mail", "Zoho Mail"],
  ["/ssl-certificate", "SSL Certificate"],
  ["/site-lock", "Site Lock"],
  ["/website-backup", "Website Backup"],
  ["/digital-marketing", "Digital Marketing"],
  ["/ai-solutions", "AI Solutions"],
  ["/about", "About"],
  ["/contact", "Contact"],
] as const;

const planPages: [string, string, Plan[]][] = [
  ["/linux-reseller-hosting", "Linux Reseller", linuxResellerPlans],
  ["/windows-reseller-hosting", "Windows Reseller", windowsResellerPlans],
  ["/microsoft-mail", "Microsoft Mail", microsoftMailPlans],
  ["/zoho-mail", "Zoho Mail", zohoMailPlans],
];

const field =
  "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary";
const btn =
  "rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60";

type Tab = "contact" | "pages" | "plans" | "banner" | "enquiries";

function AdminPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const claim = useServerFn(claimAdmin);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [tab, setTab] = useState<Tab>("pages");

  useEffect(() => {
    claim()
      .then((r) => setIsAdmin(r.isAdmin))
      .catch(() => setIsAdmin(false));
  }, [claim]);

  const signOut = async () => {
    await queryClient.cancelQueries();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  if (isAdmin === null) return <p className="p-10 text-sm text-muted-foreground">Loading…</p>;
  if (!isAdmin)
    return (
      <div className="p-10">
        <p className="text-sm">This account doesn&rsquo;t have admin access.</p>
        <button onClick={signOut} className={`${btn} mt-4`}>Sign out</button>
      </div>
    );

  const tabs: [Tab, string][] = [
    ["pages", "Page text & images"],
    ["plans", "Plans & prices"],
    ["contact", "Contact details"],
    ["banner", "Closing banner"],
    ["enquiries", "Enquiries"],
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <h1 className="font-display text-lg font-bold">Eworld admin</h1>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/" className="text-ink-foreground/70 hover:text-ink-foreground">View site</Link>
            <button onClick={signOut} className="text-ink-foreground/70 hover:text-ink-foreground">Sign out</button>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-8">
        <nav className="flex flex-wrap gap-2">
          {tabs.map(([k, label]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`rounded-full border px-4 py-1.5 text-sm ${
                tab === k ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="mt-8">
          {tab === "pages" && <PagesEditor />}
          {tab === "plans" && <PlansEditor />}
          {tab === "contact" && <ContactEditor />}
          {tab === "banner" && <BannerEditor />}
          {tab === "enquiries" && <Enquiries />}
        </div>
      </div>
    </div>
  );
}

function useContent() {
  const { data } = useQuery(siteContentQuery);
  return data ?? {};
}

function useSave() {
  const queryClient = useQueryClient();
  const [status, setStatus] = useState<string | null>(null);
  const save = async (key: string, value: unknown) => {
    setStatus("Saving…");
    const { error } = await supabase
      .from("site_content")
      .upsert({ key, value: value as never, updated_at: new Date().toISOString() });
    if (error) setStatus(`Error: ${error.message}`);
    else {
      setStatus("Saved — live on the website.");
      await queryClient.invalidateQueries({ queryKey: siteContentQuery.queryKey });
    }
  };
  const reset = async (key: string) => {
    await supabase.from("site_content").delete().eq("key", key);
    setStatus("Restored to original.");
    await queryClient.invalidateQueries({ queryKey: siteContentQuery.queryKey });
  };
  return { save, reset, status, setStatus };
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-border bg-card p-6">{children}</div>;
}

async function uploadImage(file: File): Promise<string> {
  const safe = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
  const path = `${Date.now()}-${safe}`;
  const { error } = await supabase.storage.from("site-images").upload(path, file, { contentType: file.type });
  if (error) throw error;
  return `/api/public/img/${path}`;
}

function PagesEditor() {
  const content = useContent();
  const [path, setPath] = useState<string>("/");
  const key = `hero:${path}`;
  const [form, setForm] = useState<HeroContent>({});
  const { save, reset, status, setStatus } = useSave();
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setForm((content[key] as unknown as HeroContent) ?? {});
    setStatus(null);
  }, [key, content, setStatus]);

  return (
    <Card>
      <label className="block text-sm font-medium">
        Page
        <select value={path} onChange={(e) => setPath(e.target.value)} className={field}>
          {pages.map(([p, l]) => (
            <option key={p} value={p}>{l}</option>
          ))}
        </select>
      </label>
      <p className="mt-2 text-xs text-muted-foreground">Leave a box empty to keep the current wording.</p>
      <div className="mt-6 grid gap-4">
        {path !== "/" && (
          <label className="text-sm">
            Small label above heading
            <input value={form.eyebrow ?? ""} onChange={(e) => setForm({ ...form, eyebrow: e.target.value })} className={field} />
          </label>
        )}
        <label className="text-sm">
          Main heading
          <input value={form.title ?? ""} onChange={(e) => setForm({ ...form, title: e.target.value })} className={field} />
        </label>
        <label className="text-sm">
          Intro paragraph
          <textarea rows={4} value={form.body ?? ""} onChange={(e) => setForm({ ...form, body: e.target.value })} className={field} />
        </label>
        <div className="text-sm">
          Main image
          <div className="mt-2 flex items-center gap-4">
            {form.image ? <img src={form.image} alt="" className="h-20 w-32 rounded-lg object-cover" /> : <span className="text-xs text-muted-foreground">Using original image</span>}
            <input
              type="file"
              accept="image/*"
              disabled={uploading}
              onChange={async (e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                setUploading(true);
                try {
                  setForm({ ...form, image: await uploadImage(f) });
                  setStatus("Image uploaded — click Save to publish.");
                } catch (err) {
                  setStatus(`Upload failed: ${(err as Error).message}`);
                }
                setUploading(false);
              }}
              className="text-xs"
            />
            {form.image ? (
              <button type="button" onClick={() => setForm({ ...form, image: "" })} className="text-xs text-muted-foreground underline">
                Use original
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <button onClick={() => save(key, form)} className={btn} disabled={uploading}>Save</button>
        <button onClick={() => reset(key)} className="text-sm text-muted-foreground underline">Restore original</button>
        {status ? <span className="text-sm text-primary">{status}</span> : null}
      </div>
    </Card>
  );
}

function PlansEditor() {
  const content = useContent();
  const [idx, setIdx] = useState(0);
  const [path, label, defaults] = planPages[idx] ?? planPages[0]!;
  const key = `plans:${path}`;
  const [plans, setPlans] = useState<Plan[]>(defaults);
  const { save, reset, status, setStatus } = useSave();

  useEffect(() => {
    const o = content[key] as unknown as Plan[] | undefined;
    setPlans(Array.isArray(o) && o.length ? o : defaults);
    setStatus(null);
  }, [key, content, defaults, setStatus]);

  const update = (i: number, patch: Partial<Plan>) =>
    setPlans(plans.map((p, j) => (j === i ? { ...p, ...patch } : p)));

  return (
    <div className="grid gap-6">
      <Card>
        <label className="block text-sm font-medium">
          Page
          <select value={idx} onChange={(e) => setIdx(Number(e.target.value))} className={field}>
            {planPages.map(([, l], i) => (
              <option key={l} value={i}>{l}</option>
            ))}
          </select>
        </label>
      </Card>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <Card key={i}>
            <label className="block text-sm">
              Plan name
              <input value={p.name} onChange={(e) => update(i, { name: e.target.value })} className={field} />
            </label>
            <label className="mt-3 block text-sm">
              Price
              <input value={p.price} onChange={(e) => update(i, { price: e.target.value })} className={field} />
            </label>
            <label className="mt-3 block text-sm">
              Short note
              <input value={p.note ?? ""} onChange={(e) => update(i, { note: e.target.value })} className={field} />
            </label>
            <label className="mt-3 block text-sm">
              Features (one per line)
              <textarea
                rows={6}
                value={p.features.join("\n")}
                onChange={(e) => update(i, { features: e.target.value.split("\n") })}
                className={field}
              />
            </label>
            <label className="mt-3 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={!!p.highlight} onChange={(e) => update(i, { highlight: e.target.checked })} />
              Highlight as popular
            </label>
            <button
              type="button"
              onClick={() => setPlans(plans.filter((_, j) => j !== i))}
              className="mt-3 text-xs text-muted-foreground underline"
            >
              Remove plan
            </button>
          </Card>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => setPlans([...plans, { name: "New plan", price: "₹0", features: [] }])}
          className="rounded-full border border-border px-5 py-2 text-sm hover:border-primary"
        >
          Add plan
        </button>
        <button
          onClick={() =>
            save(
              key,
              plans.map((p) => ({ ...p, features: p.features.map((f) => f.trim()).filter(Boolean) })),
            )
          }
          className={btn}
        >
          Save {label} plans
        </button>
        <button onClick={() => reset(key)} className="text-sm text-muted-foreground underline">Restore original</button>
        {status ? <span className="text-sm text-primary">{status}</span> : null}
      </div>
    </div>
  );
}

function ContactEditor() {
  const content = useContent();
  const current = { ...defaultSite, ...((content["contact"] as unknown as Partial<ContactContent>) ?? {}) };
  const [form, setForm] = useState({
    address: current.address,
    phones: current.phones.join("\n"),
    mobile: current.mobile,
    emergency: current.emergency.join("\n"),
    whatsapp: current.whatsapp,
    skype: current.skype,
    emails: current.emails.join("\n"),
  });
  const { save, reset, status } = useSave();
  const lines = (s: string) => s.split("\n").map((x) => x.trim()).filter(Boolean);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <Card>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm sm:col-span-2">Address<input value={form.address} onChange={set("address")} className={field} /></label>
        <label className="text-sm">Phone numbers (one per line)<textarea rows={3} value={form.phones} onChange={set("phones")} className={field} /></label>
        <label className="text-sm">Emergency numbers (one per line)<textarea rows={3} value={form.emergency} onChange={set("emergency")} className={field} /></label>
        <label className="text-sm">Office mobile<input value={form.mobile} onChange={set("mobile")} className={field} /></label>
        <label className="text-sm">WhatsApp number (with +country code)<input value={form.whatsapp} onChange={set("whatsapp")} className={field} /></label>
        <label className="text-sm">Emails (one per line, first is main)<textarea rows={3} value={form.emails} onChange={set("emails")} className={field} /></label>
        <label className="text-sm">Skype<input value={form.skype} onChange={set("skype")} className={field} /></label>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={() =>
            save("contact", {
              address: form.address.trim(),
              phones: lines(form.phones),
              mobile: form.mobile.trim(),
              emergency: lines(form.emergency),
              whatsapp: form.whatsapp.trim(),
              skype: form.skype.trim(),
              emails: lines(form.emails),
            })
          }
          className={btn}
        >
          Save
        </button>
        <button onClick={() => reset("contact")} className="text-sm text-muted-foreground underline">Restore original</button>
        {status ? <span className="text-sm text-primary">{status}</span> : null}
      </div>
    </Card>
  );
}

function BannerEditor() {
  const content = useContent();
  const [form, setForm] = useState<CtaContent>((content["cta"] as unknown as CtaContent) ?? {});
  const { save, reset, status } = useSave();
  return (
    <Card>
      <p className="text-xs text-muted-foreground">The dark &ldquo;Ready to modernise your website?&rdquo; banner shown near the bottom of pages. Leave empty to keep the original.</p>
      <label className="mt-4 block text-sm">Heading<input value={form.title ?? ""} onChange={(e) => setForm({ ...form, title: e.target.value })} className={field} /></label>
      <label className="mt-4 block text-sm">Text<textarea rows={3} value={form.body ?? ""} onChange={(e) => setForm({ ...form, body: e.target.value })} className={field} /></label>
      <div className="mt-6 flex items-center gap-4">
        <button onClick={() => save("cta", form)} className={btn}>Save</button>
        <button onClick={() => reset("cta")} className="text-sm text-muted-foreground underline">Restore original</button>
        {status ? <span className="text-sm text-primary">{status}</span> : null}
      </div>
    </Card>
  );
}

function Enquiries() {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["admin-enquiries"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(500);
      if (error) throw error;
      return data;
    },
  });
  if (isLoading) return <p className="text-sm text-muted-foreground">Loading…</p>;
  if (!data?.length) return <Card><p className="text-sm text-muted-foreground">No enquiries yet.</p></Card>;
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-border text-xs uppercase text-muted-foreground">
          <tr>{["Date", "Service", "Domain", "Accounts", "Email", "Country", "Mobile", ""].map((h) => <th key={h} className="px-4 py-3">{h}</th>)}</tr>
        </thead>
        <tbody>
          {data.map((r) => (
            <tr key={r.id} className="border-b border-border/60 last:border-0">
              <td className="px-4 py-3 whitespace-nowrap">{new Date(r.created_at).toLocaleString("en-IN")}</td>
              <td className="px-4 py-3">{r.service}</td>
              <td className="px-4 py-3">{r.domain}</td>
              <td className="px-4 py-3">{r.accounts}</td>
              <td className="px-4 py-3"><a href={`mailto:${r.email}`} className="text-primary">{r.email}</a></td>
              <td className="px-4 py-3">{r.country}</td>
              <td className="px-4 py-3">{r.mobile}</td>
              <td className="px-4 py-3">
                <button
                  onClick={async () => {
                    if (!confirm("Delete this enquiry?")) return;
                    await supabase.from("enquiries").delete().eq("id", r.id);
                    refetch();
                  }}
                  className="text-xs text-muted-foreground underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
