import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/marketing.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, RelatedLinks } from "@/components/site/Section";
import { Plans, type Plan } from "@/components/site/Plans";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const title = "Zoho Mail India — Business Email Plans & Setup | Eworld";
const description =
  "Zoho Mail India from Eworld: ad-free business email on your domain, data centres in India, Zoho Workplace apps and migration help. Compare plans and enquire.";

export const Route = createFileRoute("/zoho-mail")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/zoho-mail" }],
  }),
  component: ZohoMail,
});

const features = [
  {
    title: "Indian data centres",
    body: "Mail hosted in Zoho's India region, so your business data stays in country with low latency.",
    points: ["Data residency in India", "INR billing", "GST invoices"],
  },
  {
    title: "Ad-free, privacy-first",
    body: "No ad scanning of your mail, with encryption at rest and in transit.",
    points: ["S/MIME support", "TLS encryption", "Granular admin controls"],
  },
  {
    title: "Zoho Workplace apps",
    body: "Calendar, Cliq chat, WorkDrive files, Writer, Sheet and Show bundled on higher plans.",
    points: ["Shared calendars", "Team chat", "Online office suite"],
  },
  {
    title: "Setup by Eworld",
    body: "We configure MX, SPF, DKIM and DMARC records and migrate your old mailboxes.",
    points: ["Free DNS configuration", "IMAP/POP migration", "Local phone support"],
  },
];

const plans: Plan[] = [
  {
    name: "Mail Lite",
    price: "₹63 /user/mo",
    note: "5 GB or 10 GB per user",
    features: ["Ad-free webmail", "IMAP/POP & ActiveSync", "Calendar, Contacts, Tasks", "Mobile apps"],
  },
  {
    name: "Mail Premium",
    price: "₹210 /user/mo",
    note: "Best for growing teams",
    highlight: true,
    features: [
      "50 GB mailbox per user",
      "250 MB attachments",
      "Email retention & eDiscovery",
      "White-label & multiple domains",
      "Cliq, WorkDrive add-ons",
    ],
  },
  {
    name: "Workplace",
    price: "₹252 /user/mo",
    note: "Mail + full office suite",
    features: [
      "30 GB mail + 10 GB WorkDrive",
      "Writer, Sheet, Show",
      "Cliq chat & Meeting",
      "Connect intranet",
      "Admin & security console",
    ],
  },
];

function ZohoMail() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Email"
          title="Zoho Mail for Indian businesses"
          image={pageImage}
          imageAlt="Zoho Mail business email dashboard"
        >
          Affordable, ad-free business email hosted in India — supplied, migrated and supported by
          Eworld, Calicut.
        </PageHero>
        <Cards items={features} />
        <Plans
          plans={plans}
          title="Zoho Mail plans (India pricing)"
          subtitle="Annual pricing per user, exclusive of GST. Volume discounts available for 25+ mailboxes."
          ctaLabel="Enquire about this plan"
          onCta={() => document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" })}
        />
        <EnquiryForm service="Zoho Mail" />
        <RelatedLinks current="/zoho-mail" />
      </main>
      <Footer />
    </div>
  );
}
