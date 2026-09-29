import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/hosting.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand, RelatedLinks } from "@/components/site/Section";

const title = "Managed Dedicated Servers \u2014 Fully Managed Linux Hosting | Eworld";
const description = "Fully managed Linux dedicated servers: Eworld handles setup, OS patching, security hardening, backups and 24/7 monitoring so you can focus on business.";

export const Route = createFileRoute("/managed-servers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/managed-servers" }],
  }),
  component: PManagedServers,
});

const items = [
  {
    "title": "Server setup & tuning",
    "body": "We provision and optimise the server for your applications.",
    "points": [
      "OS installation",
      "Web / DB stack tuning",
      "Control panel setup"
    ]
  },
  {
    "title": "Patching & updates",
    "body": "Regular OS and software updates keep your server secure and stable.",
    "points": [
      "Security patches",
      "Kernel updates",
      "Software upgrades"
    ]
  },
  {
    "title": "Security hardening",
    "body": "Firewalls, intrusion detection and malware scanning configured by experts.",
    "points": [
      "Firewall management",
      "Brute-force protection",
      "Malware scanning"
    ]
  },
  {
    "title": "24/7 monitoring",
    "body": "Proactive monitoring of uptime, load and services with fast response.",
    "points": [
      "Uptime alerts",
      "Resource monitoring",
      "Issue resolution"
    ]
  },
  {
    "title": "Backups & recovery",
    "body": "Scheduled backups and fast restoration when you need it.",
    "points": [
      "Automated backups",
      "Offsite storage",
      "Disaster recovery"
    ]
  },
  {
    "title": "Dedicated support",
    "body": "A local Calicut team that knows your setup and answers the phone.",
    "points": [
      "Free migration",
      "Priority support",
      "Since 2001"
    ]
  }
];

function PManagedServers() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero eyebrow="Servers \u00b7 Managed" title="Fully managed servers \u2014 we run it, you grow" image={pageImage} imageAlt="Servers \u00b7 Managed">
          {"Dedicated server power without the admin headache. Our engineers handle maintenance, security and monitoring round the clock."}
        </PageHero>
        <Cards items={items} />
        <section className="mx-auto max-w-7xl px-5 pb-4">
          <a
            href="https://eworld.co.in/managed-linux-dedicated-servers.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-primary/50 px-5 py-2.5 text-sm text-primary"
          >
            View managed server plans
          </a>
        </section>
        <CtaBand />
        <RelatedLinks current="/managed-servers" />
      </main>
      <Footer />
    </div>
  );
}
