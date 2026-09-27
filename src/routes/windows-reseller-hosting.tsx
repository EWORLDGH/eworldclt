import { createFileRoute } from "@tanstack/react-router";
import { windowsResellerPlans as plans } from "@/lib/plan-defaults";
import pageImage from "@/assets/hosting.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, CtaBand, RelatedLinks } from "@/components/site/Section";
import { Plans } from "@/components/site/Plans";

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
