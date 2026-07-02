import type { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}

/** Tarjeta individual de un canal de contacto (teléfono, correo, dirección...). */
export function ContactCard({ icon: Icon, title, value, href }: ContactCardProps) {
  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <div>
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        <p className="mt-0.5 text-sm text-neutral-500">{value}</p>
      </div>
    </>
  );

  const className =
    "flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition-colors duration-200";

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${className} hover:border-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2`}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
