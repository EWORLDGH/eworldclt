import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand } from "@/components/site/Section";

const title = "Web Hosting, VPS & Domain Registration in Calicut | Eworld";
const description =
  "Reliable Linux and Windows hosting, WordPress hosting, VPS, cloud and dedicated servers, business email and domain registration from Eworld, Calicut.";

export const Route = createFileRoute("/hosting")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hosting" }],
  }),
  component: Hosting,
});

const items = [
  {
    title: "Shared hosting",
    body: "Linux, Windows and tuned WordPress hosting with cPanel, free SSL and daily backups.",
    points: ["SSD storage", "Free SSL certificate", "One-click installers"],
  },
  {
    title: "VPS & cloud servers",
    body: "Scalable virtual servers with root access, snapshots and predictable pricing.",
    points: ["Managed or self-managed", "Instant resource upgrades", "Indian & global regions"],
  },
  {
    title: "Dedicated & managed servers",
    body: "Single-tenant hardware with proactive monitoring, patching and hardening by our team.",
    points: ["Custom configurations", "OS & panel management", "Migration assistance"],
  },
  {
    title: "Business & enterprise email",
    body: "Professional email on your own domain with spam filtering and mobile sync.",
    points: ["Anti-spam & antivirus", "IMAP/ActiveSync", "Shared calendars"],
  },
  {
    title: "Domains & reseller",
    body: "Domain registration, transfers, new extensions, plus white-label reseller hosting.",
    points: ["Bulk registration", "Free DNS management", "Reseller control panel"],
  },
  {
    title: "Backups & security",
    body: "Offsite backups, malware scanning and firewall rules to keep your site online.",
    points: ["Automated snapshots", "Malware cleanup", "Uptime alerts"],
  },
];

function Hosting() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero eyebrow="Hosting & Infrastructure" title="Hosting you can call someone about">
          Secure, affordable and monitored hosting backed by local, responsive support — the same
          service that has kept Kerala businesses online since 2001.
        </PageHero>
        <Cards items={items} />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
