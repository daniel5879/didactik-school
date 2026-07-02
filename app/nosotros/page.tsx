import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { NosotrosPageBody } from "@/components/pages/NosotrosPageBody";
import { nosotrosContent } from "@/content/pages";

export const metadata: Metadata = buildPageMetadata(nosotrosContent.seo);

export default function NosotrosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Nosotros" }]} />
      <PageHero
        eyebrow={nosotrosContent.hero.eyebrow}
        title={nosotrosContent.hero.title}
        subtitle={nosotrosContent.hero.subtitle}
      />
      <NosotrosPageBody />
    </>
  );
}
