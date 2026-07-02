/**
 * lib/seo.ts
 * -----------------------------------------------------------------------
 * Genera el objeto Metadata de Next.js para cualquier página a partir de
 * un PageSeo (content/*.ts) + los valores globales de content/seo.ts.
 * Evita repetir OpenGraph/Twitter/canonical en cada página.
 * -----------------------------------------------------------------------
 */

import type { Metadata } from "next";
import type { PageSeo } from "@/types";
import { seo as globalSeo } from "@/content/seo";

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  image,
}: PageSeo): Metadata {
  const url = `${globalSeo.siteUrl}${path}`;
  const ogImage = image ?? globalSeo.openGraph.image;

  return {
    title,
    description,
    keywords: keywords ?? [...globalSeo.keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: globalSeo.openGraph.siteName,
      title,
      description,
      url,
      locale: globalSeo.locale,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
