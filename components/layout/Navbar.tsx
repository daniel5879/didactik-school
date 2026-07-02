"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navigation } from "@/content/navigation";
import { company } from "@/content/company";
import { PrimaryButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SearchBar } from "@/components/shared/SearchBar";

export function Navbar() {
  const scrolled = useScrollPosition();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/images/logo/didactik-logo.png"
              alt={company.name}
              width={160}
              height={68}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              aria-label="Buscar"
              onClick={() => setSearchOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-surface hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
            >
              <Search className="h-5 w-5" />
            </button>
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

        {searchOpen && (
          <div className="hidden pb-4 lg:block">
            <SearchBar onClose={() => setSearchOpen(false)} className="max-w-md" />
          </div>
        )}
      </Container>

      {open && (
        <div className="border-t border-border bg-white px-6 py-6 lg:hidden">
          <div className="mb-4">
            <SearchBar variant="compact" />
          </div>
          <nav className="flex flex-col gap-4">
            {navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-neutral-700"
              >
                {link.label}
              </Link>
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
