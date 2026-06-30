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
