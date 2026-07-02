import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/content/company";
import { audienceLinks, secondaryLinks } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-900 text-neutral-100">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo/didactik-logo.png"
              alt={company.name}
              width={160}
              height={68}
              className="h-12 w-auto object-contain"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-200">
              {company.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-300">
              Navegación
            </h4>
            <ul className="mt-4 space-y-3">
              {secondaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-300">
              ¿Quién eres?
            </h4>
            <ul className="mt-4 space-y-3">
              {audienceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mt-8 text-sm font-semibold uppercase tracking-wide text-primary-300">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-200">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-300">
              Horario
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-200">
              {company.schedule.map((s) => (
                <li key={s.days}>
                  {s.days}: {s.hours}
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-start gap-2 text-sm text-primary-200">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={company.maps} target="_blank" rel="noopener noreferrer">
                {company.address.street}, {company.address.city}
              </a>
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-800 text-primary-100 transition-colors hover:bg-secondary-400 hover:text-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-800 text-primary-100 transition-colors hover:bg-secondary-400 hover:text-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-primary-800 pt-8 text-center text-xs text-primary-300">
          © {new Date().getFullYear()} {company.legalName}. Todos los derechos
          reservados.
        </div>
      </Container>
    </footer>
  );
}
