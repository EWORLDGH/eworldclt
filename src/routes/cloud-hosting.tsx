import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/hosting.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand, RelatedLinks } from "@/components/site/Section";

const title = "Cloud Hosting in Calicut — Scalable, Redundant Servers | Eworld";
const description =
  "Eworld cloud hosting: auto-scaling resources, redundant storage, 99.9% uptime and managed support. Understand cloud hosting advantages and get started today.";

export const Route = createFileRoute("/cloud-hosting")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cloud-hosting" }],
  }),
  component: CloudHosting,
});

const items = [
  {
    title: "What is cloud hosting?",
    body: "Your website runs on a cluster of connected servers instead of one machine, so resources are pooled and failures are absorbed automatically.",
    points: ["Distributed compute & storage", "No single point of failure", "Pay for what you use"],
  },
  {
    title: "Scale on demand",
    body: "Add CPU, RAM or storage in minutes when traffic spikes, and scale back down afterwards.",
    points: ["Instant vertical scaling", "Handles campaign traffic", "No migration downtime"],
  },
  {
    title: "High availability",
    body: "Redundant nodes and replicated storage keep your site online even if hardware fails.",
    points: ["99.9% uptime target", "Automatic failover", "Redundant network paths"],
  },
  {
    title: "Faster performance",
    body: "SSD/NVMe storage, caching and optional CDN deliver quicker page loads and better Core Web Vitals.",
    points: ["NVMe storage", "Server-level caching", "CDN ready"],
  },
  {
    title: "Security & backups",
    body: "Firewalls, malware scanning, free SSL and automated offsite snapshots protect your data.",
    points: ["Daily backups", "Free SSL", "Malware scanning"],
  },
  {
    title: "Managed by Eworld",
    body: "Migration, OS patching, monitoring and local phone support from the team you already know.",
    points: ["Free migration help", "24/7 monitoring", "Local Calicut support"],
  },
];

function CloudHosting() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Servers · Cloud"
          title="Cloud hosting that grows with your business"
          image={pageImage}
          imageAlt="Cloud server infrastructure"
        >
          Elastic resources, redundant storage and managed support — ideal for growing websites,
          e-commerce stores and business applications.
        </PageHero>
        <Cards items={items} />
        <section className="mx-auto max-w-7xl px-5 pb-4">
          <a
            href="https://eworld.co.in/cloud-hosting.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-primary/50 px-5 py-2.5 text-sm text-primary"
          >
            View cloud hosting plans
          </a>
        </section>
        <CtaBand />
        <RelatedLinks current="/cloud-hosting" />
      </main>
      <Footer />
    </div>
  );
}
