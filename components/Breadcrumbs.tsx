import Link from "next/link";

export function Breadcrumbs({ trail }: { trail: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="data text-[0.6875rem] uppercase tracking-[0.12em]">
      <ol className="flex flex-wrap items-center gap-2 text-slate">
        {trail.map((t, i) => (
          <li key={t.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="text-ink-raised">/</span>}
            {i === trail.length - 1 ? (
              <span className="text-bone" aria-current="page">{t.name}</span>
            ) : (
              <Link href={t.href} className="hover:text-bone">{t.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
