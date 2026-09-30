import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { telHref } from "@/lib/site";
import { useSite } from "@/lib/content";


export function Footer() {
  const site = useSite();
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">

        <div>
          <span className="inline-block rounded-md bg-brand-plate px-2.5 py-2">
            <img
              src={logoAsset.url}
              alt="Eworld logo"
              loading="lazy"
              width={230}
              height={70}
              className="h-11 w-auto"
            />
          </span>
          <h2 className="mt-5 font-display text-lg font-semibold">Get in touch</h2>

          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <address className="not-italic">{site.address}</address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {site.phones.map((p) => (
                  <a key={p} href={telHref(p)} className="mr-2 hover:text-ink-foreground">
                    {p}
                  </a>
                ))}
                <br />
                Emergency: {site.emergency.join(", ")}
              </span>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" />
              <a
                href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
                className="hover:text-ink-foreground"
              >
                WhatsApp {site.emergency[0]}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {site.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="block hover:text-ink-foreground">
                    {e}
                  </a>
                ))}
                Skype: {site.skype}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
            {[
              { to: "/services", label: "Website design & development" },
              { to: "/hosting", label: "Web, cloud & VPS hosting" },
              { to: "/cloud-hosting", label: "Cloud hosting" },
              { to: "/linux-reseller-hosting", label: "Linux reseller hosting" },
              { to: "/windows-reseller-hosting", label: "Windows reseller hosting" },
              { to: "/digital-marketing", label: "SEO & digital marketing" },
              { to: "/ai-solutions", label: "AI automation & chatbots" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-ink-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">Domain, Email & Security</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
            <li>
              <a
                href="https://eworld.supersite2.myorderbox.com/domain-registration/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-foreground"
              >
                Domain registration
              </a>
            </li>
            <li>
              <a
                href="https://eworld.supersite2.myorderbox.com/domain-registration/transfer/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-foreground"
              >
                Domain transfer
              </a>
            </li>
            <li>
              <a
                href="https://eworld.supersite2.myorderbox.com/business-email"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-foreground"
              >
                Business email
              </a>
            </li>
            {[
              { to: "/microsoft-mail", label: "Microsoft Mail" },
              { to: "/zoho-mail", label: "Zoho Mail" },
              { to: "/ssl-certificate", label: "SSL certificates" },
              { to: "/site-lock", label: "SiteLock security" },
              { to: "/website-backup", label: "Website backup" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-ink-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h2 className="font-display text-lg font-semibold">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Eworld" },
              { to: "/contact", label: "Contact us" },
              { to: "/payment-methods", label: "Payment methods" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-ink-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="/sitemap.xml" className="hover:text-ink-foreground">
                Sitemap
              </a>
            </li>
          </ul>
          <p className="mt-5 text-sm text-ink-foreground/70">
            Eworld since {site.since} — Calicut-based website design, hosting, digital marketing and
            AI solutions for businesses across Kerala, India and the Gulf.
          </p>
        </div>

      </div>
      <div className="border-t border-ink-foreground/15 px-5 py-6 text-center text-xs text-ink-foreground/60">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
