import type { CategoryItem } from "@/types";

export const categoriesSection: {
  title: string;
  subtitle: string;
  items: CategoryItem[];
} = {
  title: "Categorías",
  subtitle: "Un catálogo pensado para cada etapa del aprendizaje.",
  items: [
    {
      id: "primera-infancia",
      title: "Primera infancia",
      description: "Estimulación temprana y motricidad fina.",
      image: "/images/categories/primera-infancia.jpg",
      href: "#",
    },
    {
      id: "preescolar",
      title: "Preescolar",
      description: "Lectoescritura inicial y pensamiento lógico.",
      image: "/images/categories/preescolar.jpg",
      href: "#",
    },
    {
      id: "primaria",
      title: "Primaria",
      description: "Material curricular y de apoyo académico.",
      image: "/images/categories/primaria.jpg",
      href: "#",
    },
    {
      id: "terapeutico",
      title: "Terapéutico",
      description: "Recursos para psicología y desarrollo infantil.",
      image: "/images/categories/terapeutico.jpg",
      href: "#",
    },
    {
      id: "manualidades",
      title: "Manualidades",
      description: "Arte, creatividad y expresión.",
      image: "/images/categories/manualidades.jpg",
      href: "#",
    },
    {
      id: "institucional",
      title: "Institucional",
      description: "Paquetes por volumen para escuelas y guarderías.",
      image: "/images/categories/institucional.jpg",
      href: "#",
    },
  ],
};
