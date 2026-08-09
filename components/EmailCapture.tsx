"use client";

import { useState } from "react";

/**
 * PHASE 2.3 -- the largest single leak in the old funnel. Android visitors,
 * desktop visitors, and anyone not installing today had no second path and no
 * capture. This is the universal fallback CTA.
 *
 * LAW IV: double opt-in, no pre-checked consent, no re-engagement pattern.
 */
export function EmailCapture({ context = "general" }: { context?: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit() {
    if (!email.includes("@")) {
      setState("error");
      setMessage("That address is missing an @. Check it and try again.");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, context }),
      });
      if (!res.ok) throw new Error();
      setState("sent");
      setMessage("Check your inbox and confirm. Nothing sends until you do.");
    } catch {
      setState("error");
      setMessage("That did not send. Try again, or write to support.");
    }
  }

  if (state === "sent") {
    return (
      <p className="data border border-verify/40 bg-verify/10 px-5 py-4 text-sm text-bone">
        {message}
      </p>
    );
  }

  return (
    <div className="border border-ink-raised bg-ink-deep px-5 py-6">
      <p className="eyebrow">Plan the season</p>
      <p className="mt-2 text-sm text-slate">
        Get the route file and the access notes. One send, no cadence.
      </p>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <label htmlFor="capture-email" className="sr-only">
          Email address
        </label>
        <input
          id="capture-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="data flex-1 border border-ink-raised bg-ink px-4 py-3 text-sm text-bone placeholder:text-slate/60"
        />
        <button
          type="button"
          onClick={submit}
          disabled={state === "sending"}
          className="display bg-brass px-6 py-3 text-sm text-ink disabled:opacity-60"
        >
          {state === "sending" ? "Sending" : "Send it"}
        </button>
      </div>

      {state === "error" && (
        <p role="alert" className="mt-3 text-sm text-brass-lit">
          {message}
        </p>
      )}
    </div>
  );
}
