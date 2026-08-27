import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/ai.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand, RelatedLinks } from "@/components/site/Section";

const title = "SiteLock Website Security — Malware Scan & Firewall | Eworld";
const description =
  "What SiteLock is and how it protects your website: daily malware scanning, automatic removal, web application firewall, CDN and trust seal. Available from Eworld, Calicut.";

export const Route = createFileRoute("/site-lock")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/site-lock" }],
  }),
  component: SiteLock,
});

const items = [
  {
    title: "What is SiteLock?",
    body: "A cloud security service that scans your website every day, removes malware automatically and blocks attacks before they reach your server.",
    points: ["Daily malware scanning", "Automatic malware removal", "Works with any hosting"],
  },
  {
    title: "Web application firewall",
    body: "Filters malicious traffic, SQL injection and cross-site scripting attempts at the edge.",
    points: ["OWASP rule protection", "Bad bot blocking", "DDoS mitigation"],
  },
  {
    title: "Vulnerability patching",
    body: "Detects outdated CMS plugins and themes and patches known vulnerabilities in WordPress and Joomla.",
    points: ["CMS vulnerability scan", "Virtual patching", "Plugin risk alerts"],
  },
  {
    title: "Blacklist protection",
    body: "Monitors search engine blacklists so a hack never quietly kills your Google traffic.",
    points: ["Blacklist monitoring", "Reputation alerts", "Faster clean-up"],
  },
  {
    title: "Trust seal & CDN",
    body: "Display a security seal that raises conversions, with an optional CDN that speeds up delivery.",
    points: ["SiteLock trust seal", "Global CDN", "Better page speed"],
  },
  {
    title: "Managed by Eworld",
    body: "We install, configure and monitor SiteLock for you and act on alerts on your behalf.",
    points: ["Setup included", "Alert monitoring", "Local support"],
  },
];

function SiteLock() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Security"
          title="SiteLock — keep your website clean and trusted"
          image={pageImage}
          imageAlt="Website security shield"
        >
          Malware finds small business websites first. SiteLock scans, cleans and defends your site
          around the clock so your visitors and rankings stay safe.
        </PageHero>
        <Cards items={items} />
        <section className="mx-auto max-w-7xl px-5 pb-4">
          <a
            href="https://eworld.supersite2.myorderbox.com/website-security.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
          >
            Get SiteLock protection
          </a>
        </section>
        <CtaBand />
        <RelatedLinks current="/site-lock" />
      </main>
      <Footer />
    </div>
  );
}
