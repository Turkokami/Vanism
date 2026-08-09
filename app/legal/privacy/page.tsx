import type { Metadata } from "next";

/**
 * PHASE 0.2 -- App Store Connect must point here, not at the C3I gateway
 * subdomain. Flip APP_STORE_LEGAL_REPOINTED once Connect is updated; the
 * redirect in next.config.ts stays disabled until then.
 *
 * REPLACE the body with the published policy text. Do not paraphrase it.
 */

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Vanism collects, stores and deletes rider data.",
  alternates: { canonical: "/legal/privacy" },
};

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-20">
      <p className="eyebrow">Legal</p>
      <h1 className="display mt-4 text-4xl text-bone">Privacy policy</h1>
      <p className="data mt-3 text-xs text-slate">Last updated: SET ON PUBLISH</p>

      <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate">
        <p className="border-l-2 border-brass bg-ink-deep px-5 py-4 text-bone">
          BUILD NOTE -- paste the published policy verbatim here before launch.
          The existing policy already states the rule that carries Law I:
          Dragon is earned virtual currency and is never sold for real money.
          Keep that sentence intact; it is load-bearing.
        </p>
      </div>
    </article>
  );
}
