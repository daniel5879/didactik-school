"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { FeatureItem } from "@/types";

export function FeatureCard({ title, description, icon: Icon }: FeatureItem) {
  return (
    <motion.div variants={fadeUp} className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="font-semibold text-neutral-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-neutral-500">{description}</p>
      </div>
    </motion.div>
  );
}
