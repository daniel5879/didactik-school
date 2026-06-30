import type { NavLink } from "@/types";

export const navigation: { links: NavLink[]; cta: NavLink } = {
  links: [
    { label: "Inicio", href: "#hero" },
    { label: "¿Quién eres?", href: "#audiencia" },
    { label: "Categorías", href: "#categorias" },
    { label: "¿Por qué Didactik?", href: "#por-que-didactik" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ],
  cta: { label: "Cotizar ahora", href: "#contacto" },
};
