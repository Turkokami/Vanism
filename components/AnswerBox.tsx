/**
 * AEO layer. Answer first, in the page's own voice, above the fold, in a block
 * an answer engine can lift whole.
 */
export function AnswerBox({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <section className="hud border-l-2 border-brass bg-ink-deep px-6 py-5" aria-label={question}>
      <h2 className="eyebrow">{question}</h2>
      <div className="mt-2 text-[0.95rem] leading-relaxed text-bone">{children}</div>
    </section>
  );
}
