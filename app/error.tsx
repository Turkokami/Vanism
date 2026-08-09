"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-2xl px-5 py-32">
      <p className="eyebrow">Error</p>
      <h1 className="display mt-4 text-4xl text-bone">Something did not load</h1>
      <p className="mt-4 text-slate">
        The page failed on our side, not yours. Try again, and if it keeps
        happening write to support.
      </p>
      <button
        type="button"
        onClick={reset}
        className="display mt-8 border border-brass px-6 py-3 text-sm text-brass hover:bg-brass hover:text-ink"
      >
        Try again
      </button>
    </div>
  );
}
