import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBar } from "@/components/CtaBar";
import { getRun, getRuns } from "@/lib/queries";

export const revalidate = 3600;

export async function generateStaticParams() {
  const runs = await getRuns();
  return runs.map((r) => ({ run: r.slug as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ run: string }>;
}): Promise<Metadata> {
  const { run } = await params;
  const r = await getRun(run);
  if (!r) return {};
  return {
    title: `${r.name} - multi-week overland route`,
    description: r.summary as string,
    alternates: { canonical: `/runs/${run}` },
  };
}

/** PHASE 4.1 -- each run joins at least four published objectives. */
export default async function Run({ params }: { params: Promise<{ run: string }> }) {
  const { run } = await params;
  const r = await getRun(run);
  if (!r) notFound();

  const legs = (r.run_objectives ?? []).sort(
    (a: { position: number }, b: { position: number }) => a.position - b.position
  );

  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <Breadcrumbs
        trail={[
          { name: "Runs", href: "/runs" },
          { name: r.name as string, href: `/runs/${run}` },
        ]}
      />

      <h1 className="display mt-6 text-[clamp(2.25rem,6vw,3.5rem)] text-bone">{r.name}</h1>
      <p className="mt-4 max-w-2xl text-slate">{r.summary}</p>

      <ol className="mt-12 border-t border-ink-raised">
        {legs.map((leg: { position: number; objectives: { slug: string; state: string; name: string } }) => (
          <li
            key={leg.objectives.slug}
            className="flex items-baseline gap-5 border-b border-ink-raised py-4"
          >
            <span className="data text-xs text-brass">
              {String(leg.position).padStart(2, "0")}
            </span>
            <Link
              href={`/ground/${leg.objectives.state}/${leg.objectives.slug}`}
              className="text-bone hover:text-brass"
            >
              {leg.objectives.name}
            </Link>
            <span className="data ml-auto text-xs text-slate">
              {leg.objectives.state.toUpperCase()}
            </span>
          </li>
        ))}
      </ol>

      <CtaBar context={`run-${run}`} />
    </div>
  );
}
