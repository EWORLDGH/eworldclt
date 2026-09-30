import { useSite } from "@/lib/content";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import pageImage from "@/assets/web-design.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, RelatedLinks } from "@/components/site/Section";
import { site, telHref } from "@/lib/site";

const title = "Contact Eworld — Website Design & Hosting, Mavoor Road, Calicut";
const description =
  "Call +91-495-4602392 or +91-8714817742, email contact@eworld.co.in, or visit Eworld at IInd Floor, Daya Building, Mavoor Road, Calicut, Kerala.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const site = useSite();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero eyebrow="Contact" title="Talk to the Eworld team in Calicut" image={pageImage} imageAlt="Eworld office desk setup">
          Tell us what you need — a new website, hosting migration, SEO help or an AI assistant. We
          reply the same working day.
        </PageHero>

        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <MapPin className="size-5 text-primary" />
              <h2 className="mt-3 font-display text-lg font-semibold">Office</h2>
              <address className="mt-2 text-sm not-italic text-muted-foreground">
                {site.address}
              </address>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <Phone className="size-5 text-primary" />
              <h2 className="mt-3 font-display text-lg font-semibold">Phone</h2>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {site.phones.map((p) => (
                  <li key={p}>
                    <a href={telHref(p)} className="hover:text-foreground">
                      {p}
                    </a>
                  </li>
                ))}
                <li>Office mobile: {site.mobile}</li>
                <li>Emergency: {site.emergency.join(", ")}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <Mail className="size-5 text-primary" />
              <h2 className="mt-3 font-display text-lg font-semibold">Email & chat</h2>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {site.emails.map((e) => (
                  <li key={e}>
                    <a href={`mailto:${e}`} className="hover:text-foreground">
                      {e}
                    </a>
                  </li>
                ))}
                <li>Skype: {site.skype}</li>
              </ul>
              <a
                href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow"
              >
                <MessageCircle className="size-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="font-display text-lg font-semibold">Send an enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This form opens your email app with the details filled in.
            </p>
            <form
              className="mt-6 space-y-4"
              action={`mailto:${site.emails[0]}`}
              method="post"
              encType="text/plain"
            >
              <div>
                <label htmlFor="name" className="text-sm text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm text-muted-foreground">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground">
                  What do you need?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Our Associates
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Besides our Calicut office, Eworld works with trusted associates across the Gulf, USA
            and New Zealand — same team standards, closer to you.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                UAE
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">Eworld LLC</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Sharjah Media City, Sharjah – 515000, U.A.E
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a href="mailto:mail@e-world.ae" className="hover:text-foreground">
                    mail@e-world.ae
                  </a>
                </li>
                <li className="flex gap-2">
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a href={telHref("+971565661359")} className="hover:text-foreground">
                    +971 56 566 1359
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                UAE
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">
                Stars Net Information Technology
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Office No: 19, Hamash A Building, Al Karama, Dubai, UAE
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a href={telHref("+971554108100")} className="hover:text-foreground">
                    +971 55 410 8100
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                USA
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">Cybermox</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                2160 Turnberry Way, Woodstock, Maryland, 21163
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a href={telHref("+14433648478")} className="hover:text-foreground">
                    443-364-8478
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                New Zealand
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">
                Aiwin Media – United Web Solution
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                40, Ohaupo Road, Melville, Hamilton 3206, Waikto, New Zealand
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a href={telHref("+642040415102")} className="hover:text-foreground">
                    +64 20 4041 5102
                  </a>
                </li>
                <li className="flex gap-2">
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a
                    href="https://wa.me/64225005028"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground"
                  >
                    +64 22 500 5028
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                Qatar
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">Cybermox</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Tuffail Street, Zone 45, PO Box# 30709, Doha, Qatar
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  <a href={telHref("+97431149966")} className="hover:text-foreground">
                    +974 31149966
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <RelatedLinks current="/contact" />
      </main>
      <Footer />
    </div>
  );
}
