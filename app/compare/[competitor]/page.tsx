import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/AnswerBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBar } from "@/components/CtaBar";
import { JsonLd } from "@/components/JsonLd";
import { graph, faqNode, breadcrumb } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import { COMPETITORS, canPublishComparisons } from "@/content/competitors";

/** Registry #2 -- nothing prerenders while the rename is outstanding. */
export async function generateStaticParams() {
  if (!canPublishComparisons()) return [];
  return COMPETITORS.map((c) => ({ competitor: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ competitor: string }>;
}): Promise<Metadata> {
  const { competitor } = await params;
  const c = COMPETITORS.find((x) => x.slug === competitor);
  if (!c || !canPublishComparisons()) return { robots: { index: false, follow: false } };
  return {
    title: `Vanism vs ${c.name}`,
    description: `How Vanism and ${c.name} differ on verification, freshness, progression and privacy. Figures retrieved ${c.retrievedOn}.`,
    alternates: { canonical: `/compare/${competitor}` },
  };
}

export default async function Compare({
  params,
}: {
  params: Promise<{ competitor: string }>;
}) {
  if (!canPublishComparisons()) notFound();

  const { competitor } = await params;
  const c = COMPETITORS.find((x) => x.slug === competitor);
  if (!c) notFound();

  const url = `${SITE_URL}/compare/${competitor}`;
  const faq = [
    {
      q: `Is Vanism a replacement for ${c.name}`,
      a: `${c.strength} If that is what you need, it is a reasonable tool. Vanism answers a different question: who confirmed this site was like this, and when.`,
    },
    {
      q: `What does ${c.name} cost`,
      a:
        c.priceYearly != null
          ? `About $${c.priceYearly} a year as of ${c.retrievedOn}. Check their site for current pricing.`
          : `It is free to use as of ${c.retrievedOn}.`,
    },
    {
      q: "Can I use both",
      a: "Plenty of riders do. They cover different ground, and nothing here depends on you leaving anything behind you already rely on.",
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <JsonLd
        data={graph(
          faqNode(faq, url),
          breadcrumb([
            ["Compare", `${SITE_URL}/compare`],
            [`Vanism vs ${c.name}`, url],
          ])
        )}
      />

      <Breadcrumbs
        trail={[
          { name: "Compare", href: "/compare" },
          { name: c.name, href: `/compare/${competitor}` },
        ]}
      />

      <h1 className="display mt-6 text-[clamp(2rem,5.5vw,3.25rem)] text-bone">
        Vanism vs {c.name}
      </h1>
      <p className="data mt-2 text-xs text-slate">
        Figures retrieved {c.retrievedOn}
      </p>

      <div className="mt-9">
        <AnswerBox question={`Should I use Vanism or ${c.name}`}>
          <p>
            {c.name} is {c.positioning.toLowerCase().replace(/\.$/, "")}, and{" "}
            {c.strength.charAt(0).toLowerCase() + c.strength.slice(1).replace(/\.$/, "")}.
            The structural difference is that {c.gap.charAt(0).toLowerCase() + c.gap.slice(1)}{" "}
            Vanism records whether the contributor was physically present and
            withholds anything not confirmed within eighteen months.
          </p>
        </AnswerBox>
      </div>

      <ComparisonTable them={c} />

      <FaqBlock items={faq} />
      <CtaBar context={`compare-${competitor}`} />
    </div>
  );
}
