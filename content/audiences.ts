import {
  Home,
  Sparkles,
  GraduationCap,
  Blocks,
  Gift,
  BookOpen,
  HeartPulse,
  MessageCircle,
  Activity,
  Hand,
  PackageCheck,
  RefreshCw,
  Clock,
  UserCheck,
  FileText,
  Users2,
  ClipboardList,
  Handshake,
} from "lucide-react";
import type { AudiencePageContent, FeatureItem, ProcessStep, PageSeo } from "@/types";

// ---------------------------------------------------------------------------
// /papas
// ---------------------------------------------------------------------------
export const papasContent: AudiencePageContent = {
  seo: {
    title: "Para Papás | Material Educativo en Casa | Didactik School",
    description:
      "Material didáctico y Montessori para apoyar el aprendizaje de tus hijos en casa: estimulación temprana, apoyo escolar y libros.",
    path: "/papas",
  },
  hero: {
    eyebrow: "Para papás",
    title: "Aprendizaje en casa, con el respaldo correcto",
    subtitle:
      "Material pensado para acompañar a tus hijos en cada etapa, dentro y fuera del salón de clases.",
    image: "/images/papas/hero-papas.jpg",
    primaryCta: { label: "Ver categorías", href: "/categorias" },
    secondaryCta: { label: "Hablar con un asesor", href: "/contacto" },
  },
  features: [
    {
      id: "aprendizaje-casa",
      title: "Aprendizaje en casa",
      description: "Recursos para reforzar lo aprendido en la escuela, sin presión.",
      icon: Home,
    },
    {
      id: "estimulacion-temprana",
      title: "Estimulación temprana",
      description: "Material sensorial y motriz para los primeros años de vida.",
      icon: Sparkles,
    },
    {
      id: "apoyo-escolar",
      title: "Apoyo escolar",
      description: "Cuadernillos y ejercicios alineados a distintos niveles educativos.",
      icon: GraduationCap,
    },
    {
      id: "montessori",
      title: "Material Montessori",
      description: "Piezas y juegos basados en el método Montessori para casa.",
      icon: Blocks,
    },
    {
      id: "regalos-educativos",
      title: "Regalos educativos",
      description: "Opciones pensadas para regalar algo que también enseña.",
      icon: Gift,
    },
    {
      id: "libros",
      title: "Libros",
      description: "Cuentos y literatura infantil para fomentar la lectura en casa.",
      icon: BookOpen,
    },
  ],
  cta: {
    title: "Encuentra el material ideal para tu hijo",
    subtitle: "Te ayudamos a elegir según su edad y etapa de desarrollo.",
    primaryCta: { label: "Solicitar recomendación", href: "/contacto" },
  },
};

// ---------------------------------------------------------------------------
// /psicologos
// ---------------------------------------------------------------------------
export const psicologosContent: AudiencePageContent = {
  seo: {
    title: "Para Psicólogos | Material Terapéutico | Didactik School",
    description:
      "Material especializado para terapia, lenguaje, motricidad, estimulación y trabajo sensorial en consulta de psicología infantil.",
    path: "/psicologos",
  },
  hero: {
    eyebrow: "Para psicólogos",
    title: "Material terapéutico para tu consulta",
    subtitle:
      "Recursos especializados que apoyan el trabajo clínico en desarrollo infantil, sesión a sesión.",
    image: "/images/psicologos/hero-psicologos.jpg",
    primaryCta: { label: "Ver categorías", href: "/categorias" },
    secondaryCta: { label: "Hablar con un asesor", href: "/contacto" },
  },
  features: [
    {
      id: "terapia",
      title: "Terapia",
      description: "Material de apoyo para distintos enfoques terapéuticos.",
      icon: HeartPulse,
    },
    {
      id: "lenguaje",
      title: "Lenguaje",
      description: "Recursos para el desarrollo del habla y la comunicación.",
      icon: MessageCircle,
    },
    {
      id: "motricidad",
      title: "Motricidad",
      description: "Ejercicios y material para motricidad fina y gruesa.",
      icon: Activity,
    },
    {
      id: "estimulacion",
      title: "Estimulación",
      description: "Material multisensorial para sesiones de estimulación temprana.",
      icon: Sparkles,
    },
    {
      id: "sensorial",
      title: "Material sensorial",
      description: "Texturas, sonidos y estímulos visuales para terapia sensorial.",
      icon: Hand,
    },
  ],
  cta: {
    title: "Equipa tu consultorio con material confiable",
    subtitle: "Cotiza un kit terapéutico a la medida de tu práctica clínica.",
    primaryCta: { label: "Solicitar cotización", href: "/contacto" },
  },
};

