"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { AudienceItem } from "@/types";

export function AudienceCard({ title, description, icon: Icon }: AudienceItem) {
  return (
    <motion.div
      variants={fadeUp}
      className="group rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">{description}</p>
    </motion.div>
  );
}
