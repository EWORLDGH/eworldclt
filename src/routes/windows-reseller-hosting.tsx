import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/hosting.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, CtaBand, RelatedLinks } from "@/components/site/Section";
import { Plans, type Plan } from "@/components/site/Plans";

const title = "Windows Reseller Hosting Plans — Plesk & ASP.NET | Eworld";
const description =
  "Eworld Windows reseller hosting with Plesk, ASP.NET, MSSQL and white-label branding. Compare Basic, Advanced and Premium reseller plans for Kerala businesses.";

export const Route = createFileRoute("/windows-reseller-hosting")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/windows-reseller-hosting" }],
  }),
  component: WindowsReseller,
});

const plans: Plan[] = [
  {
    name: "Basic",
    price: "₹649/mo",
    note: "Great for ASP.NET starters",
    features: ["50 GB SSD storage", "500 GB bandwidth", "25 Plesk accounts", "1 MSSQL database per site", "Free SSL"],
  },
  {
    name: "Advanced",
    price: "₹1,249/mo",
    note: "Best value for agencies",
    highlight: true,
    features: [
      "150 GB SSD storage",
      "1.5 TB bandwidth",
      "100 Plesk accounts",
      "ASP.NET Core & Classic ASP",
      "White-label nameservers",
      "Daily backups",
    ],
  },
  {
    name: "Premium",
    price: "₹2,399/mo",
    note: "High-volume reselling",
    features: [
      "400 GB SSD storage",
      "Unmetered bandwidth",
      "Unlimited Plesk accounts",
      "Unlimited MSSQL databases",
      "Private DNS & branding",
      "Priority support & migration",
    ],
  },
];

function WindowsReseller() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Reseller hosting"
          title="Windows reseller hosting on Plesk"
          image={pageImage}
          imageAlt="Windows reseller hosting servers"
        >
          Host ASP.NET, Classic ASP and MSSQL client sites under your own brand, with Plesk panels
          and Eworld&rsquo;s local support behind you.
        </PageHero>
        <Plans
          plans={plans}
          title="Windows reseller plans"
          subtitle="Every plan includes Plesk, ASP.NET support, MSSQL, free SSL and assisted migration."
          ctaLabel="Get this plan"
          ctaHref="https://eworld.partnersite.myorderbox.com/reseller.php"
        />
        <CtaBand />
        <RelatedLinks current="/windows-reseller-hosting" />
      </main>
      <Footer />
    </div>
  );
}
