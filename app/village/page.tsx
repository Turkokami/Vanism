import type { Metadata } from "next";
import Link from "next/link";
import { getPublicRiderSlugs } from "@/lib/queries";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "The Village",
  description:
    "Riders who chose to make their record public. Profiles are off by default and nothing here is shown without consent.",
  alternates: { canonical: "/village" },
};

/** LAW IV -- this index draws only from the public view. */
export default async function VillageIndex() {
  const riders = await getPublicRiderSlugs();

  return (
    <div className="mx-auto max-w-4xl px-5 py-20">
      <p className="eyebrow">The Village</p>
      <h1 className="display mt-4 text-5xl text-bone">Riders on the record</h1>
      <p className="mt-5 max-w-xl text-slate">
        Every profile here is public because the rider turned it on. Profiles
        are off by default and stay that way unless you change them.
      </p>

      {riders.length === 0 ? (
        <p className="mt-12 border border-ink-raised px-6 py-8 text-slate">
          No public profiles yet. Turn yours on from the app when you want your
          record to be visible.
        </p>
      ) : (
        <ul className="mt-12 grid gap-px border border-ink-raised bg-ink-raised sm:grid-cols-3">
          {riders.map((t) => (
            <li key={t}>
              <Link href={`/village/${t}`} className="block bg-ink px-5 py-5 hover:bg-ink-deep">
                <span className="display text-lg text-bone">{t}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
