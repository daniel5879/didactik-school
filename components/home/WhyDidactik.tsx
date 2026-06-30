"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, viewportOnce } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { whyDidactik } from "@/content/home";

export function WhyDidactik() {
  return (
    <section id="por-que-didactik" className="py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-100"
          >
            <Image
              src="/images/about/why-didactik.jpg"
              alt="Equipo Didactik School"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <div>
            <SectionTitle
              align="left"
              title={whyDidactik.title}
              subtitle={whyDidactik.subtitle}
              className="mx-0 text-left"
            />

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-10 grid gap-7 sm:grid-cols-2"
            >
              {whyDidactik.items.map((item) => (
                <FeatureCard key={item.id} {...item} />
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
