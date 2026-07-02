import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

/** Separador visual sutil entre secciones. Reemplaza bordes repetidos inline. */
export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-border to-transparent",
        className
      )}
    />
  );
}
