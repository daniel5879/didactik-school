"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/Button";
import type { CtaContent } from "@/types";

interface CTASectionProps extends CtaContent {
  /** Slot opcional para acciones extra (ej. WhatsAppButton) junto al CTA principal. */
  extraAction?: ReactNode;
}

/**
 * CTA reutilizable con el mismo estilo visual (fondo primary-700, blobs
 * decorativos) usado en el homepage. Consumido por todas las páginas
 * internas para no repetir el mismo bloque de marcado.
 */
export function CTASection({ title, subtitle, primaryCta, extraAction }: CTASectionProps) {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl bg-primary-700 px-8 py-16 text-center sm:px-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-secondary-400/20 blur-3xl"
          />
          <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-primary-100">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PrimaryButton
              href={primaryCta.href}
              size="lg"
              className="bg-white text-primary-700 hover:bg-accent-50"
            >
              {primaryCta.label}
            </PrimaryButton>
            {extraAction}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
