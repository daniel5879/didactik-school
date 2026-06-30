/**
 * theme.ts
 * -----------------------------------------------------------------------
 * Fuente única de verdad para la paleta de color de Didactik School.
 * Los tonos base (`*-600` para primary/secondary/accent) fueron extraídos
 * directamente del logotipo oficial mediante muestreo de color:
 *
 *   Navy  (Didacti)        -> #243084
 *   Sky blue (K)           -> #60C0F0
 *   Gold (SCHOOL / estrella)-> #D89018 / #FCD80C
 *   Red (acento del logo)  -> #E41824
 *
 * Estos tonos se refinaron en escalas completas (50-900) para garantizar
 * contraste accesible (WCAG AA) en texto, fondos y estados interactivos,
 * manteniendo fidelidad total a la identidad visual original.
 *
 * tailwind.config.ts importa este archivo directamente: nunca dupliques
 * estos valores hexadecimales en otro lugar del proyecto.
 * -----------------------------------------------------------------------
 */

export const colors = {
  // Primary — Navy (texto de marca "Didacti", elemento dominante del logo)
  primary: {
    50: "#EEF1F9",
    100: "#D4DAF0",
    200: "#A9B5E1",
    300: "#7E90D2",
    400: "#4D5FA8",
    500: "#2E3D8C",
    600: "#243084", // base extraída del logo
    700: "#1C2668",
    800: "#151C4C",
    900: "#0E1330",
  },

  // Secondary — Sky blue (letra "K" del logo)
  secondary: {
    50: "#EFF9FE",
    100: "#D6F0FC",
    200: "#ADE1FA",
    300: "#84D2F7",
    400: "#60C0F0", // base extraída del logo
    500: "#3BA8DE",
    600: "#2389BD",
    700: "#1A6A92",
    800: "#134B67",
    900: "#0C2F40",
  },

  // Accent — Gold (palabra "SCHOOL" y estrella del logo)
  accent: {
    50: "#FEFAEC",
    100: "#FCF0C7",
    200: "#FAE08F",
    300: "#F7CD57",
    400: "#F0B429", // tono refinado, uso principal en UI
    500: "#D89018", // base extraída del logo (outline)
    600: "#B5750F",
    700: "#8C5A0C",
    800: "#623F08",
    900: "#3D2705",
  },

  // Danger — Red (letra "h", mismo rojo del logo, sólo uso semántico)
  danger: {
    50: "#FDECEC",
    100: "#FAD0D2",
    400: "#E84C54",
    500: "#E41824", // base extraída del logo
    600: "#C21119",
    700: "#960D13",
  },

  // Success — Verde estándar accesible (no presente en el logo)
  success: {
    50: "#EDFBF3",
    100: "#D2F5E1",
    400: "#34C77B",
    500: "#16A34A",
    600: "#0F7C38",
  },

  // Neutrals — fondo, superficies, texto, bordes
  neutral: {
    0: "#FFFFFF",
    50: "#FAFAFB",
    100: "#F4F5F7",
    200: "#E4E6EC",
    300: "#CBCED9",
    400: "#9CA0B3",
    500: "#6B6F84",
    600: "#4D5066",
    700: "#34364A",
    800: "#1F2133",
    900: "#141521",
  },
} as const;

export const theme = {
  colors: {
    background: colors.neutral[0],
    surface: colors.neutral[50],
    surfaceAlt: colors.neutral[100],
    border: colors.neutral[200],
    text: {
      primary: colors.neutral[800],
      secondary: colors.neutral[500],
      inverted: colors.neutral[0],
    },
    primary: colors.primary[600],
    primaryHover: colors.primary[700],
    secondary: colors.secondary[400],
    secondaryHover: colors.secondary[500],
    accent: colors.accent[400],
    accentHover: colors.accent[500],
    danger: colors.danger[500],
    success: colors.success[500],
  },
} as const;

export type ThemeColors = typeof theme.colors;
