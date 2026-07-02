"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PrimaryButton, OutlineButton } from "@/components/ui/Button";

interface AudienceHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

/**
 * Hero con imagen lateral para páginas de audiencia (/papas, /escuelas,
 * /psicologos, /guarderias). Reutiliza el mismo patrón visual del Hero
 * del homepage (badge + título + CTAs + imagen animada) sin duplicar código.
 */
export function AudienceHero({
  eyebrow,
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
}: AudienceHeroProps) {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 lg:pb-28 lg:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-secondary-100/50 blur-3xl"
      />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <Badge variant="secondary">{eyebrow}</Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-5 text-balance text-4xl font-bold leading-tight sm:text-5xl"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-neutral-500"
            >
              {subtitle}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href={primaryCta.href} size="lg" showArrow>
                {primaryCta.label}
              </PrimaryButton>
              {secondaryCta && (
                <OutlineButton href={secondaryCta.href} size="lg">
                  {secondaryCta.label}
                </OutlineButton>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl bg-neutral-100 lg:max-w-none"
          >
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
