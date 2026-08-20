import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, CtaBand } from "@/components/site/Section";
import { site } from "@/lib/site";

const title = "About Eworld Information Systems, Calicut — Since 2001";
const description =
  "Eworld Information Systems has delivered website design, web hosting and digital marketing from Mavoor Road, Calicut since 2001, now with AI integration services.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const milestones = [
  ["2001", "Eworld founded in Calicut, delivering websites and domain services."],
  ["2008", "Hosting infrastructure expanded to reseller, VPS and dedicated servers."],
  ["2015", "Digital marketing, SEO and e-commerce practice added."],
  ["2020", "Cloud migrations, business email and managed security services."],
  ["2026", "AI integration: assistants, automation and AI-search optimisation."],
];

function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero eyebrow="About us" title="A quarter century of Kerala's web, now AI-first">
          {site.name} works from Mavoor Road, Calicut, serving businesses across Kerala, India and the
          Gulf with design, hosting, marketing and AI under one roof.
        </PageHero>

        <section className="mx-auto max-w-4xl px-5 py-16">
          <h2 className="font-display text-2xl font-bold">Our journey</h2>
          <ol className="mt-8 space-y-6 border-l border-border pl-6">
            {milestones.map(([year, text]) => (
              <li key={year} className="relative">
                <span className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-primary" />
                <p className="font-display text-sm font-semibold text-primary">{year}</p>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-16 font-display text-2xl font-bold">Why clients stay</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Local and reachable", "A real office, real phone numbers and WhatsApp support."],
              ["One accountable team", "Design, servers, SEO and AI handled by the same people."],
              ["No lock-in", "You own your domain, code, data and accounts."],
              ["Practical AI", "We only recommend automation that pays for itself."],
            ].map(([h, p]) => (
              <div key={h} className="rounded-2xl border border-border/60 bg-card p-5">
                <h3 className="font-display text-base font-semibold">{h}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
