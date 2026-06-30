"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { trustBar } from "@/content/home";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface py-14">
      <Container>
        <p className="text-center text-sm font-medium uppercase tracking-wide text-neutral-400">
          {trustBar.title}
        </p>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {trustBar.stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <p className="text-3xl font-bold text-primary-700 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
