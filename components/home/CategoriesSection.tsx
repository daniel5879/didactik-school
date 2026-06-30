"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { categoriesSection } from "@/content/categories";

export function CategoriesSection() {
  return (
    <section id="categorias" className="bg-surface py-24 lg:py-32">
      <Container>
        <SectionTitle
          title={categoriesSection.title}
          subtitle={categoriesSection.subtitle}
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categoriesSection.items.map((item) => (
            <CategoryCard key={item.id} {...item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
