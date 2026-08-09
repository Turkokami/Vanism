import type { Metadata } from "next";
import Link from "next/link";
import { CtaBar } from "@/components/CtaBar";
import { getRuns } from "@/lib/queries";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "The Runs - named multi-week overland routes",
  description:
    "Named routes that join verified objectives into a season. Each leg is a place a rider confirmed on the ground.",
  alternates: { canonical: "/runs" },
};

export default async function RunsIndex() {
  const runs = await getRuns();

  return (
    <div className="mx-auto max-w-4xl px-5 py-20">
      <p className="eyebrow">The Runs</p>
      <h1 className="display mt-4 text-5xl text-bone">Routes with an ending</h1>
      <p className="mt-5 max-w-xl text-slate">
        A run is a named sequence of objectives. You finish it by reaching every
        leg yourself. Half-finished runs stay on your record until you close them.
      </p>

      <ul className="mt-12 divide-y divide-ink-raised border-y border-ink-raised">
        {runs.map((r) => (
          <li key={r.slug as string} className="py-6">
            <h2 className="display text-2xl text-bone">
              <Link href={`/runs/${r.slug}`} className="hover:text-brass">
                {r.name as string}
              </Link>
            </h2>
            <p className="mt-2 text-sm text-slate">{r.summary as string}</p>
          </li>
        ))}
      </ul>

      <CtaBar context="runs-index" />
    </div>
  );
}
