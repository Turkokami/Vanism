import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/AnswerBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBar } from "@/components/CtaBar";
import { JsonLd } from "@/components/JsonLd";
import { graph, faqNode, breadcrumb } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { CLAUSES, FEATURES, getFeature } from "@/content/features";

export async function generateStaticParams() {
  return FEATURES.map((f) => ({ capability: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ capability: string }>;
}): Promise<Metadata> {
  const { capability } = await params;
  const f = getFeature(capability);
  if (!f) return {};
  return {
    title: f.title,
    description: f.description,
    alternates: { canonical: `/features/${capability}` },
  };
}

export default async function Capability({
  params,
}: {
  params: Promise<{ capability: string }>;
}) {
  const { capability } = await params;
  const f = getFeature(capability);
  if (!f) notFound();

  const url = `${SITE_URL}/features/${capability}`;
  const siblings = FEATURES.filter((s) => s.clause === f.clause && s.slug !== f.slug);

  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <JsonLd
        data={graph(
          faqNode(f.faq, url),
          breadcrumb([
            ["Features", `${SITE_URL}/features`],
            [f.name, url],
          ])
        )}
      />

      <Breadcrumbs
        trail={[
          { name: "Features", href: "/features" },
          { name: f.name, href: `/features/${capability}` },
        ]}
      />

      <p className="eyebrow mt-6">{CLAUSES[f.clause].name}</p>
      <h1 className="display mt-3 text-[clamp(2.25rem,6vw,3.5rem)] text-bone">{f.name}</h1>

      <div className="mt-9">
        <AnswerBox question={f.title}>
          <p>{f.answer}</p>
        </AnswerBox>
      </div>

      <div className="mt-10 space-y-5 text-[0.95rem] leading-relaxed text-slate">
        {f.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <FaqBlock items={f.faq} />

      <section className="mt-16">
        <h2 className="eyebrow">Also in {CLAUSES[f.clause].name.toLowerCase()}</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {[...siblings.map((s) => ({ label: s.name, href: `/features/${s.slug}` })), ...f.related].map(
            (r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="data inline-block border border-ink-raised px-4 py-2 text-xs text-slate hover:border-brass hover:text-bone"
                >
                  {r.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </section>

      <CtaBar context={`feature-${capability}`} />
    </div>
  );
}
