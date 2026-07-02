import type { NavLink } from "@/types";

/**
 * Navegación principal. Se mantiene deliberadamente corta (principio
 * minimalista del sistema de diseño): las páginas de audiencia (/papas,
 * /escuelas, /psicologos, /guarderias) son accesibles desde la sección
 * "¿Quién eres?" del home y desde el Footer, para no saturar el navbar.
 */
export const navigation: { links: NavLink[]; cta: NavLink } = {
  links: [
    { label: "Categorías", href: "/categorias" },
    { label: "Escuelas", href: "/escuelas" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "FAQ", href: "/faq" },
  ],
  cta: { label: "Contacto", href: "/contacto" },
};

/** Links de audiencia — usados en Footer y en la sección "¿Quién eres?" del home. */
export const audienceLinks: NavLink[] = [
  { label: "Papás", href: "/papas" },
  { label: "Escuelas", href: "/escuelas" },
  { label: "Psicólogos", href: "/psicologos" },
  { label: "Guarderías", href: "/guarderias" },
];

/** Links secundarios — usados en Footer. */
export const secondaryLinks: NavLink[] = [
  { label: "Categorías", href: "/categorias" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "FAQ", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
];
