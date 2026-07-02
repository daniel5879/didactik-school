"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AudienceHero } from "@/components/shared/AudienceHero";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { CTASection } from "@/components/shared/CTASection";
import { guarderiasContent } from "@/content/audiences";

export function GuarderiasPageBody() {
  return (
    <>
      <AudienceHero {...guarderiasContent.hero} />

      <section className="pb-24 lg:pb-32">
        <Container>
          <SectionTitle
            title="El aliado ideal para la operación diaria"
            subtitle="Reposición rápida y atención directa, sin fricciones."
          />
          <div className="mt-14">
            <FeatureGrid items={guarderiasContent.features} columns={2} />
          </div>
        </Container>
      </section>

      <CTASection {...guarderiasContent.cta} />
    </>
  );
}
