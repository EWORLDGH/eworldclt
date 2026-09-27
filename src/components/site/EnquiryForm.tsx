import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useSite } from "@/lib/content";

const countries = [
  "India (+91)",
  "United Arab Emirates (+971)",
  "Saudi Arabia (+966)",
  "Qatar (+974)",
  "Oman (+968)",
  "Kuwait (+965)",
  "Bahrain (+973)",
  "United Kingdom (+44)",
  "United States (+1)",
  "Other",
];

export function EnquiryForm({ service, id = "enquiry" }: { service: string; id?: string }) {
  const site = useSite();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    domain: "",
    accounts: "",
    email: "",
    country: countries[0],
    mobile: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from("enquiries").insert({
      service,
      domain: form.domain.trim(),
      accounts: Number(form.accounts),
      email: form.email.trim(),
      country: form.country,
      mobile: form.mobile.trim(),
    });
    if (error) console.error("Enquiry save failed", error.message);
    const body = [
      `Service: ${service}`,
      `Domain name: ${form.domain}`,
      `Number of accounts: ${form.accounts}`,
      `Email id: ${form.email}`,
      `Country: ${form.country}`,
      `Mobile number: ${form.mobile}`,
    ].join("\n");
    setSent(true);
    window.location.href = `mailto:${site.emails[0]}?subject=${encodeURIComponent(
      `${service} enquiry`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary";

  return (
    <section id={id} className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="font-display text-2xl font-bold tracking-tight">Request a {service} quote</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Share a few details and our Calicut team will get back with plans and pricing.
        </p>
        <form onSubmit={submit} className="mt-8 grid gap-5 sm:grid-cols-2">
          <label className="text-sm sm:col-span-2">
            Domain name
            <input required value={form.domain} onChange={set("domain")} placeholder="yourcompany.com" className={field} />
          </label>
          <label className="text-sm">
            Number of accounts
            <input
              required
              type="number"
              min={1}
              value={form.accounts}
              onChange={set("accounts")}
              placeholder="10"
              className={field}
            />
          </label>
          <label className="text-sm">
            Email id
            <input required type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" className={field} />
          </label>
          <label className="text-sm">
            Country
            <select value={form.country} onChange={set("country")} className={field}>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            Mobile number
            <input required value={form.mobile} onChange={set("mobile")} placeholder="98765 43210" className={field} />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
            >
              Send enquiry
            </button>
            {sent ? (
              <p className="mt-3 text-sm text-primary">
                Thanks! Your email draft is open — or call {site.mobile}.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
