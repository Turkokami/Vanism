import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { codexGraph } from "@/lib/schema";
import { DOCTRINE_URL, FOUNDER_NAME } from "@/lib/site";
import { getEntry, getEntrySlugs } from "@/content/codex";

/**
 * PHASE 4.2 -- authored, reviewed, bylined. Codex lives in git with the
 * founder as commit author, and every entry carries the same Person @id so one
 * named human accumulates authority across two domains.
 */
export async function generateStaticParams() {
  return getEntrySlugs().map((entry) => ({ entry }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ entry: string }>;
}): Promise<Metadata> {
  const { entry } = await params;
  const e = getEntry(entry);
  if (!e) return {};
  return {
    title: e.title,
    description: e.summary,
    alternates: { canonical: `/codex/${entry}` },
  };
}

export default async function CodexEntry({ params }: { params: Promise<{ entry: string }> }) {
  const { entry } = await params;
  const e = getEntry(entry);
  if (!e) notFound();

  return (
    <article className="mx-auto max-w-2xl px-5 py-14">
      <JsonLd data={codexGraph(e)} />

      <Breadcrumbs
        trail={[
          { name: "Codex", href: "/codex" },
          { name: e.title, href: `/codex/${entry}` },
        ]}
      />

      <p className="eyebrow mt-6">{e.law ? `Law ${e.law}` : "Codex"}</p>
      <h1 className="display mt-3 text-[clamp(2rem,5.5vw,3rem)] text-bone">{e.title}</h1>

      <p className="data mt-4 text-xs text-slate">
        {FOUNDER_NAME ?? "AUTHOR PENDING -- registry #1"} &middot;{" "}
        <time dateTime={e.published}>{e.published}</time>
      </p>

      <div className="mt-10 space-y-5 text-[1.0625rem] leading-relaxed text-bone/90">
        {e.body.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <p className="mt-14 border-t border-ink-raised pt-6 text-sm text-slate">
        This entry follows{" "}
        <a href={DOCTRINE_URL} className="text-bone underline decoration-brass underline-offset-4">
          Via Draconis
        </a>
        , the doctrine published by LOKES ONE.
      </p>
    </article>
  );
}
