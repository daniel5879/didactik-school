import { WhatsAppButton } from "@/components/ui/Button";
import { CTASection as SharedCTASection } from "@/components/shared/CTASection";
import { ctaSection } from "@/content/home";
import { company } from "@/content/company";

export function CTASection() {
  return (
    <SharedCTASection
      {...ctaSection}
      extraAction={
        <WhatsAppButton phone={company.whatsapp} size="lg">
          Escríbenos por WhatsApp
        </WhatsAppButton>
      }
    />
  );
}
