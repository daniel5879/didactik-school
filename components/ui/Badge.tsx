import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
  {
    variants: {
      variant: {
        primary: "bg-primary-50 text-primary-700",
        accent: "bg-accent-50 text-accent-700",
        secondary: "bg-secondary-50 text-secondary-700",
        neutral: "bg-neutral-100 text-neutral-600",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
