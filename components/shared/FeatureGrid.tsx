"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { cn } from "@/lib/utils";
import type { FeatureItem } from "@/types";

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3;
  className?: string;
}

/** Grid reutilizable de FeatureCard — usado en Home, /escuelas, /papas, etc. */
export function FeatureGrid({ items, columns = 2, className }: FeatureGridProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "grid gap-7 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        className
      )}
    >
      {items.map((item) => (
        <FeatureCard key={item.id} {...item} />
      ))}
    </motion.div>
  );
}
