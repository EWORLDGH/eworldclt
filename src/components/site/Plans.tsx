import { Check } from "lucide-react";
import { usePlans } from "@/lib/content";

export type Plan = {
  name: string;
  price: string;
  note?: string;
  features: string[];
  highlight?: boolean;
};

export function Plans({
  plans,
  title = "Plans",
  subtitle,
  ctaLabel = "Enquire now",
  ctaHref,
  onCta,
}: {
  plans: Plan[];
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCta?: () => void;
}) {
  const shown = usePlans(plans);
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p> : null}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {shown.map((p) => (
          <article
            key={p.name}
            className={`flex flex-col rounded-2xl border bg-card p-6 ${
              p.highlight ? "border-primary/70 shadow-glow" : "border-border/60"
            }`}
          >
            <h3 className="font-display text-lg font-semibold">{p.name}</h3>
            <p className="mt-3 font-display text-3xl font-bold text-primary">{p.price}</p>
            {p.note ? <p className="mt-1 text-xs text-muted-foreground">{p.note}</p> : null}
            <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            {ctaHref ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                {ctaLabel}
              </a>
            ) : (
              <button
                type="button"
                onClick={onCta}
                className="mt-6 inline-flex justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                {ctaLabel}
              </button>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
