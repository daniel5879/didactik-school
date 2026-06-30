import type { Metadata } from "next";
import { fontHeading, fontBody } from "@/lib/fonts";
import { seo } from "@/content/seo";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.title,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: {
    canonical: seo.canonical,
  },
  robots: {
    index: seo.robots.index,
    follow: seo.robots.follow,
  },
  openGraph: {
    type: "website",
    siteName: seo.openGraph.siteName,
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    url: seo.openGraph.url,
    locale: seo.locale,
    images: [{ url: seo.openGraph.image }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.twitter.title,
    description: seo.twitter.description,
    images: [seo.twitter.image],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body>{children}</body>
    </html>
  );
}
