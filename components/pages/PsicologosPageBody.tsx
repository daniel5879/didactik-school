"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AudienceHero } from "@/components/shared/AudienceHero";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { CTASection } from "@/components/shared/CTASection";
import { psicologosContent } from "@/content/audiences";

export function PsicologosPageBody() {
  return (
    <>
      <AudienceHero {...psicologosContent.hero} />

      <section className="pb-24 lg:pb-32">
        <Container>
          <SectionTitle
            title="Material especializado para tu práctica clínica"
            subtitle="Recursos validados para acompañar procesos de desarrollo infantil."
          />
          <div className="mt-14">
            <FeatureGrid items={psicologosContent.features} columns={3} />
          </div>
        </Container>
      </section>

      <CTASection {...psicologosContent.cta} />
    </>
  );
}
