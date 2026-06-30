import type { Testimonial } from "@/types";

export const testimonialsSection: {
  title: string;
  subtitle: string;
  items: Testimonial[];
} = {
  title: "Lo que dicen nuestros clientes",
  subtitle: "Instituciones y familias que ya confían en Didactik School.",
  items: [
    {
      id: "t1",
      name: "Mariana Cobos",
      role: "Directora, Colegio Pequeños Pasos",
      quote:
        "El material de Didactik elevó la calidad de nuestras clases de estimulación temprana. El soporte y los tiempos de entrega son excelentes.",
      avatar: "/images/testimonials/mariana-cobos.jpg",
      rating: 5,
    },
    {
      id: "t2",
      name: "Roberto Mendoza",
      role: "Psicólogo infantil",
      quote:
        "Uso sus recursos terapéuticos en consulta semanalmente. La calidad y el respaldo pedagógico se notan desde el primer uso.",
      avatar: "/images/testimonials/roberto-mendoza.jpg",
      rating: 5,
    },
    {
      id: "t3",
      name: "Lucía Fernández",
      role: "Mamá de dos niños",
      quote:
        "Encontré todo lo que necesitaba para apoyar el aprendizaje de mis hijos en casa, con material seguro y bien diseñado.",
      avatar: "/images/testimonials/lucia-fernandez.jpg",
      rating: 5,
    },
  ],
};
