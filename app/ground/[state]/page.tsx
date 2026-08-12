import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/AnswerBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Prose } from "@/components/Prose";
import { TableOfContents } from "@/components/TableOfContents";
import { FaqBlock } from "@/components/FaqBlock";
import { VerificationStamp } from "@/components/VerificationStamp";
import { CtaBar } from "@/components/CtaBar";
import { JsonLd } from "@/components/JsonLd";
import { graph, faqNode, breadcrumb } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { getStates, getObjectivesByState } from "@/lib/queries";
import { isPublishable } from "@/lib/publishable";
import { getState, STATE_CODES } from "@/content/states";

export const revalidate = 1800;

/**
 * State hubs are real pages, not redirects. The static state overview
 * prerenders regardless of database state; verified objectives render beneath
 * it once they exist.
 */
export async function generateStaticParams() {
  const dbStates = await getStates();
  const codes = Array.from(new Set([...STATE_CODES, ...dbStates]));
  return codes.map((state) => ({ state }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const content = getState(state);
  const label = content?.name ?? state.toUpperCase();
  // Category terms belong here. Doctrine governs body copy, not targeting.
  return {
    title: `${label} dispersed camping and overland sites`,
    description: `Dispersed camping, boondocking and overland travel in ${label}: public-land rules, seasons, and the rider-verified objectives that have earned a place in the index.`,
    alternates: { canonical: `/ground/${state}` },
  };
}

export default async function StateHub({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const content = getState(state);
  const rows = await getObjectivesByState(state);
  const published = rows.filter(isPublishable);

  if (!content && !published.length) notFound();

  const label = content?.name ?? state.toUpperCase();
  const url = `${SITE_URL}/ground/${state}`;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      {content && (
        <JsonLd
          data={graph(
            faqNode(content.faq, url),
            breadcrumb([
              ["Ground", `${SITE_URL}/ground`],
              [label, url],
            ])
          )}
        />
      )}

      <Breadcrumbs
        trail={[
          { name: "Ground", href: "/ground" },
          { name: label, href: `/ground/${state}` },
        ]}
      />

      <p className="eyebrow mt-6">The Ground</p>
      <h1 className="display mt-3 text-5xl text-bone">{label}</h1>
      <p className="data mt-2 text-xs text-slate">
        {published.length} published &middot;{" "}
        {Math.max(0, rows.length - published.length)} awaiting verification
      </p>

      {content && (
        <>
          <div className="mt-9 max-w-3xl">
            <AnswerBox question={`Dispersed camping in ${label}`}>
              <p>{content.answer}</p>
            </AnswerBox>
          </div>
          <div className="max-w-3xl">
            <TableOfContents blocks={content.blocks} />
            <Prose blocks={content.blocks} />
          </div>
        </>
      )}

      <section className="mt-16">
        <h2 className="eyebrow">Verified objectives</h2>
        {published.length ? (
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {published.map((o) => (
              <li key={o.slug} className="border border-ink-raised p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="display text-xl text-bone">
                      <Link href={`/ground/${state}/${o.slug}`} className="hover:text-brass">
                        {o.name}
                      </Link>
                    </h3>
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
        ) : (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate">
            No objectives in {label} have earned the index yet. A site publishes
            here only after three independent riders confirm it on the ground, its
            coordinates are recorded, and its access status is known. Until then the
            overview above is the intel; the confirmed ground follows.
          </p>
        )}
      </section>

      {content && <FaqBlock items={content.faq} />}

      <CtaBar context={`ground-${state}`} />
    </div>
  );
}
