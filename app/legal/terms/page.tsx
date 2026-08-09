import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The terms that apply to using Vanism.",
  alternates: { canonical: "/legal/terms" },
};

export default function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-20">
      <p className="eyebrow">Legal</p>
      <h1 className="display mt-4 text-4xl text-bone">Terms of service</h1>
      <p className="data mt-3 text-xs text-slate">Last updated: SET ON PUBLISH</p>
      <p className="mt-8 border-l-2 border-brass bg-ink-deep px-5 py-4 text-sm text-bone">
        BUILD NOTE -- paste the published terms verbatim before launch.
      </p>
    </article>
  );
}
