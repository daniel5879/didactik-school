"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navigation } from "@/content/navigation";
import { company } from "@/content/company";
import { PrimaryButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const scrolled = useScrollPosition();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/80 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <Image
              src="/images/logo/didactik-logo.png"
              alt={company.name}
              width={160}
              height={68}
              priority
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <PrimaryButton href={navigation.cta.href}>
              {navigation.cta.label}
            </PrimaryButton>
          </div>

          <button
            aria-label="Abrir menú"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-700 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-white px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-neutral-700"
              >
                {link.label}
              </a>
            ))}
            <PrimaryButton href={navigation.cta.href} className="mt-2 w-full">
              {navigation.cta.label}
            </PrimaryButton>
          </nav>
        </div>
      )}
    </header>
  );
}
