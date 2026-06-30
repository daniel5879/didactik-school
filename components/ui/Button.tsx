import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-600 text-white shadow-soft hover:bg-primary-700 focus-visible:ring-primary-400",
        secondary:
          "bg-secondary-400 text-primary-900 shadow-soft hover:bg-secondary-500 focus-visible:ring-secondary-300",
        outline:
          "border border-neutral-300 bg-transparent text-neutral-800 hover:border-primary-400 hover:text-primary-700 focus-visible:ring-primary-300",
        whatsapp:
          "bg-success-500 text-white shadow-soft hover:bg-success-600 focus-visible:ring-success-400",
      },
      size: {
        default: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type CommonProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: ReactNode;
  showArrow?: boolean;
  href?: string;
};

export type ButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | "type">;

export function Button({
  className,
  variant,
  size,
  showArrow,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {showArrow && <ArrowRight className="h-4 w-4" />}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </button>
  );
}

export function PrimaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="primary" {...props} />;
}

export function SecondaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="secondary" {...props} />;
}

export function OutlineButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="outline" {...props} />;
}

export function WhatsAppButton({
  phone,
  message = "Hola, me gustaría más información sobre Didactik School.",
  children,
  ...props
}: Omit<ButtonProps, "variant" | "href"> & { phone: string; message?: string }) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <Button
      variant="whatsapp"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </Button>
  );
}
