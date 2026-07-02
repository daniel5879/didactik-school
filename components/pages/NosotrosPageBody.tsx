"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StatsGrid } from "@/components/shared/StatsGrid";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { CTASection } from "@/components/shared/CTASection";
import { nosotrosContent } from "@/content/pages";

export function NosotrosPageBody() {
  return (
    <>
      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                src={nosotrosContent.image}
                alt="Equipo Didactik School"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">
                  {nosotrosContent.mission.title}
                </h2>
                <p className="mt-3 leading-relaxed text-neutral-500">
                  {nosotrosContent.mission.description}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">
                  {nosotrosContent.experience.title}
                </h2>
                <p className="mt-3 leading-relaxed text-neutral-500">
                  {nosotrosContent.experience.description}
                </p>
                <div className="mt-6">
                  <StatsGrid stats={nosotrosContent.experience.stats} />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">
                  {nosotrosContent.philosophy.title}
                </h2>
                <p className="mt-3 leading-relaxed text-neutral-500">
                  {nosotrosContent.philosophy.description}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24 lg:py-32">
        <Container>
          <SectionTitle
            title={nosotrosContent.howWeHelp.title}
            subtitle="Acompañamiento concreto, en cada etapa del proyecto."
          />
          <div className="mt-14">
            <FeatureGrid items={nosotrosContent.howWeHelp.items} columns={2} />
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <SectionTitle
            title="Nuestros valores"
            subtitle="Lo que guía cada decisión, desde el catálogo hasta el servicio."
          />
          <div className="mt-14">
            <FeatureGrid items={nosotrosContent.values} columns={3} />
          </div>
        </Container>
      </section>

      <CTASection {...nosotrosContent.cta} />
    </>
  );
}
