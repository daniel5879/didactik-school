"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonialsSection } from "@/content/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-surface py-24 lg:py-32">
      <Container>
        <SectionTitle
          title={testimonialsSection.title}
          subtitle={testimonialsSection.subtitle}
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonialsSection.items.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
