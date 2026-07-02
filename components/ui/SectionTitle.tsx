import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wide text-secondary-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-balance text-base leading-relaxed text-neutral-500 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
