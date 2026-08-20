import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border/60 bg-grid">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {children ? <p className="mt-5 text-muted-foreground">{children}</p> : null}
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
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/50"
        >
          <h2 className="font-display text-lg font-semibold">{item.title}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
          {item.points ? (
            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              {item.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
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

export function CtaBand() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-14 text-center">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Ready to modernise your website?
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Talk to our Calicut team about design, hosting, SEO and AI integration — one partner for
          your whole digital presence.
        </p>
        <a
          href="/contact"
          className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
        >
          Get a free consultation
        </a>
      </div>
    </section>
  );
}
