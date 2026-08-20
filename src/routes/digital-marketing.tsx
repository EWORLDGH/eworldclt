import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand } from "@/components/site/Section";

const title = "SEO & Digital Marketing Company in Calicut, Kerala | Eworld";
const description =
  "SEO, Google Ads, social media, email and SMS marketing from Eworld Calicut — plus AI-search (AEO) optimisation so your business is found by ChatGPT and AI assistants.";

export const Route = createFileRoute("/digital-marketing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/digital-marketing" }],
  }),
  component: Marketing,
});

const items = [
  {
    title: "Search engine optimisation",
    body: "Technical fixes, on-page work and content built around what your customers actually search.",
    points: ["Keyword & competitor research", "Core Web Vitals", "Monthly reporting"],
  },
  {
    title: "Local SEO for Kerala",
    body: "Google Business Profile, local citations and review strategy for Calicut and district searches.",
    points: ["Map pack visibility", "Location landing pages", "Review generation"],
  },
  {
    title: "AI search visibility (AEO)",
    body: "Structured data and answer-first content so AI assistants cite your business, not a competitor.",
    points: ["Schema markup", "FAQ & entity content", "AI citation tracking"],
  },
  {
    title: "Google & Meta Ads",
    body: "Paid campaigns with tight targeting, landing pages and honest cost-per-enquiry reporting.",
    points: ["Search & shopping ads", "Retargeting", "Conversion tracking"],
  },
  {
    title: "Social media & content",
    body: "Planned content calendars, creatives and reels that fit your brand and language mix.",
    points: ["Malayalam & English", "Design + copy", "Community management"],
  },
  {
    title: "Email & SMS campaigns",
    body: "Bulk email, transactional SMS and WhatsApp campaigns with clean lists and automation.",
    points: ["Automated journeys", "Segmented lists", "Deliverability care"],
  },
];

function Marketing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero eyebrow="Digital Marketing" title="Be found on Google — and inside AI answers">
          Search behaviour is shifting from links to answers. We optimise for both, so enquiries keep
          coming from every channel your customers use.
        </PageHero>
        <Cards items={items} />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
