import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBar } from "@/components/CtaBar";
import { CLUSTERS, getCluster, postsByCluster, type ClusterId } from "@/content/dispatch";

export async function generateStaticParams() {
  return CLUSTERS.map((c) => ({ cluster: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cluster: string }>;
}): Promise<Metadata> {
  const { cluster } = await params;
  const c = getCluster(cluster);
  if (!c) return {};
  return {
    title: c.name,
    description: c.blurb,
    alternates: { canonical: `/dispatch/cluster/${cluster}` },
  };
}

export default async function ClusterPage({
  params,
}: {
  params: Promise<{ cluster: string }>;
}) {
  const { cluster } = await params;
  const c = getCluster(cluster);
  if (!c) notFound();
  const posts = postsByCluster(cluster as ClusterId);

  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <Breadcrumbs
        trail={[
          { name: "Dispatch", href: "/dispatch" },
          { name: c.name, href: `/dispatch/cluster/${cluster}` },
        ]}
      />

      <h1 className="display mt-6 text-[clamp(2rem,5.5vw,3.25rem)] text-bone">{c.name}</h1>
      <p className="mt-4 max-w-xl text-slate">{c.blurb}</p>

      <ul className="mt-12 divide-y divide-ink-raised border-y border-ink-raised">
        {posts.map((p) => (
          <li key={p.slug} className="py-5">
            <h2 className="display text-xl text-bone">
              <Link href={`/dispatch/${p.slug}`} className="hover:text-brass">
                {p.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm text-slate">{p.description}</p>
          </li>
        ))}
      </ul>

      <CtaBar context={`dispatch-${cluster}`} />
    </div>
  );
}
