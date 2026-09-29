import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://eworld.co.in";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/hosting", changefreq: "monthly", priority: "0.9" },
          { path: "/digital-marketing", changefreq: "monthly", priority: "0.9" },
          { path: "/ai-solutions", changefreq: "monthly", priority: "0.9" },
          { path: "/linux-hosting", changefreq: "monthly", priority: "0.8" },
          { path: "/windows-hosting", changefreq: "monthly", priority: "0.8" },
          { path: "/wordpress-hosting", changefreq: "monthly", priority: "0.8" },
          { path: "/vps-hosting", changefreq: "monthly", priority: "0.8" },
          { path: "/dedicated-servers", changefreq: "monthly", priority: "0.8" },
          { path: "/managed-servers", changefreq: "monthly", priority: "0.8" },
          { path: "/cloud-hosting", changefreq: "monthly", priority: "0.8" },
          { path: "/linux-reseller-hosting", changefreq: "monthly", priority: "0.8" },
          { path: "/windows-reseller-hosting", changefreq: "monthly", priority: "0.8" },
          { path: "/microsoft-mail", changefreq: "monthly", priority: "0.8" },
          { path: "/zoho-mail", changefreq: "monthly", priority: "0.8" },
          { path: "/ssl-certificate", changefreq: "monthly", priority: "0.8" },
          { path: "/site-lock", changefreq: "monthly", priority: "0.8" },
          { path: "/website-backup", changefreq: "monthly", priority: "0.8" },
          { path: "/about", changefreq: "yearly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.7" },
          { path: "/payment-methods", changefreq: "yearly", priority: "0.6" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
