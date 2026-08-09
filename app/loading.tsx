export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-32" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading</span>
      <div className="h-3 w-24 bg-ink-raised" />
      <div className="mt-6 h-12 w-2/3 bg-ink-raised" />
      <div className="mt-4 h-12 w-1/2 bg-ink-raised" />
    </div>
  );
}
