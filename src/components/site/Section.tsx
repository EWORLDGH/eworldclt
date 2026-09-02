import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-ink bg-grid-dark text-ink-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {children ? <p className="mt-5 text-ink-foreground/70">{children}</p> : null}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow"
            >
              Get a quote <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-ink-foreground/25 px-5 py-2.5 text-sm font-medium text-ink-foreground transition-colors hover:border-ink-foreground/60"
            >
              All services
            </Link>
          </div>
        </div>
        {image ? (
          <div className="overflow-hidden rounded-3xl border border-ink-foreground/15">
            <img
              src={image}
              alt={imageAlt ?? title}
              width={1280}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function Cards({
  items,
}: {
  items: { title: string; body: string; points?: string[] }[];
}) {
  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <article
          key={item.title}
          className="rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/50"
        >
          <span className="font-display text-xs font-semibold text-primary">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h2 className="mt-2 font-display text-lg font-semibold">{item.title}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
          {item.points ? (
            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              {item.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}

const allLinks = [
  { to: "/services", label: "Website design & development" },
  { to: "/hosting", label: "Hosting, domains & servers" },
  { to: "/cloud-hosting", label: "Cloud hosting" },
  { to: "/linux-reseller-hosting", label: "Linux reseller hosting" },
  { to: "/windows-reseller-hosting", label: "Windows reseller hosting" },
  { to: "/microsoft-mail", label: "Microsoft Mail" },
  { to: "/zoho-mail", label: "Zoho Mail" },
  { to: "/ssl-certificate", label: "SSL certificates" },
  { to: "/site-lock", label: "SiteLock website security" },
  { to: "/website-backup", label: "Website backup" },
  { to: "/digital-marketing", label: "SEO & digital marketing" },
  { to: "/ai-solutions", label: "AI integration & automation" },
  { to: "/about", label: "About Eworld" },
  { to: "/contact", label: "Contact us" },
] as const;

export function RelatedLinks({ current }: { current?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16">
      <h2 className="font-display text-xl font-semibold">Explore more</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {allLinks
          .filter((l) => l.to !== current)
          .slice(0, 6)
          .map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-center justify-between rounded-xl border border-border/60 bg-card px-4 py-3 text-sm transition-colors hover:border-primary/60"
            >
              {l.label}
              <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-ink bg-grid-dark text-ink-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-14 text-center">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Ready to modernise your website?
        </h2>
        <p className="max-w-2xl text-sm text-ink-foreground/70">
          Talk to our Calicut team about design, hosting, SEO and AI integration — one partner for
          your whole digital presence.
        </p>
        <Link
          to="/contact"
          className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
        >
          Get a free consultation
        </Link>
      </div>
    </section>
  );
}
