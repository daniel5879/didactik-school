import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { BreadcrumbItem } from "@/types";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumbs reutilizables. Uso:
 * <Breadcrumbs items={[{ label: "Categorías" }]} />
 * El "Inicio" se agrega automáticamente al principio.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ label: "Inicio", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface py-4">
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
                {index === 0 ? (
                  <Home className="h-3.5 w-3.5" aria-hidden />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5 text-neutral-300" aria-hidden />
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-1 rounded"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? "font-medium text-neutral-800" : undefined}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
