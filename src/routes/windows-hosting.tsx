import { createFileRoute } from "@tanstack/react-router";
import pageImage from "@/assets/hosting.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, Cards, CtaBand, RelatedLinks } from "@/components/site/Section";

const title = "Windows Web Hosting \u2014 ASP.NET, MSSQL & Plesk | Eworld Calicut";
const description = "Reliable Windows shared hosting with Plesk, ASP.NET, .NET Core, Classic ASP and MSSQL databases, free SSL and local support from Eworld, Calicut.";

export const Route = createFileRoute("/windows-hosting")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/windows-hosting" }],
  }),
  component: PWindowsHosting,
});

const items = [
  {
    "title": "ASP.NET & .NET Core",
    "body": "Host ASP.NET, ASP.NET Core, MVC and Classic ASP applications.",
    "points": [
      "Multiple .NET versions",
      "IIS web server",
      "Web.config support"
    ]
  },
  {
    "title": "MSSQL databases",
    "body": "Microsoft SQL Server databases with remote management access.",
    "points": [
      "MSSQL & MySQL",
      "Remote SSMS access",
      "Automated DB backups"
    ]
  },
  {
    "title": "Plesk control panel",
    "body": "Easily manage sites, domains, databases and email from Plesk.",
    "points": [
      "Point-and-click management",
      "Web deploy",
      "Application installers"
    ]
  },
  {
    "title": "Free SSL & security",
    "body": "HTTPS on every site, plus Windows firewall and antivirus protection.",
    "points": [
      "Free SSL certificate",
      "Anti-malware",
      "Regular patching"
    ]
  },
  {
    "title": "Business email",
    "body": "Professional mailboxes on your own domain name.",
    "points": [
      "Webmail",
      "Anti-spam",
      "IMAP / SMTP"
    ]
  },
  {
    "title": "Migration help",
    "body": "We help move your existing .NET site and database to Eworld.",
    "points": [
      "Free migration assistance",
      "Local Calicut support",
      "Phone & WhatsApp"
    ]
  }
];

function PWindowsHosting() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero eyebrow="Shared hosting \u00b7 Windows" title="Windows hosting for ASP.NET and MSSQL websites" image={pageImage} imageAlt="Shared hosting \u00b7 Windows">
          {"Plesk-powered Windows servers built for .NET applications, with MSSQL databases and support from a local team."}
        </PageHero>
        <Cards items={items} />
        <section className="mx-auto max-w-7xl px-5 pb-4">
          <a
            href="https://eworld.co.in/windows-shared-hosting.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-primary/50 px-5 py-2.5 text-sm text-primary"
          >
            View Windows hosting plans
          </a>
        </section>
        <CtaBand />
        <RelatedLinks current="/windows-hosting" />
      </main>
      <Footer />
    </div>
  );
}
