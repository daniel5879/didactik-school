import { Target, Award, Lightbulb, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import type { FeatureItem, PageSeo } from "@/types";

// ---------------------------------------------------------------------------
// /nosotros
// ---------------------------------------------------------------------------
const nosotrosValues: FeatureItem[] = [
  {
    id: "rigor-pedagogico",
    title: "Rigor pedagógico",
    description: "Cada producto pasa por una validación educativa antes de ofrecerse.",
    icon: ShieldCheck,
  },
  {
    id: "cercania",
    title: "Cercanía real",
    description: "Acompañamos cada proyecto con atención directa, no automatizada.",
    icon: HeartHandshake,
  },
  {
    id: "mejora-continua",
    title: "Mejora continua",
    description: "Renovamos catálogo conforme evolucionan las metodologías educativas.",
    icon: Sparkles,
  },
];

export const nosotrosContent = {
  seo: {
    title: "Nosotros | Didactik School",
    description:
      "Conoce la misión, experiencia y filosofía de Didactik School: más de una década diseñando material didáctico para México.",
    path: "/nosotros",
  } satisfies PageSeo,
  hero: {
    eyebrow: "Nosotros",
    title: "Educación con propósito, desde el primer producto",
    subtitle:
      "No vendemos papelería. Diseñamos herramientas para que el aprendizaje infantil ocurra de la mejor forma posible.",
  },
  mission: {
    title: "Nuestra misión",
    description:
      "Acercar material didáctico de calidad a familias, escuelas y especialistas en todo México, con respaldo pedagógico real detrás de cada producto.",
  },
  experience: {
    title: "Nuestra experiencia",
    description:
      "Más de una década trabajando directamente con educadores, psicólogos y comités escolares nos permite entender qué funciona realmente en el aula y en casa.",
    stats: [
      { value: "+15", label: "años de experiencia" },
      { value: "+500", label: "escuelas atendidas" },
      { value: "+1,200", label: "productos didácticos" },
    ],
  },
  philosophy: {
    title: "Nuestra filosofía",
    description:
      "Creemos que el material correcto, en el momento correcto, cambia la forma en que un niño aprende. Por eso cada categoría de nuestro catálogo responde a una necesidad pedagógica específica, no solo a una tendencia.",
    icon: Lightbulb,
  },
  howWeHelp: {
    title: "Cómo ayudamos",
    items: [
      {
        id: "asesoria",
        title: "Asesoría especializada",
        description: "Te ayudamos a elegir el material correcto según el perfil y la edad.",
        icon: Target,
      },
      {
        id: "proyectos",
        title: "Proyectos institucionales",
        description: "Acompañamos proyectos completos para escuelas y comités.",
        icon: Award,
      },
    ] satisfies FeatureItem[],
  },
  values: nosotrosValues,
  image: "/images/about/equipo-didactik.jpg",
  cta: {
    title: "¿Quieres trabajar con nosotros?",
    subtitle: "Cuéntanos tu proyecto y te ayudamos a darle forma.",
    primaryCta: { label: "Contactar", href: "/contacto" },
  },
};

// ---------------------------------------------------------------------------
// /contacto
// ---------------------------------------------------------------------------
export const contactoContent = {
  seo: {
    title: "Contacto | Didactik School",
    description:
      "Escríbenos por WhatsApp, correo o formulario. Conoce nuestro horario, dirección y redes sociales.",
    path: "/contacto",
  } satisfies PageSeo,
  hero: {
    eyebrow: "Contacto",
    title: "Hablemos de tu proyecto",
    subtitle:
      "Ya sea una compra para casa o un proyecto institucional completo, estamos para ayudarte.",
  },
  form: {
    title: "Envíanos un mensaje",
    fields: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      profile: "¿Cuál es tu perfil?",
      profileOptions: ["Papá / mamá", "Escuela", "Psicólogo(a)", "Guardería", "Otro"],
      message: "Cuéntanos qué necesitas",
      submit: "Enviar mensaje",
    },
  },
};
