import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { DoctrineFooter } from "@/components/DoctrineFooter";
import { rootGraph } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vanism - verified ground for van life and overlanding",
    template: "%s | Vanism",
  },
  description:
    "Free camping, dispersed sites and multi-week routes, each one confirmed by riders who stood there. GPS-verified check-ins, earned rank, no paid placement.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Vanism",
    url: SITE_URL,
    images: ["/og/default.png"],
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const graph = await rootGraph();

  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={graph} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brass focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <div className="viewport-hud" aria-hidden="true" />
        <Header />
        <main id="main" className="boot">{children}</main>
        <DoctrineFooter />
      </body>
    </html>
  );
}
