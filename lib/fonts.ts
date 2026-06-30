/**
 * lib/fonts.ts
 * Tipografía centralizada. No importar fuentes en otros archivos.
 *
 * Heading: Sora      -> geométrica, moderna, transmite seriedad sin ser fría.
 * Body:    Inter      -> alta legibilidad, estándar en interfaces profesionales.
 */

import { Sora, Inter } from "next/font/google";

export const fontHeading = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const fontBody = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
