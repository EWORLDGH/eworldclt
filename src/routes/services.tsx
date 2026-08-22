import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/web-design.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand, RelatedLinks } from "@/components/site/Section";

const title = "Website Design & Development Company in Calicut | Eworld";
const description =
  "Responsive websites, e-commerce stores, web apps and redesigns built in Calicut by Eworld — fast, secure, SEO-ready and AI-enabled since 2001.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const items = [
  {
    title: "Business & corporate websites",
    body: "Brand-led design with clear conversion paths, built on a modern framework rather than dated templates.",
    points: ["Custom UI design", "CMS for easy editing", "Multilingual ready"],
  },
  {
    title: "E-commerce & payments",
    body: "Product catalogues, secure Indian payment gateways, shipping and inventory workflows.",
    points: ["UPI, cards, netbanking", "Order & stock management", "Abandoned-cart recovery"],
  },
  {
    title: "Web applications & portals",
    body: "Customer portals, booking systems, dashboards and internal tools with role-based access.",
    points: ["Secure authentication", "API integrations", "Reporting dashboards"],
  },
  {
    title: "Legacy website redesign",
    body: "We migrate old HTML or unsupported CMS sites without losing rankings or content.",
    points: ["301 redirect mapping", "Content migration", "Speed rebuild"],
  },
  {
    title: "Mobile-first & PWA",
    body: "Every build is designed for phones first, with app-like performance on slow networks.",
    points: ["Core Web Vitals tuning", "Offline-friendly assets", "App store wrapper option"],
  },
  {
    title: "Maintenance & support",
    body: "Ongoing updates, security patching, backups and content changes from our Calicut office.",
    points: ["Annual care plans", "Priority WhatsApp support", "Uptime monitoring"],
  },
];

function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero eyebrow="Design & Development" title="Websites built to perform, not just look good" image={pageImage} imageAlt="Website design work on a laptop">
          From a five-page brochure site to a full e-commerce platform, we design, build and maintain
          it in-house — with AI features available from day one.
        </PageHero>
        <Cards items={items} />
        <CtaBand />
        <RelatedLinks current="/services" />
      </main>
      <Footer />
    </div>
  );
}
