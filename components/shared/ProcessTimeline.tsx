"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import type { ProcessStep } from "@/types";

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

/** Línea de tiempo horizontal para procesos de trabajo (ej. /escuelas). */
export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {steps.map((step, index) => (
        <motion.div key={step.id} variants={fadeUp} className="relative">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
              {step.number}
            </span>
            {index < steps.length - 1 && (
              <span
                aria-hidden
                className="hidden h-px flex-1 bg-border lg:block"
              />
            )}
          </div>
          <h3 className="mt-4 font-semibold text-neutral-900">{step.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
            {step.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
