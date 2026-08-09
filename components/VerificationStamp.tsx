import { GATE } from "@/lib/publishable";

/**
 * THE SIGNATURE ELEMENT.
 *
 * Every competitor sells a database of places. Only Vanism can say how many
 * riders stood there, and when. This is that claim rendered as a survey
 * benchmark disc -- struck, not printed, and never shown for a number we
 * cannot source (Prohibition 2).
 *
 * Below the gate threshold it renders the honest state rather than a zero.
 */
export function VerificationStamp({
  count,
  lastVerified,
  lat,
  lng,
  size = "default",
}: {
  count: number;
  lastVerified: string | null;
  lat?: number | null;
  lng?: number | null;
  size?: "default" | "large";
}) {
  const verified = count >= GATE.minCheckins && Boolean(lastVerified);

  return (
    <figure
      className={`stamp inline-flex flex-col gap-1 rounded-full px-6 ${
        size === "large" ? "py-6" : "py-4"
      } text-center`}
      aria-label={
        verified
          ? `${count} rider-verified check-ins, last confirmed ${lastVerified}`
          : "Not yet rider-verified"
      }
    >
      <span className="eyebrow">
        {verified ? "Rider verified" : "Unverified"}
      </span>

      {verified ? (
        <>
          <span
            className={`data font-bold text-brass-lit ${
              size === "large" ? "text-5xl" : "text-3xl"
            }`}
          >
            {count.toLocaleString()}
          </span>
          <span className="data text-[0.6875rem] text-slate">
            check-ins &middot; last {lastVerified}
          </span>
        </>
      ) : (
        <span className="data text-sm text-slate">
          Awaiting {GATE.minCheckins} check-ins
        </span>
      )}

      {lat != null && lng != null && (
        <span className="data text-[0.625rem] text-slate">
          {lat.toFixed(4)}, {lng.toFixed(4)}
        </span>
      )}
    </figure>
  );
}
