# Didactik School — Sitio Web Oficial

Sitio corporativo de Didactik School construido con Next.js 15 (App Router),
React 19, TypeScript, Tailwind CSS, shadcn/ui (convención) y Framer Motion.

**Fase 1** (Homepage) — aprobada y en producción.
**Fase 2** (Sitio corporativo completo) — 8 páginas nuevas, componentes
reutilizables, búsqueda global, breadcrumbs y SEO por página.
**Fase 3** (Ecommerce) — estructura preparada en `app/productos/`, no
implementada todavía (ver `app/productos/README.md`).

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

## Páginas del sitio

| Ruta | Descripción |
|---|---|
| `/` | Homepage |
| `/categorias` | Las 14 categorías del catálogo (sin productos todavía) |
| `/escuelas` | Landing para escuelas, comités y programas tipo LEEN |
| `/papas` | Landing para papás |
| `/psicologos` | Landing para psicólogos |
| `/guarderias` | Landing para guarderías |
| `/nosotros` | Misión, experiencia, filosofía y valores |
| `/contacto` | Formulario, mapa, WhatsApp, horario y redes |
| `/faq` | Preguntas frecuentes (acordeón) |

## Cómo editar el sitio (sin tocar componentes)

Toda la información editable vive en `/content`:

| Archivo | Qué controla |
|---|---|
| `content/company.ts` | Teléfono, WhatsApp, correo, dirección, horario, redes sociales |
| `content/seo.ts` | SEO global (title, description, keywords, OpenGraph, Twitter) |
| `content/navigation.ts` | Links del navbar, footer y CTA |
| `content/home.ts` | Hero, barra de confianza, "¿Quién eres?", "¿Por qué Didactik?", CTA |
| `content/categories.ts` | Catálogo completo de 14 categorías + contenido de `/categorias` |
| `content/testimonials.ts` | Testimonios de clientes |
| `content/audiences.ts` | Contenido de `/escuelas`, `/papas`, `/psicologos`, `/guarderias` |
| `content/pages.ts` | Contenido de `/nosotros` y `/contacto` |
| `content/faq.ts` | Preguntas frecuentes |

Cada página tiene su propio objeto `seo` (title, description, path) dentro de
su archivo de contenido — se aplica automáticamente vía `lib/seo.ts`.

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
  categories/*.jpg                (800x600, 14 archivos — una por categoría)
  testimonials/*.jpg              (200x200, foto de perfil cuadrada)
  about/why-didactik.jpg          (1000x750, sección Home)
  about/equipo-didactik.jpg       (1000x750, página /nosotros)
  escuelas/hero-escuelas.jpg      (1000x750, ratio 4:3)
  papas/hero-papas.jpg            (1000x750, ratio 4:3)
  psicologos/hero-psicologos.jpg  (1000x750, ratio 4:3)
  guarderias/hero-guarderias.jpg  (1000x750, ratio 4:3)
  og/og-cover.jpg                 (1200x630, para compartir en redes)
  logo/didactik-logo.png          (logotipo oficial, ya integrado)
```

## Búsqueda global

El ícono de lupa en el navbar abre un buscador (`components/shared/SearchBar.tsx`)
que hoy redirige a `/categorias?q=...`. Está preparado para apuntar a
`/productos?q=...` en cuanto exista el catálogo real (Fase 3).

## Arquitectura

```
app/                  Rutas (App Router). Cada page.tsx exporta su metadata
                       vía lib/seo.ts y delega el contenido visual a un
                       Client Component en components/pages/ o components/home/
components/
  home/                Secciones del homepage
  pages/               Client wrappers de las páginas nuevas (Fase 2) —
                       importan su propio contenido para evitar pasar
                       componentes (íconos) como props entre Server/Client
  layout/              Navbar, Footer (renderizados en app/layout.tsx)
  shared/              Componentes reutilizables entre páginas: PageHero,
                       AudienceHero, CTASection, FAQAccordion,
                       ProcessTimeline, StatsGrid, FeatureGrid,
                       CategoryGrid, ContactCard, ContactForm, SearchBar,
                       Breadcrumbs, EmptyState, tarjetas (Category/Feature/
                       Testimonial/Audience)
  ui/                  Primitivos: Button, Badge, Container, SectionTitle,
                       SectionDivider
content/               Toda la copy y datos editables (fuente única de verdad)
lib/                   theme.ts, fonts.ts, animations.ts, utils.ts, seo.ts
hooks/                 Hooks de cliente (useScrollPosition)
types/                 Tipos compartidos (incluye tipos ya listos para
                       productos: Product)
styles/                globals.css
public/images/         Assets estáticos (placeholders organizados por sección)
```

### Por qué algunas páginas tienen un "PageBody" en `components/pages/`

Next.js no permite pasar componentes de React (como los íconos de
`lucide-react`) como props desde un Server Component hacia un Client
Component — solo datos serializables. Por eso, en páginas que usan íconos
(`/escuelas`, `/papas`, `/psicologos`, `/guarderias`, `/nosotros`), el
`page.tsx` (Server Component, dueño del `metadata`) renderiza un
`XxxPageBody` (Client Component) que importa su propio contenido
directamente — el mismo patrón que ya usaban las secciones del Home.

## Próxima fase (estructura ya preparada, no implementada)

Ver `app/productos/README.md` para el detalle de qué queda listo para
`/productos`, `/productos/[categoria]` y `/productos/[slug]`.

Pendiente además de la Fase 3:
- Carrito / checkout
- Dashboard administrativo
- Autenticación (login)
- Base de datos / backend

