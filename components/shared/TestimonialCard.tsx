"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import type { Testimonial } from "@/types";

export function TestimonialCard({ name, role, quote, avatar, rating }: Testimonial) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-soft"
    >
      <Quote className="mb-4 h-6 w-6 text-accent-400" strokeWidth={1.5} />
      <p className="flex-1 text-sm leading-relaxed text-neutral-600">&ldquo;{quote}&rdquo;</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-full bg-neutral-100">
          <Image src={avatar} alt={name} fill sizes="44px" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900">{name}</p>
          <p className="text-xs text-neutral-500">{role}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
