# Didactik School — Sitio Web Oficial

Homepage de Didactik School construida con Next.js 15 (App Router), React 19,
TypeScript, Tailwind CSS, shadcn/ui (convención) y Framer Motion.

## Requisitos

- Node.js 18.18+ (recomendado 20 LTS)

## Instalación y arranque

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub/GitLab/Bitbucket.
2. Importa el repo en [vercel.com/new](https://vercel.com/new).
3. Vercel detecta Next.js automáticamente — no se requiere configuración
   adicional. Build command: `next build` (default). Output: `.next` (default).

## Cómo editar el sitio (sin tocar componentes)

Toda la información editable vive en `/content`:

| Archivo | Qué controla |
|---|---|
| `content/company.ts` | Teléfono, WhatsApp, correo, dirección, horario, redes sociales |
| `content/seo.ts` | Title, description, keywords, OpenGraph, Twitter Cards |
| `content/navigation.ts` | Links del navbar y CTA |
| `content/home.ts` | Hero, barra de confianza, "¿Quién eres?", "¿Por qué Didactik?", CTA final |
| `content/categories.ts` | Tarjetas de categorías |
| `content/testimonials.ts` | Testimonios de clientes |

Los colores de marca viven en un único archivo: `lib/theme.ts` (consumido
directamente por `tailwind.config.ts`). Si necesitas ajustar un tono, cámbialo
solo ahí.

## Reemplazar imágenes

Todas las imágenes actuales en `/public/images` son **placeholders
generados**, no fotos descargadas de internet. Reemplázalas manteniendo el
mismo nombre de archivo y proporción aproximada:

```
public/images/
  hero/hero-illustration.png      (cuadrada, ideal 900x900+, fondo transparente)
  categories/*.jpg                (800x600, una por categoría)
  testimonials/*.jpg              (200x200, foto de perfil cuadrada)
  about/why-didactik.jpg          (1000x750)
  og/og-cover.jpg                 (1200x630, para compartir en redes)
  logo/didactik-logo.png          (logotipo oficial, ya integrado)
```

## Arquitectura

```
app/                  Rutas (App Router), layout raíz y metadata
components/
  layout/              Navbar, Footer
  home/                Secciones del homepage (Hero, Categorías, etc.)
  ui/                  Primitivos reutilizables (Button, Badge, Container...)
  shared/              Tarjetas reutilizables (CategoryCard, TestimonialCard...)
content/               Toda la copy y datos editables (fuente única de verdad)
lib/                   theme.ts, fonts.ts, animations.ts, utils.ts
hooks/                 Hooks de cliente (useScrollPosition)
types/                 Tipos compartidos
styles/                globals.css
public/images/         Assets estáticos (placeholders organizados por sección)
```

## Próximas fases (estructura ya preparada, no implementadas)

- Ecommerce / carrito / checkout
- Dashboard administrativo
- Autenticación (login)
- Base de datos / backend
