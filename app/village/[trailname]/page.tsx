import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VerificationStamp } from "@/components/VerificationStamp";
import { getPublicRider, getPublicRiderSlugs } from "@/lib/queries";

export const revalidate = 300;

/**
 * PHASE 5.1 -- LAW IV IS THE ACCEPTANCE CRITERION.
 *
 * getPublicRider reads mv_village_standing, which filters opt_in_public inside
 * the view definition. A rider who has not opted in is not returned, and this
 * route calls notFound() -- 404, never 403. A private rider must be
 * indistinguishable from one who does not exist, by status code and by body.
 *
 * generateStaticParams draws only from public riders, so a private trailname
 * never appears in the build manifest either.
 */
export async function generateStaticParams() {
  const slugs = await getPublicRiderSlugs();
  return slugs.map((trailname) => ({ trailname }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trailname: string }>;
}): Promise<Metadata> {
  const { trailname } = await params;
  const rider = await getPublicRider(trailname);
  if (!rider) return { robots: { index: false, follow: false } };
  return {
    title: `${rider.trailname}`,
    description: `Verified check-ins and standing for ${rider.trailname} on Vanism.`,
    alternates: { canonical: `/village/${trailname}` },
  };
}

export default async function Rider({ params }: { params: Promise<{ trailname: string }> }) {
  const { trailname } = await params;
  const rider = await getPublicRider(trailname);
  if (!rider) notFound();

  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <p className="eyebrow">The Village</p>
      <h1 className="display mt-4 text-5xl text-bone">{rider.trailname}</h1>

      <div className="mt-10">
        <VerificationStamp
          count={rider.verified_checkins as number}
          lastVerified={rider.last_checkin_at as string}
          size="large"
        />
      </div>

      <dl className="mt-12 grid gap-px border border-ink-raised bg-ink-raised sm:grid-cols-3">
        {[
          ["Objectives reached", rider.objectives_reached],
          ["Runs completed", rider.runs_completed],
          ["States on record", rider.states_touched],
        ].map(([k, v]) => (
          <div key={k as string} className="bg-ink px-5 py-6">
            <dt className="eyebrow">{k as string}</dt>
            <dd className="data mt-2 text-3xl text-bone">{v as number}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 text-sm text-slate">
        Every figure here was earned on the ground. None of it was purchased,
        and none of it can be.
      </p>
    </div>
  );
}
