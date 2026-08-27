import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/hosting.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, CtaBand, RelatedLinks } from "@/components/site/Section";
import { Plans, type Plan } from "@/components/site/Plans";

const title = "Linux Reseller Hosting Plans — cPanel & WHM | Eworld Calicut";
const description =
  "Start your own hosting business with Eworld Linux reseller hosting: WHM/cPanel, white-label nameservers, free SSL and unlimited cPanel accounts. Basic, Advanced and Premium plans.";

export const Route = createFileRoute("/linux-reseller-hosting")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/linux-reseller-hosting" }],
  }),
  component: LinuxReseller,
});

const plans: Plan[] = [
  {
    name: "Basic",
    price: "₹499/mo",
    note: "Ideal for your first few clients",
    features: ["50 GB NVMe storage", "500 GB bandwidth", "25 cPanel accounts", "Free SSL for all sites", "WHM control panel"],
  },
  {
    name: "Advanced",
    price: "₹999/mo",
    note: "Most popular with web studios",
    highlight: true,
    features: [
      "150 GB NVMe storage",
      "1.5 TB bandwidth",
      "100 cPanel accounts",
      "White-label nameservers",
      "Free SSL + daily backups",
      "WHMCS-ready billing hooks",
    ],
  },
  {
    name: "Premium",
    price: "₹1,999/mo",
    note: "For established resellers",
    features: [
      "400 GB NVMe storage",
      "Unmetered bandwidth",
      "Unlimited cPanel accounts",
      "Private DNS & branding",
      "Priority migration support",
      "Malware scanning & firewall",
    ],
  },
];

function LinuxReseller() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Reseller hosting"
          title="Linux reseller hosting with WHM & cPanel"
          image={pageImage}
          imageAlt="Linux reseller hosting servers"
        >
          Sell hosting under your own brand on tuned Linux servers — white-label nameservers, free
          SSL, daily backups and local support from Eworld.
        </PageHero>
        <Plans
          plans={plans}
          title="Linux reseller plans"
          subtitle="All plans include WHM, cPanel, Softaculous installers, free SSL and free migration of existing accounts."
          ctaLabel="Get this plan"
          ctaHref="https://eworld.partnersite.myorderbox.com/reseller.php"
        />
        <CtaBand />
        <RelatedLinks current="/linux-reseller-hosting" />
      </main>
      <Footer />
    </div>
  );
}
