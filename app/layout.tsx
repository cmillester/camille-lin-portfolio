import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";

// Self-hosted, locally-bundled fonts (no Google Fonts network request at
// build time or runtime). Files + OFL licenses live in public/fonts/.
const outfit = localFont({
  src: [
    { path: "../public/fonts/outfit/outfit-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/outfit/outfit-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/outfit/outfit-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-outfit",
  display: "swap",
});

const instrument = localFont({
  src: [
    { path: "../public/fonts/instrument-sans/instrument-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/instrument-sans/instrument-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/instrument-sans/instrument-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/instrument-sans/instrument-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  sameAs: [site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrument.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
