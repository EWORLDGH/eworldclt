import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin sign in | Eworld" },
      { name: "description", content: "Sign in to manage the Eworld website content." },
      { property: "og:title", content: "Admin sign in | Eworld" },
      { property: "og:description", content: "Sign in to manage the Eworld website content." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin", replace: true });
    });
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) navigate({ to: "/admin", replace: true });
    });
    return () => data.subscription.unsubscribe();
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg(error.message);
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin` },
      });
      if (error) setMsg(error.message);
      else if (!data.session) setMsg("Check your email and click the confirmation link, then sign in.");
    }
    setBusy(false);
  };

  const field =
    "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary";

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink bg-grid-dark px-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-glow">
        <h1 className="font-display text-2xl font-bold">Eworld admin</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {mode === "in" ? "Sign in to edit your website." : "Create the admin account (first account only)."}
        </p>
        <label className="mt-6 block text-sm">
          Email
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
        </label>
        <label className="mt-4 block text-sm">
          Password
          <input required type="password" minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} className={field} />
        </label>
        {msg ? <p className="mt-4 text-sm text-primary">{msg}</p> : null}
        <button
          disabled={busy}
          className="mt-6 w-full rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-60"
        >
          {busy ? "Please wait…" : mode === "in" ? "Sign in" : "Create account"}
        </button>
        <button
          type="button"
          onClick={() => setMode(mode === "in" ? "up" : "in")}
          className="mt-4 w-full text-center text-xs text-muted-foreground hover:text-foreground"
        >
          {mode === "in" ? "First time? Create the admin account" : "Already have an account? Sign in"}
        </button>
      </form>
    </div>
  );
}
