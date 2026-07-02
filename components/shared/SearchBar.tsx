"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  variant?: "inline" | "compact";
  className?: string;
  onClose?: () => void;
}

/**
 * Búsqueda global de la interfaz. Todavía no consulta una base de datos —
 * redirige a /categorias con el término como query param (?q=...), listo
 * para apuntar a /productos?q=... en cuanto exista el catálogo real.
 */
export function SearchBar({ variant = "inline", className, onClose }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/categorias?q=${encodeURIComponent(trimmed)}` : "/categorias");
    onClose?.();
  }

  return (
    <form
      role="search"
      aria-label="Buscar en Didactik School"
      onSubmit={handleSubmit}
      className={cn(
        "flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 shadow-soft transition-colors focus-within:border-primary-400",
        variant === "compact" && "py-2",
        className
      )}
    >
      <Search className="h-4 w-4 shrink-0 text-neutral-400" aria-hidden />
      <label htmlFor="global-search" className="sr-only">
        Buscar productos o categorías
      </label>
      <input
        id="global-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar categorías, productos..."
        className="w-full bg-transparent text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
      />
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar búsqueda"
          className="shrink-0 text-neutral-400 hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </form>
  );
}
