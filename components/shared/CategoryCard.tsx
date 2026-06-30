"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import type { CategoryItem } from "@/types";

export function CategoryCard({ title, description, image, href }: CategoryItem) {
  return (
    <motion.a
      href={href}
      variants={fadeUp}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted"
    >
      <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          <ArrowUpRight className="h-5 w-5 text-neutral-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-600" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">{description}</p>
      </div>
    </motion.a>
  );
}
