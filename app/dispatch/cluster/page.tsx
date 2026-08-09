import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CLUSTERS, postsByCluster } from "@/content/dispatch";

export const metadata: Metadata = {
  title: "Dispatch clusters",
  description: "The six topic clusters in Dispatch, from public land rules to route cost.",
  alternates: { canonical: "/dispatch/cluster" },
};

/** Closes the bare /dispatch/cluster path, which otherwise 404s. */
export default function ClusterIndex() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <Breadcrumbs
        trail={[
          { name: "Dispatch", href: "/dispatch" },
          { name: "Clusters", href: "/dispatch/cluster" },
        ]}
      />

      <h1 className="display mt-6 text-4xl text-bone">Clusters</h1>

      <ul className="mt-10 divide-y divide-ink-raised border-y border-ink-raised">
        {CLUSTERS.map((c) => (
          <li key={c.id} className="flex flex-wrap items-baseline gap-4 py-5">
            <div>
              <Link
                href={`/dispatch/cluster/${c.id}`}
                className="display text-xl text-bone hover:text-brass"
              >
                {c.name}
              </Link>
              <p className="mt-1 text-sm text-slate">{c.blurb}</p>
            </div>
            <span className="data ml-auto text-xs text-slate">
              {postsByCluster(c.id).length}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
