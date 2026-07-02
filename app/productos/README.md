# Fase 3 — Ecommerce (no implementada todavía)

Esta carpeta queda preparada para las rutas de producto, pero **deliberadamente
no contiene page.tsx todavía** — así no se expone ninguna ruta /productos
funcional antes de tiempo.

Estructura planeada:

```
app/productos/
  page.tsx                  → listado completo de productos (con filtros)
  [categoria]/
    page.tsx                → productos filtrados por categoría
  [slug]/
    page.tsx                → ficha de producto individual
```

## Lo que ya existe, listo para usarse:

- **Tipo `Product`** en `types/index.ts` (id, slug, name, description, price,
  image, categoryId, inStock).
- **`content/categories.ts`** ya tiene el catálogo completo de 14 categorías
  con `id` — la misma clave que usará `Product.categoryId`.
- **`SearchBar`** (`components/shared/SearchBar.tsx`) ya redirige a
  `/categorias?q=...` — cuando exista `/productos`, solo hay que cambiar el
  destino del redirect a `/productos?q=...`.
- **`CategoryCard`** (botón "Explorar") ya usa `href` desde el content —
  cuando existan las páginas de categoría, solo hay que actualizar
  `href: "#"` por `href: "/productos/{id}"` en `content/categories.ts`.
- **`EmptyState`** ya está listo para usarse como estado "sin resultados" en
  el buscador de productos.

## Al implementar la Fase 3

1. Crear `content/products.ts` con los productos reales.
2. Crear `app/productos/page.tsx`, `app/productos/[categoria]/page.tsx` y
   `app/productos/[slug]/page.tsx`.
3. Actualizar `content/categories.ts`: cambiar los `href: "#"` a rutas reales.
4. Actualizar `SearchBar.tsx`: cambiar el redirect a `/productos?q=...`.
