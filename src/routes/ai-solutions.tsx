import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand } from "@/components/site/Section";

const title = "AI Integration, Chatbots & Automation Services | Eworld Calicut";
const description =
  "Eworld builds AI chatbots, voice assistants, document automation and AI-powered websites for businesses in Calicut, Kerala and the Gulf.";

export const Route = createFileRoute("/ai-solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ai-solutions" }],
  }),
  component: AiSolutions,
});

const items = [
  {
    title: "AI website assistants",
    body: "A chat assistant trained on your products, pricing and policies that answers visitors instantly.",
    points: ["Multilingual replies", "Lead capture to email/CRM", "Handoff to a human"],
  },
  {
    title: "WhatsApp & voice bots",
    body: "Automate enquiries, order status and appointment booking on the channels your customers prefer.",
    points: ["WhatsApp Business API", "Voice IVR assistants", "Booking confirmations"],
  },
  {
    title: "Document & data automation",
    body: "Extract data from invoices, forms and PDFs and push it straight into your systems.",
    points: ["Invoice & receipt parsing", "Bulk data cleanup", "Approval workflows"],
  },
  {
    title: "AI content engine",
    body: "Product descriptions, blogs and social copy generated in your brand voice, reviewed by our editors.",
    points: ["Brand tone guardrails", "SEO briefs included", "Human review step"],
  },
  {
    title: "Internal AI tools",
    body: "Private assistants over your own documents so staff find answers in seconds, not hours.",
    points: ["Secure knowledge base", "Role-based access", "Usage analytics"],
  },
  {
    title: "AI strategy & training",
    body: "A practical audit of where AI saves your team time — plus staff training to make it stick.",
    points: ["Process audit", "Tool selection", "Team workshops"],
  },
];

function AiSolutions() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero eyebrow="AI Integration" title="AI that answers customers and cuts busywork">
          We add AI to real business processes — support, sales, content and back office — with clear
          scope, sensible costs and full data control.
        </PageHero>
        <Cards items={items} />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
