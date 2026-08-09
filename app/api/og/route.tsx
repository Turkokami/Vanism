import { ImageResponse } from "next/og";

export const runtime = "edge";

/**
 * PHASE 0.7 -- OG assets served from this domain, never an external host.
 * PHASE 5.4 groundwork -- the rank card variant deep-links to the public
 * Ground page where the standing was earned, not to an app-store interstitial.
 *
 * /api/og?title=...&stat=...&label=...
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") ?? "Vanism").slice(0, 90);
  const stat = searchParams.get("stat");
  const label = searchParams.get("label") ?? "Rider verified";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1C1F22",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#B08D3F",
          }}
        >
          Vanism
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.02,
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#E9E7E2",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", gap: 24 }}>
          {stat && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 18, color: "#B08D3F", letterSpacing: "0.14em" }}>
                {label.toUpperCase()}
              </div>
              <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#D4AC55" }}>
                {stat}
              </div>
            </div>
          )}
          <div style={{ display: "flex", marginLeft: "auto", fontSize: 20, color: "#8C9794" }}>
            Earned, never given
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
