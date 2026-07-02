"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

interface FAQAccordionProps {
  items: FaqItem[];
}

/**
 * Acordeón de preguntas frecuentes, accesible por teclado (button nativo,
 * aria-expanded, aria-controls). Usado en /faq y en la sección de FAQ
 * de /escuelas.
 */
export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <motion.div
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white"
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <motion.div key={item.id} variants={fadeUp}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-trigger-${item.id}`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-inset"
              >
                <span className="font-semibold text-neutral-900">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300",
                    isOpen && "rotate-180 text-primary-600"
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-trigger-${item.id}`}
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-neutral-500">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
