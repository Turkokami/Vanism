import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { VerificationStamp } from "@/components/VerificationStamp";
import { AnswerBox } from "@/components/AnswerBox";
import { CtaBar } from "@/components/CtaBar";
import { JsonLd } from "@/components/JsonLd";
import { objectiveGraph } from "@/lib/schema";
import { getObjective, getPublishableObjectives } from "@/lib/queries";
import { isPublishable } from "@/lib/publishable";

export const revalidate = 1800;

/**
 * PHASE 3.3 -- 60 prerendered, the rest on demand (ISR). The verification block
 * is wrapped in <Suspense> so it renders server-side without blocking the shell.
 * (Partial Prerendering is canary-only; this route runs on stable Next 15.x.)
 */
export async function generateStaticParams() {
  const rows = await getPublishableObjectives();
  return rows.slice(0, 60).map((o) => ({ state: o.state, objective: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; objective: string }>;
}): Promise<Metadata> {
  const { state, objective } = await params;
  const o = await getObjective(state, objective);
  if (!o) return {};
  const indexable = isPublishable(o);
  return {
    title: `${o.name}, ${state.toUpperCase()}`,
    description: o.summary,
    alternates: { canonical: `/ground/${state}/${objective}` },
    // Prohibition 3 -- fails the gate, renders anyway, stays out of the index.
    robots: indexable ? { index: true, follow: true } : { index: false, follow: true },
  };
}

export default async function Objective({
  params,
}: {
  params: Promise<{ state: string; objective: string }>;
}) {
  const { state, objective } = await params;
  const o = await getObjective(state, objective);
  if (!o) notFound();

  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      {isPublishable(o) && (
        <JsonLd
          data={objectiveGraph({
            slug: o.slug,
            state: o.state,
            name: o.name,
            lat: o.lat as number,
            lng: o.lng as number,
            verifiedCheckins: o.verified_checkins,
            lastVerified: o.last_verified_at as string,
            summary: o.summary,
          })}
        />
      )}

      <Breadcrumbs
        trail={[
          { name: "Ground", href: "/ground" },
          { name: state.toUpperCase(), href: `/ground/${state}` },
          { name: o.name, href: `/ground/${state}/${objective}` },
        ]}
      />

      <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
        <div>
          <h1 className="display text-[clamp(2.25rem,6vw,3.5rem)] text-bone">{o.name}</h1>
          <p className="data mt-2 text-xs uppercase tracking-[0.12em] text-slate">
            {state.toUpperCase()} &middot; {o.access_status}
          </p>
        </div>

        <Suspense fallback={<div className="stamp h-28 w-40 rounded-full" />}>
          <VerificationStamp
            count={o.verified_checkins}
            lastVerified={o.last_verified_at}
            lat={o.lat}
            lng={o.lng}
            size="large"
          />
        </Suspense>
      </div>

      <div className="mt-10">
        <AnswerBox question={`Can you camp at ${o.name}`}>
          <p>{o.summary}</p>
        </AnswerBox>
      </div>

      <div className="mt-10 space-y-4 text-[0.95rem] leading-relaxed text-slate">
        {o.body.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <CtaBar context={`objective-${o.slug}`} />
    </div>
  );
}
