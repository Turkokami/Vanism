export function FaqBlock({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="mt-16">
      <h2 className="display text-2xl text-bone">Questions</h2>
      <dl className="mt-6 divide-y divide-ink-raised border-y border-ink-raised">
        {items.map((i) => (
          <div key={i.q} className="py-5">
            <dt className="text-[0.95rem] font-semibold text-bone">{i.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-slate">{i.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
