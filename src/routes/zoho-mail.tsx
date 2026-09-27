import { createFileRoute } from "@tanstack/react-router";
import { zohoMailPlans as plans } from "@/lib/plan-defaults";
import pageImage from "@/assets/marketing.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, RelatedLinks } from "@/components/site/Section";
import { Plans } from "@/components/site/Plans";
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