// ---------------------------------------------------------------------------
// /guarderias
// ---------------------------------------------------------------------------
export const guarderiasContent: AudiencePageContent = {
  seo: {
    title: "Para Guarderías | Reposición y Material Diario | Didactik School",
    description:
      "Material de uso diario para guarderías y estancias infantiles, con reposición rápida y atención personalizada.",
    path: "/guarderias",
  },
  hero: {
    eyebrow: "Para guarderías",
    title: "El material que usas todos los días, siempre disponible",
    subtitle:
      "Resolvemos la compra y reposición frecuente de material para estancias infantiles, con atención directa.",
    image: "/images/guarderias/hero-guarderias.jpg",
    primaryCta: { label: "Ver categorías", href: "/categorias" },
    secondaryCta: { label: "Hablar con un asesor", href: "/contacto" },
  },
  features: [
    {
      id: "uso-diario",
      title: "Material de uso diario",
      description: "Todo lo que tu estancia necesita para la operación cotidiana.",
      icon: PackageCheck,
    },
    {
      id: "compras-frecuentes",
      title: "Compras frecuentes",
      description: "Facilitamos pedidos recurrentes sin reprocesar cada cotización.",
      icon: RefreshCw,
    },
    {
      id: "reposicion-rapida",
      title: "Reposición rápida",
      description: "Tiempos de entrega pensados para no detener tu operación.",
      icon: Clock,
    },
    {
      id: "atencion-personalizada",
      title: "Atención personalizada",
      description: "Un asesor directo que conoce las necesidades de tu estancia.",
      icon: UserCheck,
    },
  ],
  cta: {
    title: "Simplifica la compra de material para tu guardería",
    subtitle: "Agenda una llamada y arma tu lista de reposición recurrente.",
    primaryCta: { label: "Solicitar cotización", href: "/contacto" },
  },
};

// ---------------------------------------------------------------------------
// /escuelas — contenido extendido (beneficios, proceso, tipos de proyecto, FAQ)
// ---------------------------------------------------------------------------
const escuelasBenefits: FeatureItem[] = [
  {
    id: "precios-volumen",
    title: "Precios por volumen",
    description: "Condiciones preferenciales según el tamaño de tu institución.",
    icon: FileText,
  },
  {
    id: "asesor-dedicado",
    title: "Asesor dedicado",
    description: "Una persona de contacto directo para todo el proyecto.",
    icon: Handshake,
  },
  {
    id: "entrega-institucional",
    title: "Entrega institucional",
    description: "Tiempos definidos y coordinados con tu calendario escolar.",
    icon: Clock,
  },
  {
    id: "facturacion-clara",
    title: "Facturación clara",
    description: "CFDI y documentación lista para procesos administrativos.",
    icon: ClipboardList,
  },
];

const escuelasProcess: ProcessStep[] = [
  {
    id: "paso-1",
    number: "01",
    title: "Cuéntanos tu necesidad",
    description: "Compártenos el tipo de proyecto, niveles y cantidad aproximada.",
  },
  {
    id: "paso-2",
    number: "02",
    title: "Propuesta a la medida",
    description: "Preparamos una cotización con material y tiempos definidos.",
  },
  {
    id: "paso-3",
    number: "03",
    title: "Confirmación y producción",
    description: "Una vez aprobada, preparamos el pedido completo.",
  },
  {
    id: "paso-4",
    number: "04",
    title: "Entrega y seguimiento",
    description: "Coordinamos la entrega y damos seguimiento postventa.",
  },
];

const escuelasProjectTypes: FeatureItem[] = [
  {
    id: "kits-grupales",
    title: "Kits grupales",
    description: "Paquetes estandarizados por grado o salón completo.",
    icon: Users2,
  },
  {
    id: "proyectos-comite",
    title: "Proyectos de comité",
    description: "Listas coordinadas con comités de padres de familia.",
    icon: Handshake,
  },
  {
    id: "leen",
    title: "Programas tipo LEEN",
    description: "Soluciones educativas alineadas a programas de lectura institucionales.",
    icon: BookOpen,
  },
];

export const escuelasContent = {
  seo: {
    title: "Para Escuelas y Comités | Didactik School",
    description:
      "Soluciones educativas para escuelas, comités de padres y programas tipo LEEN, con precios por volumen y entrega institucional.",
    path: "/escuelas",
  } satisfies PageSeo,
  hero: {
    eyebrow: "Para escuelas",
    title: "Soluciones educativas para tu institución",
    subtitle:
      "Trabajamos con escuelas, comités de padres y programas de lectura para resolver proyectos completos de material didáctico.",
    image: "/images/escuelas/hero-escuelas.jpg",
    primaryCta: { label: "Solicitar propuesta", href: "/contacto" },
    secondaryCta: { label: "Ver categorías", href: "/categorias" },
  },
  benefits: escuelasBenefits,
  process: escuelasProcess,
  projectTypes: escuelasProjectTypes,
  faq: [
    {
      id: "escuelas-volumen",
      question: "¿Manejan precios especiales por volumen?",
      answer:
        "Sí, las condiciones se ajustan según la cantidad de alumnos o salones involucrados en el proyecto.",
    },
    {
      id: "escuelas-tiempos",
      question: "¿Cuánto tardan en entregar un pedido institucional?",
      answer:
        "Depende del volumen, pero siempre coordinamos tiempos definidos alineados a tu calendario escolar.",
    },
    {
      id: "escuelas-factura",
      question: "¿Pueden facturar a nombre de la institución?",
      answer: "Sí, emitimos CFDI a nombre de la escuela o del comité organizador.",
    },
  ],
  cta: {
    title: "Llevemos tu proyecto educativo al siguiente nivel",
    subtitle: "Agenda una llamada con nuestro equipo y recibe una propuesta a la medida.",
    primaryCta: { label: "Solicitar propuesta", href: "/contacto" },
  },
};
