"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AudienceHero } from "@/components/shared/AudienceHero";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { CTASection } from "@/components/shared/CTASection";
import { papasContent } from "@/content/audiences";

export function PapasPageBody() {
  return (
    <>
      <AudienceHero {...papasContent.hero} />

      <section className="pb-24 lg:pb-32">
        <Container>
          <SectionTitle
            title="Todo lo que necesitas para apoyar en casa"
            subtitle="Material seleccionado para acompañar cada etapa del desarrollo."
          />
          <div className="mt-14">
            <FeatureGrid items={papasContent.features} columns={3} />
          </div>
        </Container>
      </section>

      <CTASection {...papasContent.cta} />
    </>
  );
}
