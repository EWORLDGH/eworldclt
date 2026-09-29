import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/hosting.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand, RelatedLinks } from "@/components/site/Section";

const title = "VPS Hosting in India \u2014 Linux Virtual Private Servers | Eworld";
const description = "Scalable Linux VPS hosting with full root access, SSD storage, dedicated resources and optional management. Affordable virtual private servers from Eworld, Calicut.";

export const Route = createFileRoute("/vps-hosting")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/vps-hosting" }],
  }),
  component: PVpsHosting,
});

const items = [
  {
    "title": "Guaranteed resources",
    "body": "Dedicated CPU, RAM and storage that aren't shared with noisy neighbours.",
    "points": [
      "Guaranteed RAM",
      "Dedicated vCPU",
      "SSD/NVMe storage"
    ]
  },
  {
    "title": "Full root access",
    "body": "Install any software, configure the server and choose your stack.",
    "points": [
      "Root / SSH access",
      "CentOS, Ubuntu, AlmaLinux",
      "Custom firewall rules"
    ]
  },
  {
    "title": "Instant scaling",
    "body": "Upgrade CPU, RAM or disk as your traffic grows without rebuilding.",
    "points": [
      "Easy upgrades",
      "Snapshots",
      "Predictable pricing"
    ]
  },
  {
    "title": "Optional control panel",
    "body": "Add cPanel/WHM or Plesk to manage sites the easy way.",
    "points": [
      "cPanel / Plesk",
      "Webmin",
      "Multiple websites"
    ]
  },
  {
    "title": "Managed or self-managed",
    "body": "Handle it yourself, or let Eworld patch, monitor and secure your VPS.",
    "points": [
      "OS updates",
      "24/7 monitoring",
      "Security hardening"
    ]
  },
  {
    "title": "Local support",
    "body": "Talk to our Calicut team for setup, migration and troubleshooting.",
    "points": [
      "Migration assistance",
      "Phone & WhatsApp",
      "Since 2001"
    ]
  }
];

function PVpsHosting() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero eyebrow="Servers \u00b7 VPS" title="VPS hosting with dedicated resources and root access" image={pageImage} imageAlt="Servers \u00b7 VPS">
          {"Get the power and control of a private server at a fraction of the cost \u2014 ideal for growing websites, apps and developers."}
        </PageHero>
        <Cards items={items} />
        <section className="mx-auto max-w-7xl px-5 pb-4">
          <a
            href="https://eworld.co.in/Virtual-private-servers-linux.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-primary/50 px-5 py-2.5 text-sm text-primary"
          >
            View VPS plans
          </a>
        </section>
        <CtaBand />
        <RelatedLinks current="/vps-hosting" />
      </main>
      <Footer />
    </div>
  );
}
