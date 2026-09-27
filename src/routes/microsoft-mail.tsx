import { createFileRoute } from "@tanstack/react-router";
import { microsoftMailPlans as plans } from "@/lib/plan-defaults";
import pageImage from "@/assets/web-design.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, RelatedLinks } from "@/components/site/Section";
import { Plans } from "@/components/site/Plans";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const title = "Microsoft 365 Mail for Business in India — Plans | Eworld";
const description =
  "Microsoft 365 email hosting from Eworld India: Outlook on your domain, 50 GB–100 GB mailboxes, Teams, OneDrive and Office apps. Compare plans and request a quote.";

export const Route = createFileRoute("/microsoft-mail")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/microsoft-mail" }],
  }),
  component: MicrosoftMail,
});

const features = [
  {
    title: "Outlook on your own domain",
    body: "Professional you@yourcompany.com mailboxes with Outlook web, desktop and mobile apps.",
    points: ["Exchange Online", "ActiveSync & IMAP", "Shared calendars & contacts"],
  },
  {
    title: "Enterprise-grade security",
    body: "Microsoft Defender anti-spam and anti-phishing, encryption in transit and at rest.",
    points: ["Anti-spam & anti-malware", "MFA support", "Data loss prevention (higher plans)"],
  },
  {
    title: "Teams & collaboration",
    body: "Chat, meetings and file collaboration built into the same subscription.",
    points: ["Microsoft Teams", "OneDrive 1 TB", "SharePoint intranet"],
  },
  {
    title: "Migration & local support",
    body: "Eworld migrates existing mailboxes, sets up DNS and trains your team — from Calicut.",
    points: ["Free DNS/MX setup", "Mailbox migration", "Billing in INR"],
  },
];


function MicrosoftMail() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Email"
          title="Microsoft Mail (Microsoft 365) for your business"
          image={pageImage}
          imageAlt="Microsoft 365 business email on a laptop"
        >
          Licensed Microsoft 365 mailboxes supplied, migrated and supported by Eworld India —
          Outlook, Teams and Office on your own domain.
        </PageHero>
        <Cards items={features} />
        <Plans
          plans={plans}
          title="Microsoft Mail plans (India pricing)"
          subtitle="Annual commitment pricing, exclusive of GST. Mix and match plans across your team."
          ctaLabel="Enquire about this plan"
          onCta={() => document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" })}
        />
        <EnquiryForm service="Microsoft Mail" />
        <RelatedLinks current="/microsoft-mail" />
      </main>
      <Footer />
    </div>
  );
}
