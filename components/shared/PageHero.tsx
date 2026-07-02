"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

/**
 * Hero compacto para páginas internas (no-home). Mantiene el mismo
 * lenguaje visual que el Hero del homepage (badge, tipografía, spacing)
 * pero sin ilustración lateral, pensado para páginas de contenido.
 */
export function PageHero({ eyebrow, title, subtitle, align = "center" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 lg:pb-20 lg:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-secondary-100/50 blur-3xl"
      />
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
        >
          {eyebrow && (
            <motion.div variants={fadeUp}>
              <Badge variant="secondary">{eyebrow}</Badge>
            </motion.div>
          )}
          <motion.h1
            variants={fadeUp}
            className="mt-5 text-balance text-4xl font-bold leading-tight sm:text-5xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={fadeUp}
              className="mt-5 text-balance text-lg leading-relaxed text-neutral-500"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
