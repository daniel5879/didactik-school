"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { cn } from "@/lib/utils";
import type { CategoryItem } from "@/types";

interface CategoryGridProps {
  items: CategoryItem[];
  columns?: 2 | 3;
  className?: string;
}

/** Grid reutilizable de CategoryCard — usado en Home y en /categorias. */
export function CategoryGrid({ items, columns = 3, className }: CategoryGridProps) {
  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        className
      )}
    >
      {items.map((item) => (
        <CategoryCard key={item.id} {...item} />
      ))}
    </motion.div>
  );
}
