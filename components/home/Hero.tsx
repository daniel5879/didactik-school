"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PrimaryButton, OutlineButton } from "@/components/ui/Button";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[32rem] w-[32rem] rounded-full bg-secondary-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent-100/50 blur-3xl"
      />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="secondary">{hero.eyebrow}</Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-neutral-500"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href={hero.primaryCta.href} size="lg" showArrow>
                {hero.primaryCta.label}
              </PrimaryButton>
              <OutlineButton href={hero.secondaryCta.href} size="lg">
                {hero.secondaryCta.label}
              </OutlineButton>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative mx-auto aspect-square w-full max-w-lg lg:max-w-none"
          >
            <div className="relative h-full w-full animate-float">
              <Image
                src={hero.image}
                alt="Niños aprendiendo con material didáctico"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
