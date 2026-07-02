import {
  Users,
  School,
  Brain,
  Baby,
  BookOpen,
  ShieldCheck,
  Truck,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import type { AudienceItem, FeatureItem, TrustStat } from "@/types";

export const hero = {
  eyebrow: "Material didáctico para México",
  title: "Educación de calidad empieza con el material correcto",
  subtitle:
    "Diseñamos y distribuimos recursos didácticos pensados para potenciar el aprendizaje infantil — confiables, pedagógicos y respaldados por años de experiencia.",
  primaryCta: { label: "Ver categorías", href: "#categorias" },
  secondaryCta: { label: "Hablar con un asesor", href: "/contacto" },
  image: "/images/hero/hero-illustration.png",
};

export const trustBar: { title: string; stats: TrustStat[] } = {
  title: "Confiado por instituciones en todo México",
  stats: [
    { value: "+15", label: "años de experiencia" },
    { value: "+500", label: "escuelas atendidas" },
    { value: "+1,200", label: "productos didácticos" },
    { value: "98%", label: "clientes que recompran" },
  ],
};

export const audience: { title: string; subtitle: string; items: AudienceItem[] } = {
  title: "¿Quién eres?",
  subtitle: "Soluciones pensadas para cada perfil dentro del ecosistema educativo.",
  items: [
    {
      id: "papas",
      title: "Papás",
      description:
        "Material educativo confiable para acompañar el aprendizaje de tus hijos en casa.",
      icon: Users,
      href: "/papas",
    },
    {
      id: "escuelas",
      title: "Escuelas",
      description:
        "Surtido institucional con tiempos de entrega y precios preferenciales por volumen.",
      icon: School,
      href: "/escuelas",
    },
    {
      id: "psicologos",
      title: "Psicólogos",
      description:
        "Recursos terapéuticos y didácticos especializados para sesiones de desarrollo infantil.",
      icon: Brain,
      href: "/psicologos",
    },
    {
      id: "guarderias",
      title: "Guarderías",
      description:
        "Kits completos y seguros, diseñados para primera infancia y estimulación temprana.",
      icon: Baby,
      href: "/guarderias",
    },
  ],
};

export const whyDidactik: { title: string; subtitle: string; items: FeatureItem[] } = {
  title: "¿Por qué Didactik?",
  subtitle:
    "Más de una década diseñando experiencias de aprendizaje que realmente funcionan.",
  items: [
    {
      id: "pedagogico",
      title: "Diseño pedagógico",
      description:
        "Cada producto está validado con especialistas en educación infantil.",
      icon: BookOpen,
    },
    {
      id: "calidad",
      title: "Calidad garantizada",
      description:
        "Materiales seguros, duraderos y certificados para uso escolar diario.",
      icon: ShieldCheck,
    },
    {
      id: "entrega",
      title: "Entrega confiable",
      description: "Cobertura nacional con tiempos de entrega puntuales.",
      icon: Truck,
    },
    {
      id: "innovacion",
      title: "Innovación constante",
      description: "Catálogo en evolución, alineado a nuevas metodologías educativas.",
      icon: Sparkles,
    },
    {
      id: "acompanamiento",
      title: "Acompañamiento real",
      description: "Asesoría personalizada antes, durante y después de tu compra.",
      icon: HeartHandshake,
    },
  ],
};

export const ctaSection = {
  title: "Llevemos tu institución al siguiente nivel",
  subtitle:
    "Agenda una llamada con nuestro equipo y recibe una propuesta a la medida de tus necesidades.",
  primaryCta: { label: "Solicitar cotización", href: "/contacto" },
};
