import type { Metadata } from "next";
import Link from "next/link";
import { CtaBar } from "@/components/CtaBar";
import { CLUSTERS, POSTS, postsByCluster } from "@/content/dispatch";

export const metadata: Metadata = {
  title: "Dispatch - practical writing on van life and overlanding",
  description:
    "Stay limits, dispersed camping legality, route cost, water planning and the systems a long season depends on.",
  alternates: { canonical: "/dispatch" },
};

export default function DispatchIndex() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <p className="eyebrow">Dispatch</p>
      <h1 className="display mt-4 text-5xl text-bone">The practical half</h1>
      <p className="mt-5 max-w-xl text-slate">
        The Codex is doctrine. This is the other thing: rules, arithmetic, water,
        roads. Six clusters, {POSTS.length} entries and counting.
      </p>

      <div className="mt-14 space-y-14">
        {CLUSTERS.map((c) => {
          const posts = postsByCluster(c.id);
          if (!posts.length) return null;
          return (
            <section key={c.id}>
              <h2 className="display text-2xl text-bone">
                <Link href={`/dispatch/cluster/${c.id}`} className="hover:text-brass">
                  {c.name}
                </Link>
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate">{c.blurb}</p>

              <ul className="mt-5 divide-y divide-ink-raised border-y border-ink-raised">
                {posts.map((p) => (
                  <li key={p.slug} className="py-4">
                    <Link href={`/dispatch/${p.slug}`} className="text-bone hover:text-brass">
                      {p.title}
                    </Link>
                    <p className="mt-1 text-sm text-slate">{p.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <CtaBar context="dispatch-index" />
    </div>
  );
}
