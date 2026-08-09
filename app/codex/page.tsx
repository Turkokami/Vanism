import type { Metadata } from "next";
import Link from "next/link";
import { CODEX } from "@/content/codex";
import { DOCTRINE_URL } from "@/lib/site";
import { LAWS } from "@/lib/doctrine";

export const metadata: Metadata = {
  title: "The Codex - Via Draconis and the rules of the road",
  description:
    "The doctrine behind Vanism: why rank is earned, why the road is a discipline rather than an exit, and how the four laws are enforced in the product.",
  alternates: { canonical: "/codex" },
};

export default function CodexIndex() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20">
      <p className="eyebrow">The Codex</p>
      <h1 className="display mt-4 text-5xl text-bone">Via Draconis</h1>
      <p className="mt-5 max-w-xl text-slate">
        Four laws, published by LOKES ONE and carried into the product as rules
        rather than copy. Each one is enforced somewhere a machine can check it.
      </p>

      <ol className="mt-12 grid gap-px border border-ink-raised bg-ink-raised sm:grid-cols-2">
        {LAWS.map((l) => (
          <li key={l.n} className="bg-ink px-6 py-7">
            <p className="eyebrow">Law {l.n}</p>
            <h2 className="display mt-2 text-xl text-bone">{l.title}</h2>
            <p className="mt-3 text-sm text-slate">{l.rule}</p>
            <p className="data mt-4 text-[0.625rem] text-slate/70">{l.enforcedAt}</p>
          </li>
        ))}
      </ol>

      <h2 className="display mt-20 text-2xl text-bone">Entries</h2>
      <ul className="mt-6 divide-y divide-ink-raised border-y border-ink-raised">
        {CODEX.map((e) => (
          <li key={e.slug} className="py-5">
            <Link href={`/codex/${e.slug}`} className="display text-xl text-bone hover:text-brass">
              {e.title}
            </Link>
            <p className="mt-2 text-sm text-slate">{e.summary}</p>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-sm text-slate">
        The canonical doctrine is published at{" "}
        <a href={DOCTRINE_URL} className="text-bone underline decoration-brass underline-offset-4">
          lokes.one
        </a>
        .
      </p>
    </div>
  );
}
