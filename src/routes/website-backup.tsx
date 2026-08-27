import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/hosting.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand, RelatedLinks } from "@/components/site/Section";

const title = "Website Backup Service — Automated Offsite Backups | Eworld";
const description =
  "Why website backups matter and how Eworld protects you: automated daily offsite backups, one-click restore, ransomware recovery and 30-day version history.";

export const Route = createFileRoute("/website-backup")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/website-backup" }],
  }),
  component: WebsiteBackup,
});

const items = [
  {
    title: "Why backups matter",
    body: "Hacks, bad updates, expired plugins and human error all take websites offline. A recent backup turns a disaster into a ten-minute fix.",
    points: ["Recover from hacks", "Undo failed updates", "Protect years of content"],
  },
  {
    title: "Automated daily backups",
    body: "Files, databases and email are captured automatically on a schedule you choose.",
    points: ["Daily or hourly schedules", "Full & incremental copies", "No manual work"],
  },
  {
    title: "Offsite & ransomware safe",
    body: "Copies are stored away from your hosting server, so a compromised server cannot destroy them.",
    points: ["Separate storage location", "Encrypted at rest", "Immutable snapshots"],
  },
  {
    title: "One-click restore",
    body: "Roll back the whole site or restore a single file, folder or database table.",
    points: ["Granular restore", "30-day version history", "Test restores on request"],
  },
  {
    title: "Monitoring & reports",
    body: "Every backup is verified and reported, so you know your recovery point is real.",
    points: ["Success/failure alerts", "Integrity checks", "Monthly reporting"],
  },
  {
    title: "Handled by Eworld",
    body: "We configure the schedule, monitor it and perform restores for you when something breaks.",
    points: ["Setup included", "Emergency restores", "Local Calicut support"],
  },
];

function WebsiteBackup() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Security"
          title="Website backup — your safety net"
          image={pageImage}
          imageAlt="Data backup and recovery storage"
        >
          Automated, verified, offsite backups with one-click restore. The cheapest insurance your
          website will ever buy.
        </PageHero>
        <Cards items={items} />
        <section className="mx-auto max-w-7xl px-5 pb-4">
          <a
            href="https://eworld.supersite2.myorderbox.com/xcitiumbackup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
          >
            Order website backup
          </a>
        </section>
        <CtaBand />
        <RelatedLinks current="/website-backup" />
      </main>
      <Footer />
    </div>
  );
}
