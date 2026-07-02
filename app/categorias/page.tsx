import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CategoryGrid } from "@/components/shared/CategoryGrid";
import { EmptyState } from "@/components/shared/EmptyState";
import { CTASection } from "@/components/shared/CTASection";
import { allCategories, categoriasPageContent } from "@/content/categories";
import { ctaSection } from "@/content/home";

export const metadata: Metadata = buildPageMetadata(categoriasPageContent.seo);

export default function CategoriasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Categorías" }]} />
      <PageHero
        eyebrow={categoriasPageContent.hero.eyebrow}
        title={categoriasPageContent.hero.title}
        subtitle={categoriasPageContent.hero.subtitle}
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <CategoryGrid items={allCategories} />

          <div className="mt-16">
            <EmptyState
              title={categoriasPageContent.emptyState.title}
              description={categoriasPageContent.emptyState.description}
              cta={categoriasPageContent.emptyState.cta}
            />
          </div>
        </Container>
      </section>

      <CTASection {...ctaSection} />
    </>
  );
}
