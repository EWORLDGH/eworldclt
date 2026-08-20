import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { site, telHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h2 className="font-display text-lg font-semibold">Get in touch</h2>
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
            <li>
              <Link to="/services" className="hover:text-foreground">
                Website design & development
              </Link>
            </li>
            <li>
              <Link to="/hosting" className="hover:text-foreground">
                Web, cloud & VPS hosting
              </Link>
            </li>
            <li>
              <Link to="/digital-marketing" className="hover:text-foreground">
                SEO & digital marketing
              </Link>
            </li>
            <li>
              <Link to="/ai-solutions" className="hover:text-foreground">
                AI automation & chatbots
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-foreground">
                About Eworld
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">Eworld since {site.since}</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Calicut-based website design, hosting and digital marketing company, now building
            AI-powered websites, assistants and automation for businesses across Kerala, India and
            the Gulf.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-6 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
