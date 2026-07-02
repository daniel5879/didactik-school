import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "wide";
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 lg:px-10",
        size === "default" ? "max-w-7xl" : "max-w-8xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
