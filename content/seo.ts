/**
 * seo.ts
 * -----------------------------------------------------------------------
 * Configuración centralizada de SEO. Consumida por app/layout.tsx para
 * generar metadata, OpenGraph, Twitter Cards y robots.
 * -----------------------------------------------------------------------
 */

import { company } from "./company";

const siteUrl = "https://www.didactikschool.com";

export const seo = {
  title: "Didactik School | Material Didáctico y Educativo en México",
  titleTemplate: "%s | Didactik School",
  description: company.description,
  keywords: [
    "material didáctico",
    "libros educativos",
    "material escolar",
    "recursos de aprendizaje infantil",
    "didactik school",
    "material para escuelas",
    "material para guarderías",
    "México",
  ],
  siteUrl,
  canonical: siteUrl,
  locale: "es_MX",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: company.name,
    title: "Didactik School | Lo mejor para tu educación",
    description: company.description,
    url: siteUrl,
    image: `${siteUrl}/images/og/og-cover.jpg`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Didactik School | Lo mejor para tu educación",
    description: company.description,
    image: `${siteUrl}/images/og/og-cover.jpg`,
  },
} as const;

export type Seo = typeof seo;
