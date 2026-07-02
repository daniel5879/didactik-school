import type { CategoryItem, PageSeo } from "@/types";

/**
 * Catálogo completo de categorías. Fuente única de verdad consumida por:
 * - /categorias (todas)
 * - Home -> CategoriesSection (solo las "featured" más abajo)
 *
 * `href` queda vacío ("#") a propósito: los productos llegan en la Fase 3.
 * El botón "Explorar" ya existe en la UI, listo para apuntar a
 * /productos/[categoria] en cuanto exista esa ruta.
 */
export const allCategories: CategoryItem[] = [
  {
    id: "libros-lectura",
    title: "Libros de lectura",
    description: "Cuentos y literatura infantil para fomentar el hábito lector.",
    image: "/images/categories/libros-lectura.jpg",
    href: "#",
  },
  {
    id: "libros-actividades",
    title: "Libros de actividades",
    description: "Cuadernillos didácticos para reforzar el aprendizaje.",
    image: "/images/categories/libros-actividades.jpg",
    href: "#",
  },
  {
    id: "libros-colorear",
    title: "Libros para colorear",
    description: "Estimulan la creatividad y la coordinación motriz fina.",
    image: "/images/categories/libros-colorear.jpg",
    href: "#",
  },
  {
    id: "montessori",
    title: "Material Montessori",
    description: "Recursos pedagógicos basados en el método Montessori.",
    image: "/images/categories/montessori.jpg",
    href: "#",
  },
  {
    id: "ensamble",
    title: "Material de ensamble",
    description: "Piezas y bloques para construcción y motricidad fina.",
    image: "/images/categories/ensamble.jpg",
    href: "#",
  },
  {
    id: "desarrollo-cognitivo",
    title: "Desarrollo cognitivo",
    description: "Juegos y materiales que potencian el pensamiento lógico.",
    image: "/images/categories/desarrollo-cognitivo.jpg",
    href: "#",
  },
  {
    id: "matematicas",
    title: "Matemáticas",
    description: "Material manipulativo para el aprendizaje numérico.",
    image: "/images/categories/matematicas.jpg",
    href: "#",
  },
  {
    id: "lenguaje",
    title: "Lenguaje",
    description: "Recursos para el desarrollo del habla y la comunicación.",
    image: "/images/categories/lenguaje.jpg",
    href: "#",
  },
  {
    id: "motricidad",
    title: "Motricidad",
    description: "Material para el desarrollo motor fino y grueso.",
    image: "/images/categories/motricidad.jpg",
    href: "#",
  },
  {
    id: "terapia",
    title: "Terapia",
    description: "Recursos terapéuticos para especialistas en desarrollo infantil.",
    image: "/images/categories/terapia.jpg",
    href: "#",
  },
  {
    id: "juegos-educativos",
    title: "Juegos educativos",
    description: "Aprendizaje a través del juego, individual o en grupo.",
    image: "/images/categories/juegos-educativos.jpg",
    href: "#",
  },
  {
    id: "material-sensorial",
    title: "Material sensorial",
    description: "Estimulación a través de texturas, sonidos y colores.",
    image: "/images/categories/material-sensorial.jpg",
    href: "#",
  },
  {
    id: "rompecabezas",
    title: "Rompecabezas",
    description: "Distintos niveles de dificultad para todas las edades.",
    image: "/images/categories/rompecabezas.jpg",
    href: "#",
  },
  {
    id: "preescolar",
    title: "Material para preescolar",
    description: "Kits y recursos pensados para el aula de preescolar.",
    image: "/images/categories/preescolar.jpg",
    href: "#",
  },
];

/** Subconjunto destacado para el Home — no duplica datos, solo selecciona. */
export const categoriesSection = {
  title: "Categorías",
  subtitle: "Un catálogo pensado para cada etapa del aprendizaje.",
  items: allCategories.slice(0, 6),
};

export const categoriasPageContent = {
  seo: {
    title: "Categorías | Material Didáctico Didactik School",
    description:
      "Explora las categorías de material didáctico de Didactik School: lectura, Montessori, terapia, motricidad, matemáticas y más.",
    path: "/categorias",
  } satisfies PageSeo,
  hero: {
    eyebrow: "Catálogo",
    title: "Encuentra el material correcto para cada etapa",
    subtitle:
      "Organizado por especialidad para que escuelas, papás y especialistas encuentren justo lo que necesitan.",
  },
  emptyState: {
    title: "¿Buscas algo que no ves aquí?",
    description:
      "Conseguimos material especializado bajo pedido. Cuéntanos qué necesitas y te ayudamos a encontrarlo.",
    cta: { label: "Contactar a un asesor", href: "/contacto" },
  },
};
