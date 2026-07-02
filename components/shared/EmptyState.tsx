import { PackageSearch } from "lucide-react";
import { PrimaryButton } from "@/components/ui/Button";

interface EmptyStateProps {
  title: string;
  description: string;
  cta?: { label: string; href: string };
}

/** Estado vacío reutilizable — usado hoy en /categorias, listo para /productos en Fase 3. */
export function EmptyState({ title, description, cta }: EmptyStateProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-2xl border border-dashed border-border bg-surface px-8 py-14 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600">
        <PackageSearch className="h-7 w-7" strokeWidth={1.5} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">{description}</p>
      {cta && (
        <PrimaryButton href={cta.href} className="mt-6">
          {cta.label}
        </PrimaryButton>
      )}
    </div>
  );
}
