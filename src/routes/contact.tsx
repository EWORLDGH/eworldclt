import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/Section";
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
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero eyebrow="Contact" title="Talk to the Eworld team in Calicut">
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
      </main>
      <Footer />
    </div>
  );
}
