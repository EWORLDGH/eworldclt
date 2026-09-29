import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    paypal?: {
      Buttons: (opts: Record<string, unknown>) => { render: (el: HTMLElement) => void };
    };
  }
}

const SDK_ID = "eworld-paypal-sdk";

export function PaypalButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const [descError, setDescError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const rendered = useRef(false);

  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !window.paypal || rendered.current || !containerRef.current) return;
      rendered.current = true;
      window.paypal
        .Buttons({
          style: { color: "gold", shape: "rect", label: "paypal", layout: "vertical" },
          onClick: () => {
            setDescError((descRef.current?.value.trim().length ?? 0) < 1);
            setAmountError((amountRef.current?.value.trim().length ?? 0) < 1);
          },
          createOrder: (_data: unknown, actions: {
            order: { create: (o: Record<string, unknown>) => Promise<string> };
          }) =>
            actions.order.create({
              purchase_units: [
                {
                  description: descRef.current?.value.trim(),
                  amount: { value: amountRef.current?.value.trim() },
                },
              ],
            }),
          onApprove: (_data: unknown, actions: {
            order: { capture: () => Promise<{ payer: { name: { given_name: string } } }> };
          }) =>
            actions.order
              .capture()
              .then((details) => setDone(details.payer?.name?.given_name ?? "you")),
          onError: () => setFailed(true),
        })
        .render(containerRef.current);
    };

    const existing = document.getElementById(SDK_ID) as HTMLScriptElement | null;
    if (window.paypal) {
      init();
    } else if (existing) {
      existing.addEventListener("load", init);
    } else {
      const script = document.createElement("script");
      script.id = SDK_ID;
      script.src = "https://www.paypal.com/sdk/js?client-id=sb&currency=USD";
      script.async = true;
      script.addEventListener("load", init);
      script.addEventListener("error", () => setFailed(true));
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="max-w-md">
      <label htmlFor="pp-purpose" className="block text-sm font-medium">
        Purpose of payment
      </label>
      <input
        id="pp-purpose"
        ref={descRef}
        type="text"
        maxLength={127}
        className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        placeholder="e.g. Website design invoice 1234"
      />
      {descError ? <p className="mt-1 text-xs text-destructive">Please enter a purpose</p> : null}

      <label htmlFor="pp-amount" className="mt-4 block text-sm font-medium">
        Enter Amount (USD)
      </label>
      <input
        id="pp-amount"
        ref={amountRef}
        type="number"
        min="1"
        step="0.01"
        className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        placeholder="100"
      />
      {amountError ? <p className="mt-1 text-xs text-destructive">Please enter an amount</p> : null}

      <div className="mt-4 min-h-12" ref={containerRef} />

      {done ? (
        <p className="mt-3 rounded-md border border-primary/40 bg-accent px-3 py-2 text-sm">
          Thank you — payment completed by {done}. We will confirm by email shortly.
        </p>
      ) : null}
      {failed ? (
        <p className="mt-3 text-sm text-muted-foreground">
          The PayPal button could not load. Please email contact@eworld.co.in for an e-bill instead.
        </p>
      ) : null}
    </div>
  );
}
