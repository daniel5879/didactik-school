import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactCard } from "@/components/shared/ContactCard";
import { ContactForm } from "@/components/shared/ContactForm";
import { WhatsAppButton, OutlineButton } from "@/components/ui/Button";
import { contactoContent } from "@/content/pages";
import { company } from "@/content/company";

export const metadata: Metadata = buildPageMetadata(contactoContent.seo);

export default function ContactoPage() {
  const scheduleText = company.schedule.map((s) => `${s.days}: ${s.hours}`).join(" · ");

  return (
    <>
      <Breadcrumbs items={[{ label: "Contacto" }]} />
      <PageHero
        eyebrow={contactoContent.hero.eyebrow}
        title={contactoContent.hero.title}
        subtitle={contactoContent.hero.subtitle}
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <ContactCard
                  icon={Phone}
                  title="Teléfono"
                  value={company.phoneDisplay}
                  href={`tel:${company.phone}`}
                />
                <ContactCard
                  icon={Mail}
                  title="Correo"
                  value={company.email}
                  href={`mailto:${company.email}`}
                />
                <ContactCard
                  icon={MapPin}
                  title="Dirección"
                  value={`${company.address.street}, ${company.address.city}`}
                  href={company.maps}
                />
                <ContactCard icon={Clock} title="Horario" value={scheduleText} />
              </div>

              <div className="flex flex-wrap gap-4">
                <WhatsAppButton phone={company.whatsapp} size="lg">
                  Escríbenos por WhatsApp
                </WhatsAppButton>
                <OutlineButton href={company.maps} size="lg">
                  Abrir en Google Maps
                </OutlineButton>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
                <iframe
                  title="Ubicación de Didactik School"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    `${company.address.street}, ${company.address.city}`
                  )}&output=embed`}
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
