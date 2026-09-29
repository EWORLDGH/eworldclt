import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero, CtaBand, RelatedLinks } from "@/components/site/Section";
import { PaypalButton } from "@/components/site/PaypalButton";
import { Check, Mail, MapPin, Smartphone } from "lucide-react";
import gpayQr from "@/assets/gpay-qr.png.asset.json";

const title = "Payment Methods — Bank Transfer, UPI, PayPal & Cards | Eworld";
const description =
  "How to pay Eworld Information Systems: bank transfer (ICICI, SBI, HDFC), Google Pay UPI, PayPal, credit card, Cashfree online payment in USD or INR, cheque, or cash at our Calicut counter.";

export const Route = createFileRoute("/payment-methods")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/payment-methods" }],
  }),
  component: PaymentMethods,
});

function Card(props: { n: string; heading: string; children: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-border/60 bg-card p-6">
      <span className="font-display text-xs font-semibold text-primary">{props.n}</span>
      <h2 className="mt-1 font-display text-lg font-semibold">{props.heading}</h2>
      <div className="mt-3 space-y-3 text-sm text-muted-foreground">{props.children}</div>
    </article>
  );
}

function Detail(props: { label: string; value: string }) {
  return (
    <p>
      <span className="font-medium text-foreground">{props.label}:</span> {props.value}
    </p>
  );
}

function PaymentMethods() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Company"
          title="Payment methods — pay your Eworld invoice"
        >
          Choose whichever way is convenient: bank transfer, Google Pay, PayPal or credit card,
          Cashfree online payment, cheque, or cash at our Calicut counter. Overseas customers can
          pay in US Dollars.
        </PageHero>

        <section className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <Card n="01" heading="Bank transfer — overseas customers (USD)">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Outside India — pay in US Dollars
              </p>
              <Detail label="Account name" value="E-WORLD INFORMATION SYSTEMS" />
              <Detail label="Bank" value="ICICI Bank, Nadakkavu Branch, Calicut, Kerala, India" />
              <Detail label="Account no." value="193805000893" />
              <Detail label="SWIFT code" value="ICICINBBXXX" />
              <Detail label="IFSC" value="ICIC0001938" />
              <p className="flex gap-2 rounded-md bg-accent px-3 py-2 text-xs text-accent-foreground">
                <Check className="mt-0.5 size-4 shrink-0" />
                Mention purpose code P0802 — Software Consultancy
              </p>
            </Card>

            <Card n="02" heading="Bank transfer — Indian customers">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Deposit or transfer to any of our accounts
              </p>
              <Detail label="1. ICICI Bank (Current)" value="E World Information Systems, A/C No. 117205500181, Mavoor Road, Calicut — IFSC: ICIC0001172" />
              <Detail label="2. State Bank of India (Current)" value="E - World Information Systems, A/C No. 41736289783, Mavoor Road, Calicut — IFSC: SBIN0070561" />
              <Detail label="3. HDFC Bank (Savings)" value="Shoukathali K.P, A/C No. 06711930002974, Nadakkavu, Calicut — IFSC: HDFC0000671" />
              <p className="rounded-md border border-border/60 px-3 py-2 text-xs">
                Cash deposit to our HDFC account: a Rs. 115/- banking charge applies. Add it to your
                deposit, or it will be deducted before the credit.
              </p>
            </Card>

            <Card n="03" heading="Cheque / Demand Draft">
              <p>
                Cheque or DD in favour of{" "}
                <span className="font-medium text-foreground">E-World Information Systems</span>,
                payable at Calicut.
              </p>
            </Card>

            <Card n="04" heading="PayPal / Credit card">
              <p>
                Pay using our PayPal ID —{" "}
                <a href="mailto:contact@eworld.co.in" className="text-primary hover:underline">
                  contact@eworld.co.in
                </a>
              </p>
              <p>
                Or request an e-bill: email us and we will generate one you can pay with PayPal or a
                credit card.
              </p>
              <p className="text-xs">(Transaction fee: 10% extra of the total amount applies)</p>
            </Card>

            <Card n="05" heading="Cash at our counter">
              <p className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  E-world Information Systems
                  <br />
                  II Floor, Daya Bldg, Indira Gandhi Road,
                  <br />
                  Calicut, Kerala, INDIA — PIN 673004
                </span>
              </p>
              <p>
                Ph: <a href="tel:+914954010179" className="text-primary hover:underline">91-495-4010179</a>
                <br />
                Mobile: <a href="tel:+918714817742" className="text-primary hover:underline">91-8714817742</a>
                <br />
                Mobile/WhatsApp: <a href="tel:+919495490975" className="text-primary hover:underline">91-9495490975</a>
              </p>
              <p>
                Email: <a href="mailto:contact@eworld.co.in" className="text-primary hover:underline">contact@eworld.co.in</a>
                <br />
                G-talk: mailtoeworld@gmail.com
              </p>
            </Card>

            <Card n="06" heading="Western Union / UAE Exchange / MoneyGram">
              <p>Send your payment to the name below, then share the transaction details with us so we can collect it.</p>
              <Detail label="Name" value="SHOUKATH ALI KP" />
              <Detail label="Mobile" value="94 954 90975" />
            </Card>

            <Card n="07" heading="Google Pay">
              <p>
                Send your payment to the Google Pay account below, then let us know by mail, call or
                WhatsApp.
              </p>
              <p className="flex gap-2">
                <Smartphone className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <span className="font-medium text-foreground">94 954 90975</span> — Name: EWORLD
                </span>
              </p>
              <p className="font-display text-base font-semibold">Scan and Pay</p>
              <img
                src={gpayQr.url}
                alt="Eworld Google Pay QR code — scan and pay to 94 954 90975"
                width={295}
                height={442}
                loading="lazy"
                className="w-40 rounded-xl border border-border/60 bg-white p-2"
              />
            </Card>

          </div>
        </section>

        <section className="border-y border-border/60 bg-accent/40">
          <div className="mx-auto max-w-7xl px-5 py-14">
            <h2 className="font-display text-2xl font-bold">Pay online now</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Prefer to settle a invoice online in one click? Use our secure Cashfree checkout in
              your currency, or pay directly with PayPal below.
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              <a
                href="https://payments.cashfree.com/forms/USDOLLAR"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-10 text-center text-ink-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                <span className="font-display text-lg font-semibold">Pay Now in USD</span>
                <span className="text-xs uppercase tracking-wider text-ink-foreground/60">
                  Powered by Cashfree
                </span>
              </a>
              <a
                href="https://payments.cashfree.com/forms/eworld"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-10 text-center text-ink-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                <span className="font-display text-lg font-semibold">Pay Now in INR</span>
                <span className="text-xs uppercase tracking-wider text-ink-foreground/60">
                  Powered by Cashfree
                </span>
              </a>

              <div className="rounded-2xl border border-border/60 bg-card p-6">
                <h3 className="font-display text-lg font-semibold">
                  US Dollar online payment using PayPal
                </h3>
                <div className="mt-4">
                  <PaypalButton />
                </div>
              </div>
            </div>

            <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                Questions about an invoice? Email{" "}
                <a href="mailto:contact@eworld.co.in" className="text-primary hover:underline">
                  contact@eworld.co.in
                </a>{" "}
                and we will confirm the amount and the best payment route for you.
              </span>
            </p>
          </div>
        </section>

        <CtaBand />
        <RelatedLinks current="/payment-methods" />
      </main>
      <Footer />
    </div>
  );
}
