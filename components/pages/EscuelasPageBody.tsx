"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AudienceHero } from "@/components/shared/AudienceHero";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { ProcessTimeline } from "@/components/shared/ProcessTimeline";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { escuelasContent } from "@/content/audiences";

/**
 * Ensambla todo el contenido de /escuelas. Es un Client Component que
 * importa su propio contenido (en vez de recibirlo como prop desde el
 * Server Component de la página), porque el contenido incluye referencias
 * a íconos de lucide-react — funciones que no pueden cruzar el límite
 * server -> client como props.
 */
export function EscuelasPageBody() {
  return (
    <>
      <AudienceHero {...escuelasContent.hero} />

      <section className="pb-24 lg:pb-32">
        <Container>
          <SectionTitle
            title="Beneficios para tu institución"
            subtitle="Condiciones pensadas para proyectos escolares, no para compras individuales."
          />
          <div className="mt-14">
            <FeatureGrid items={escuelasContent.benefits} columns={2} />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24 lg:py-32">
        <Container>
          <SectionTitle title="Cómo trabajamos" subtitle="Un proceso claro, de principio a fin." />
          <div className="mt-14">
            <ProcessTimeline steps={escuelasContent.process} />
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <SectionTitle
            title="Tipos de proyectos"
            subtitle="Nos adaptamos a distintos formatos de trabajo institucional."
          />
          <div className="mt-14">
            <FeatureGrid items={escuelasContent.projectTypes} columns={3} />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24 lg:py-32">
        <Container>
          <SectionTitle
            title="Preguntas frecuentes"
            subtitle="Dudas comunes de escuelas y comités antes de empezar."
          />
          <div className="mt-14">
            <FAQAccordion items={escuelasContent.faq} />
          </div>
        </Container>
      </section>

      <CTASection {...escuelasContent.cta} />
    </>
  );
}
