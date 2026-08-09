import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { VerificationStamp } from "@/components/VerificationStamp";
import { CtaBar } from "@/components/CtaBar";
import { getStates, getObjectivesByState } from "@/lib/queries";
import { isPublishable } from "@/lib/publishable";

export const revalidate = 1800;

/** State hubs are real pages with their own index, not redirects. */
export async function generateStaticParams() {
  const states = await getStates();
  return states.map((state) => ({ state }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const s = state.toUpperCase();
  // Category terms belong here. Doctrine governs body copy, not targeting.
  return {
    title: `${s} dispersed camping and overland sites`,
    description: `Rider-verified free camping, boondocking and overland objectives in ${s}, with access notes and recent conditions.`,
    alternates: { canonical: `/ground/${state}` },
  };
}

export default async function StateHub({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const rows = await getObjectivesByState(state);
  if (!rows.length) notFound();

  const published = rows.filter(isPublishable);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <Breadcrumbs
        trail={[
          { name: "Ground", href: "/ground" },
          { name: state.toUpperCase(), href: `/ground/${state}` },
        ]}
      />

      <h1 className="display mt-6 text-5xl text-bone">{state.toUpperCase()}</h1>
      <p className="data mt-2 text-xs text-slate">
        {published.length} published &middot; {rows.length - published.length} awaiting verification
      </p>

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {published.map((o) => (
          <li key={o.slug} className="border border-ink-raised p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="display text-xl text-bone">
                  <Link href={`/ground/${state}/${o.slug}`} className="hover:text-brass">
                    {o.name}
                  </Link>
                </h2>
                <p className="data mt-1 text-xs uppercase tracking-[0.12em] text-slate">
                  {o.access_status}
                </p>
              </div>
              <VerificationStamp
                count={o.verified_checkins}
                lastVerified={o.last_verified_at}
              />
            </div>
          </li>
        ))}
      </ul>

      <CtaBar context={`ground-${state}`} />
    </div>
  );
}
