import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { AudienceSection } from "@/components/home/AudienceSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { WhyDidactik } from "@/components/home/WhyDidactik";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AudienceSection />
      <CategoriesSection />
      <WhyDidactik />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
