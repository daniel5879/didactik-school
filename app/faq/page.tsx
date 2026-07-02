import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { faqItems, faqPageContent } from "@/content/faq";

export const metadata: Metadata = buildPageMetadata(faqPageContent.seo);

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <PageHero
        eyebrow={faqPageContent.hero.eyebrow}
        title={faqPageContent.hero.title}
        subtitle={faqPageContent.hero.subtitle}
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <FAQAccordion items={faqItems} />
        </Container>
      </section>

      <CTASection {...faqPageContent.cta} />
    </>
  );
}
