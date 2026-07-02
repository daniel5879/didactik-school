/**
 * types/index.ts
 * Tipos compartidos entre /content y /components.
 */

import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface TrustStat {
  value: string;
  label: string;
}

export interface AudienceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

/** SEO por página — consumido por lib/seo.ts -> buildPageMetadata() */
export interface PageSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface CtaContent {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export interface AudiencePageContent {
  seo: PageSeo;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
  features: FeatureItem[];
  cta: CtaContent;
}

/**
 * Tipos preparados para la Fase 3 (ecommerce). No se usan todavía —
 * existen únicamente para que /productos, /productos/[categoria] y
 * /productos/[slug] tengan tipado listo cuando se implementen.
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  inStock: boolean;
}
