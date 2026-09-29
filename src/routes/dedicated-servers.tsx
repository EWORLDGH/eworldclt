import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/hosting.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand, RelatedLinks } from "@/components/site/Section";

const title = "Dedicated Servers in India \u2014 High-Performance Linux Servers | Eworld";
const description = "Powerful Linux dedicated servers with full hardware resources, root access, RAID storage, DDoS protection and 99.9% uptime from Eworld, Calicut.";

export const Route = createFileRoute("/dedicated-servers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/dedicated-servers" }],
  }),
  component: PDedicatedServers,
});

const items = [
  {
    "title": "100% your hardware",
    "body": "No sharing \u2014 every CPU core, GB of RAM and disk belongs to you.",
    "points": [
      "Intel Xeon processors",
      "High RAM options",
      "Single tenant"
    ]
  },
  {
    "title": "Enterprise storage",
    "body": "Fast, redundant disks protect your data and speed up databases.",
    "points": [
      "SSD / NVMe options",
      "RAID configurations",
      "Large storage"
    ]
  },
  {
    "title": "Full root access",
    "body": "Configure the OS, software and security exactly as you need.",
    "points": [
      "Choice of Linux OS",
      "IPMI / KVM access",
      "Custom setups"
    ]
  },
  {
    "title": "Network & uptime",
    "body": "Premium data centre network with high bandwidth and DDoS protection.",
    "points": [
      "99.9% uptime",
      "DDoS mitigation",
      "Dedicated IPs"
    ]
  },
  {
    "title": "Built for heavy workloads",
    "body": "Perfect for e-commerce, ERP, SaaS, streaming and big databases.",
    "points": [
      "High concurrency",
      "Low latency",
      "Scalable upgrades"
    ]
  },
  {
    "title": "Expert help",
    "body": "Add management, backups and monitoring from the Eworld team.",
    "points": [
      "Server setup",
      "Migration assistance",
      "Local support"
    ]
  }
];

function PDedicatedServers() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero eyebrow="Servers \u00b7 Dedicated" title="Dedicated servers for maximum power and control" image={pageImage} imageAlt="Servers \u00b7 Dedicated">
          {"An entire physical server reserved for your business \u2014 for high-traffic websites, ERP, databases and demanding applications."}
        </PageHero>
        <Cards items={items} />
        <section className="mx-auto max-w-7xl px-5 pb-4">
          <a
            href="https://eworld.co.in/linux-dedicated-servers.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-primary/50 px-5 py-2.5 text-sm text-primary"
          >
            View dedicated server plans
          </a>
        </section>
        <CtaBand />
        <RelatedLinks current="/dedicated-servers" />
      </main>
      <Footer />
    </div>
  );
}
