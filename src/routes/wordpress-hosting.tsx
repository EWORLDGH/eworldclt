import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/hosting.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand, RelatedLinks } from "@/components/site/Section";

const title = "WordPress Hosting in Kerala \u2014 Fast, Secure & Managed | Eworld";
const description = "Optimised WordPress hosting from Eworld Calicut: one-click install, SSD speed, free SSL, automatic updates, daily backups and malware protection.";

export const Route = createFileRoute("/wordpress-hosting")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/wordpress-hosting" }],
  }),
  component: PWordpressHosting,
});

const items = [
  {
    "title": "One-click WordPress",
    "body": "Launch WordPress in minutes with a pre-configured installer.",
    "points": [
      "Softaculous installer",
      "Staging sites",
      "Popular themes & plugins"
    ]
  },
  {
    "title": "Built for speed",
    "body": "Caching, SSD storage and PHP optimisations make WordPress load faster.",
    "points": [
      "Server-level caching",
      "Latest PHP",
      "CDN ready"
    ]
  },
  {
    "title": "WooCommerce ready",
    "body": "Run an online store with the resources and security e-commerce needs.",
    "points": [
      "Free SSL for checkout",
      "Payment gateway friendly",
      "Scalable resources"
    ]
  },
  {
    "title": "Security & updates",
    "body": "Protect your site against hacks, brute-force attacks and outdated plugins.",
    "points": [
      "Malware scanning",
      "Auto core updates",
      "Login protection"
    ]
  },
  {
    "title": "Daily backups",
    "body": "Automatic backups with easy restore if something goes wrong.",
    "points": [
      "Daily snapshots",
      "One-click restore",
      "Offsite copies"
    ]
  },
  {
    "title": "WordPress experts",
    "body": "Our Calicut web team also designs and maintains WordPress websites.",
    "points": [
      "Free migration",
      "Design & SEO services",
      "Local support"
    ]
  }
];

function PWordpressHosting() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero eyebrow="Shared hosting \u00b7 WordPress" title="WordPress hosting that's fast, secure and simple" image={pageImage} imageAlt="Shared hosting \u00b7 WordPress">
          {"Servers tuned for WordPress and WooCommerce, with one-click setup, automatic backups and local experts to help."}
        </PageHero>
        <Cards items={items} />
        <section className="mx-auto max-w-7xl px-5 pb-4">
          <a
            href="https://eworld.co.in/wordpress-%20hosting.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-primary/50 px-5 py-2.5 text-sm text-primary"
          >
            View WordPress hosting plans
          </a>
        </section>
        <CtaBand />
        <RelatedLinks current="/wordpress-hosting" />
      </main>
      <Footer />
    </div>
  );
}
