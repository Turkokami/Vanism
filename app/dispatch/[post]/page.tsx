import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/AnswerBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBar } from "@/components/CtaBar";
import { Prose } from "@/components/Prose";
import { TableOfContents } from "@/components/TableOfContents";
import { JsonLd } from "@/components/JsonLd";
import { graph, faqNode, breadcrumb, articleNode } from "@/lib/schema";
import { SITE_URL, FOUNDER_NAME } from "@/lib/site";
import { POSTS, getPost, getCluster, postsByCluster } from "@/content/dispatch";
import { readingMinutes } from "@/content/blocks";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ post: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ post: string }>;
}): Promise<Metadata> {
  const { post } = await params;
  const p = getPost(post);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/dispatch/${post}` },
  };
}

export default async function DispatchPost({ params }: { params: Promise<{ post: string }> }) {
  const { post } = await params;
  const p = getPost(post);
  if (!p) notFound();

  const cluster = getCluster(p.cluster);
  const url = `${SITE_URL}/dispatch/${post}`;
  const siblings = postsByCluster(p.cluster).filter((s) => s.slug !== post);

  return (
    <article className="mx-auto max-w-3xl px-5 py-14">
      <JsonLd
        data={graph(
          articleNode({
            url,
            headline: p.title,
            description: p.description,
            published: p.published,
          }),
          faqNode(p.faq, url),
          breadcrumb([
            ["Dispatch", `${SITE_URL}/dispatch`],
            [cluster?.name ?? "Dispatch", `${SITE_URL}/dispatch/cluster/${p.cluster}`],
            [p.title, url],
          ])
        )}
      />

      <Breadcrumbs
        trail={[
          { name: "Dispatch", href: "/dispatch" },
          { name: cluster?.name ?? "", href: `/dispatch/cluster/${p.cluster}` },
          { name: p.title, href: `/dispatch/${post}` },
        ]}
      />

      <h1 className="display mt-6 text-[clamp(2rem,5.5vw,3.25rem)] text-bone">{p.title}</h1>
      <p className="data mt-3 text-xs text-slate">
        {FOUNDER_NAME ?? "AUTHOR PENDING -- registry #1"} &middot;{" "}
        <time dateTime={p.published}>{p.published}</time>
        {p.blocks && <> &middot; {readingMinutes(p.blocks)} min read</>}
      </p>

      <div className="mt-9">
        <AnswerBox question={p.title}>
          <p>{p.answer}</p>
        </AnswerBox>
      </div>

      {p.blocks ? (
        <>
          <TableOfContents blocks={p.blocks} />
          <Prose blocks={p.blocks} />
        </>
      ) : (
        <div className="mt-10 space-y-5 text-[1rem] leading-relaxed text-bone/90">
          {(p.body ?? []).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}

      <FaqBlock items={p.faq} />

      {siblings.length > 0 && (
        <section className="mt-16">
          <h2 className="eyebrow">More in {cluster?.name}</h2>
          <ul className="mt-4 space-y-2">
            {siblings.map((s) => (
              <li key={s.slug}>
                <Link href={`/dispatch/${s.slug}`} className="text-sm text-slate hover:text-bone">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <CtaBar context={`dispatch-${post}`} />
    </article>
  );
}
