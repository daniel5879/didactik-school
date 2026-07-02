/**
 * company.ts
 * -----------------------------------------------------------------------
 * Única fuente de verdad para los datos de la empresa.
 * Toda la página debe consumir esta información — nunca escribir
 * teléfonos, correos, direcciones o links sociales directamente
 * dentro de un componente.
 * -----------------------------------------------------------------------
 */

export const company = {
  name: "Didactik School",
  legalName: "Didactik School",
  tagline: "Lo mejor para tu educación",
  description:
    "Material didáctico, libros educativos y recursos de aprendizaje para papás, escuelas, guarderías y especialistas en educación infantil.",

  phone: "+52 55 0000 0000",
  phoneDisplay: "55 0000 0000",
  whatsapp: "5215500000000",
  email: "contacto@didactikschool.com",

  address: {
    street: "Av. Ejemplo 123, Col. Centro",
    city: "Ciudad de México",
    state: "CDMX",
    zip: "00000",
    country: "México",
  },

  maps: "https://maps.google.com/?q=Didactik+School+CDMX",

  schedule: [
    { days: "Lunes a Viernes", hours: "9:00 - 18:00" },
    { days: "Sábado", hours: "9:00 - 14:00" },
  ],

  social: {
    facebook: "https://facebook.com/didactikschool",
    instagram: "https://instagram.com/didactikschool",
    tiktok: "https://tiktok.com/@didactikschool",
  },
} as const;

export type Company = typeof company;
