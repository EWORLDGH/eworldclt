import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/ai.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand, RelatedLinks } from "@/components/site/Section";

const title = "SSL Certificates in Calicut — DV, OV, EV & Wildcard | Eworld";
const description =
  "What SSL certificates are and which one you need. Buy DV, OV, EV and wildcard SSL through Eworld with installation help and HTTPS setup for your website.";

export const Route = createFileRoute("/ssl-certificate")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ssl-certificate" }],
  }),
  component: Ssl,
});

const items = [
  {
    title: "What is an SSL certificate?",
    body: "A digital certificate that encrypts traffic between your visitor's browser and your server, turning http:// into a padlocked https://.",
    points: ["Encrypts forms & logins", "Verifies your identity", "Shows the browser padlock"],
  },
  {
    title: "Domain Validation (DV)",
    body: "Issued within minutes after proving domain control — the quickest option for blogs and small sites.",
    points: ["Fast issuance", "Lowest cost", "Single or multi-domain"],
  },
  {
    title: "Organisation Validation (OV)",
    body: "The certificate authority verifies your registered business, so your company name appears in the certificate.",
    points: ["Business vetting", "Higher trust", "Ideal for company sites"],
  },
  {
    title: "Extended Validation (EV)",
    body: "The strictest vetting, preferred by banks, payment gateways and large e-commerce brands.",
    points: ["Deepest verification", "Maximum trust signals", "Warranty cover"],
  },
  {
    title: "Wildcard & multi-domain",
    body: "Secure unlimited subdomains with one wildcard certificate, or many domains with a SAN certificate.",
    points: ["*.yourdomain.com", "Up to 100 domains (SAN)", "One renewal to manage"],
  },
  {
    title: "SEO & compliance benefits",
    body: "HTTPS is a Google ranking signal, avoids 'Not secure' warnings and is required for online payments.",
    points: ["Ranking signal", "PCI-DSS requirement", "No browser warnings"],
  },
];

function Ssl() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Security"
          title="SSL certificates — encrypt and earn trust"
          image={pageImage}
          imageAlt="Secure padlock representing SSL encryption"
        >
          We help you pick the right certificate, issue it, install it on your server and keep it
          renewed — no downtime, no mixed-content headaches.
        </PageHero>
        <Cards items={items} />
        <section className="mx-auto max-w-7xl px-5 pb-4">
          <a
            href="https://eworld.supersite2.myorderbox.com/digital-certificate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
          >
            Buy an SSL certificate
          </a>
        </section>
        <CtaBand />
        <RelatedLinks current="/ssl-certificate" />
      </main>
      <Footer />
    </div>
  );
}
