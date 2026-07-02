"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import type { AudienceItem } from "@/types";

export function AudienceCard({ title, description, icon: Icon, href }: AudienceItem) {
  const content = (
    <>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        {href && (
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-neutral-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-600" />
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">{description}</p>
    </>
  );

  const className =
    "group rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2";

  if (href) {
    return (
      <motion.a href={href} variants={fadeUp} className={`block ${className}`}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div variants={fadeUp} className={className}>
      {content}
    </motion.div>
  );
}
