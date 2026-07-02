import type { FaqItem, PageSeo } from "@/types";

export const faqItems: FaqItem[] = [
  {
    id: "envios",
    question: "¿Hacen envíos?",
    answer:
      "Sí, realizamos envíos a toda la república mexicana. Los tiempos de entrega varían según destino y volumen del pedido.",
  },
  {
    id: "facturacion",
    question: "¿Facturan?",
    answer:
      "Sí, emitimos factura electrónica (CFDI) para todas las compras. Solo necesitamos tus datos fiscales al momento de la cotización.",
  },
  {
    id: "pagos",
    question: "¿Qué formas de pago aceptan?",
    answer:
      "Aceptamos transferencia bancaria, tarjeta de crédito/débito y, para instituciones, esquemas de pago acordados según el proyecto.",
  },
  {
    id: "sucursales",
    question: "¿Tienen sucursales?",
    answer:
      "Operamos principalmente de forma centralizada en CDMX con cobertura nacional vía envío. Contáctanos si buscas atención en punto físico.",
  },
  {
    id: "productos-especiales",
    question: "¿Pueden conseguir productos especiales?",
    answer:
      "Sí, conseguimos material especializado bajo pedido para necesidades específicas de escuelas, psicólogos y guarderías.",
  },
  {
    id: "escuelas",
    question: "¿Atienden escuelas?",
    answer:
      "Sí, trabajamos con escuelas, comités de padres y LEEN con condiciones preferenciales por volumen y tiempos de entrega definidos.",
  },
  {
    id: "pedidos-grandes",
    question: "¿Atienden pedidos grandes?",
    answer:
      "Sí, contamos con capacidad para surtir pedidos institucionales grandes. Te asignamos un asesor dedicado para dar seguimiento.",
  },
  {
    id: "cambios",
    question: "¿Aceptan cambios o devoluciones?",
    answer:
      "Sí, aceptamos cambios por defectos de fábrica dentro de los primeros días posteriores a la entrega. Escríbenos para iniciar el proceso.",
  },
];

export const faqPageContent = {
  seo: {
    title: "Preguntas Frecuentes | Didactik School",
    description:
      "Respuestas a las preguntas más comunes sobre envíos, facturación, formas de pago y atención a escuelas en Didactik School.",
    path: "/faq",
  } satisfies PageSeo,
  hero: {
    eyebrow: "Ayuda",
    title: "Preguntas frecuentes",
    subtitle: "Todo lo que necesitas saber antes de cotizar con nosotros.",
  },
  cta: {
    title: "¿No encontraste tu respuesta?",
    subtitle: "Escríbenos directamente y te respondemos a la brevedad.",
    primaryCta: { label: "Ir a contacto", href: "/contacto" },
  },
};
