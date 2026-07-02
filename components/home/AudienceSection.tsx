"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AudienceCard } from "@/components/shared/AudienceCard";
import { audience } from "@/content/home";

export function AudienceSection() {
  return (
    <section id="audiencia" className="py-24 lg:py-32">
      <Container>
        <SectionTitle title={audience.title} subtitle={audience.subtitle} />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {audience.items.map((item) => (
            <AudienceCard key={item.id} {...item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
