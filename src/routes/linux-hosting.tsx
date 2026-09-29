import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/hosting.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand, RelatedLinks } from "@/components/site/Section";

const title = "Linux Web Hosting in Calicut, Kerala \u2014 cPanel, SSD & Free SSL | Eworld";
const description = "Affordable Linux shared hosting in Calicut with cPanel, SSD storage, free SSL, PHP/MySQL, daily backups and local Kerala support from Eworld.";

export const Route = createFileRoute("/linux-hosting")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/linux-hosting" }],
  }),
  component: PLinuxHosting,
});

const items = [
  {
    "title": "cPanel control panel",
    "body": "Manage files, databases, email and domains from the industry-standard cPanel dashboard.",
    "points": [
      "One-click Softaculous installers",
      "File manager & FTP",
      "DNS management"
    ]
  },
  {
    "title": "PHP, MySQL & more",
    "body": "Run PHP, Laravel, Joomla, Drupal and other open-source apps on tuned Linux servers.",
    "points": [
      "Multiple PHP versions",
      "MySQL / MariaDB",
      "Cron jobs & SSH"
    ]
  },
  {
    "title": "SSD speed",
    "body": "Pure SSD storage and server caching for faster page loads and better Google rankings.",
    "points": [
      "SSD storage",
      "LiteSpeed/Apache caching",
      "Optimised for Core Web Vitals"
    ]
  },
  {
    "title": "Free SSL & security",
    "body": "Every site gets HTTPS plus firewall and malware protection.",
    "points": [
      "Free SSL certificate",
      "Malware scanning",
      "Spam-filtered email"
    ]
  },
  {
    "title": "Business email included",
    "body": "Create professional email accounts on your own domain.",
    "points": [
      "Webmail access",
      "IMAP / POP3 / SMTP",
      "Mobile sync"
    ]
  },
  {
    "title": "Local Kerala support",
    "body": "Real people in Calicut to help with setup, migration and troubleshooting.",
    "points": [
      "Phone & WhatsApp support",
      "Free website migration",
      "Since 2001"
    ]
  }
];

function PLinuxHosting() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero eyebrow="Shared hosting \u00b7 Linux" title="Fast, affordable Linux web hosting with cPanel" image={pageImage} imageAlt="Shared hosting \u00b7 Linux">
          {"Ideal for business websites, blogs and PHP applications \u2014 cPanel control, free SSL and friendly local support from Calicut."}
        </PageHero>
        <Cards items={items} />
        <section className="mx-auto max-w-7xl px-5 pb-4">
          <a
            href="https://eworld.co.in/linux-shared-hosting.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-primary/50 px-5 py-2.5 text-sm text-primary"
          >
            View Linux hosting plans
          </a>
        </section>
        <CtaBand />
        <RelatedLinks current="/linux-hosting" />
      </main>
      <Footer />
    </div>
  );
}
