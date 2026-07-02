"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import type { TrustStat } from "@/types";

interface StatsGridProps {
  stats: TrustStat[];
}

/** Grid de estadísticas reutilizable — mismo estilo que TrustBar del home. */
export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-2 gap-8 sm:grid-cols-3"
    >
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={fadeUp} className="text-center">
          <p className="text-3xl font-bold text-primary-700 sm:text-4xl">{stat.value}</p>
          <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
