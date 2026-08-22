import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/eworld-logo.png.asset.json";
import { site, telHref } from "@/lib/site";


export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">

        <div>
          <span className="inline-block rounded-xl bg-brand-plate px-2.5 py-1.5 ring-1 ring-border/60">
            <img
              src={logoAsset.url}
              alt="Eworld Information Systems logo"
              loading="lazy"
              width={301}
              height={78}
              className="h-8 w-auto"
            />
          </span>
          <h2 className="mt-5 font-display text-lg font-semibold">Get in touch</h2>

          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <address className="not-italic">{site.address}</address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {site.phones.map((p) => (
                  <a key={p} href={telHref(p)} className="mr-2 hover:text-foreground">
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
                className="hover:text-foreground"
              >
                WhatsApp {site.emergency[0]}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {site.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="block hover:text-foreground">
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
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/services", label: "Website design & development" },
              { to: "/hosting", label: "Web, cloud & VPS hosting" },
              { to: "/digital-marketing", label: "SEO & digital marketing" },
              { to: "/ai-solutions", label: "AI automation & chatbots" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Eworld" },
              { to: "/contact", label: "Contact us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="/sitemap.xml" className="hover:text-foreground">
                Sitemap
              </a>
            </li>
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            Eworld since {site.since} — Calicut-based website design, hosting, digital marketing and
            AI solutions for businesses across Kerala, India and the Gulf.
          </p>
        </div>

      </div>
      <div className="border-t border-border/60 px-5 py-6 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
