import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Globe, Server, TrendingUp, ShieldCheck, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBand } from "@/components/site/Section";
import { site } from "@/lib/site";

const title = "Eworld | Website Design, Hosting & AI Digital Marketing in Calicut";
const description =
  "Eworld Information Systems, Calicut — website design, web & cloud hosting, SEO and digital marketing since 2001, now with AI chatbots, automation and AI-ready websites.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: site.name,
          description,
          foundingDate: "2001",
          url: site.url,
          email: site.emails[0],
          telephone: site.phones[0],
          address: {
            "@type": "PostalAddress",
            streetAddress: "IInd Floor, Daya Building, Mavoor Road",
            addressLocality: "Calicut",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          areaServed: "India",
          serviceType: [
            "Website design",
            "Web hosting",
            "Digital marketing",
            "SEO",
            "AI automation",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    body: "Responsive, fast, SEO-ready corporate, e-commerce and web application builds.",
    to: "/services" as const,
  },
  {
    icon: Server,
    title: "Hosting, Domains & Servers",
    body: "Linux & Windows shared hosting, VPS, cloud, dedicated and business email.",
    to: "/hosting" as const,
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    body: "Search, social, Google Ads and content that brings measurable enquiries.",
    to: "/digital-marketing" as const,
  },
  {
    icon: Bot,
    title: "AI Integration",
    body: "AI chatbots, lead qualification, content engines and workflow automation.",
    to: "/ai-solutions" as const,
  },
];

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="border-b border-border/60 bg-grid">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="size-3.5" /> Since {site.since} · Now AI-powered
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
                Websites, hosting and marketing — rebuilt with AI at the core.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Eworld Information Systems has been Calicut&rsquo;s web design and hosting partner
                for over two decades. Today we add AI assistants, automation and AI-search
                visibility to everything we build.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
                >
                  Start your project <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/ai-solutions"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60"
                >
                  Explore AI services
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-card">
              <img
                src={heroImage}
                alt="AI-connected servers powering modern websites"
                width={1920}
                height={1088}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-5 pb-14">
            <dl className="grid grid-cols-2 gap-8 border-t border-border/60 pt-10 sm:grid-cols-4">
              {[
                ["25+", "Years in business"],
                ["1500+", "Websites delivered"],
                ["99.9%", "Hosting uptime"],
                ["24/7", "Local support"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-3xl font-bold text-primary">{value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight">What we do</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            One team for design, infrastructure, growth and AI — so your website, servers and
            campaigns actually work together.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group overflow-hidden rounded-2xl border border-border/60 bg-card transition-colors hover:border-primary/60"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6">
                  <s.icon className="size-6 text-primary" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                    Learn more{" "}
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>


        <section className="border-y border-border/60 bg-card/40">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight">
                The new generation of Eworld
              </h2>
              <p className="mt-4 text-muted-foreground">
                Same address, same phones, same people you have trusted since 2001 — with a modern
                stack underneath. We rebuild legacy websites into fast, secure, mobile-first
                platforms and wire in AI where it saves you real time.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {[
                  "Core Web Vitals, accessibility and technical SEO built in",
                  "AI chat support trained on your own products and pricing",
                  "Automated content, quotations and CRM handoffs",
                  "Managed hosting, backups and security monitoring",
                ].map((p) => (
                  <li key={p} className="flex gap-3">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background p-8">
              <h3 className="font-display text-lg font-semibold">Reach us directly</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>{site.address}</li>
                <li>Phone: {site.phones.join(" , ")}</li>
                <li>Office mobile / WhatsApp: {site.mobile}</li>
                <li>Emergency: {site.emergency.join(", ")}</li>
                <li>Email: {site.emails.join(" , ")}</li>
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full border border-primary/50 px-5 py-2.5 text-sm text-primary"
              >
                Contact page
              </Link>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
