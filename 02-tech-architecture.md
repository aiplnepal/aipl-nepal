# Tech Stack and Architecture

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15, App Router, TypeScript | Server components for speed on slow connections, file based routing scales cleanly into a future portal section, one codebase can later host both the marketing site and the portal |
| Styling | Tailwind CSS v4 | Fast to build and restyle, matches the design system tokens directly |
| Components | shadcn/ui | Accessible, unstyled primitives you own the code for, easy to theme to AIPL's palette, easy to extend later for portal UI (tables, forms, auth screens) |
| Motion | Framer Motion (`motion` package) | Subtle entrance and hover animation for a premium feel, used sparingly |
| Forms | react-hook-form plus zod | Type safe validation now for the contact and dealer forms, the same schemas are reused later for portal forms (orders, registration) |
| Icons | lucide-react | Consistent with shadcn/ui, matches the icon language already used in the pitch deck |
| Images | next/image | Automatic optimization, critical for farmers on slow mobile connections |
| Hosting | Vercel | Matches the client's existing stack and hosting pattern, zero config deploys, easy to add serverless functions later for portal APIs |
| Forms backend | A single serverless route (`app/api/contact/route.ts`) calling Resend or Formspree | Works today with zero backend, swappable for a real CRM or database write later behind the same route signature |
| Analytics | Vercel Analytics plus a Google Analytics 4 stub | Feeds the digital marketing workstream already pitched to the client |

Do not introduce a database, ORM, or auth library in this phase. The architecture below exists so those can be added later without touching this phase's UI.

## Folder structure

```
app/
  (marketing)/                 route group, everything in phase 1 lives here
    page.tsx                   Home
    about/page.tsx
    products/
      page.tsx                 Products index
      [slug]/page.tsx          Product detail, driven by lib/data/products
    quality/page.tsx           Quality and Impact
    resources/page.tsx         Resources (blog style, static for now)
    contact/page.tsx           Contact and Dealers
    layout.tsx                 Shared nav and footer for the marketing site
  api/
    contact/route.ts           Serverless form handler
  layout.tsx                   Root layout, fonts, metadata defaults
  sitemap.ts
  robots.ts

components/
  ui/                          shadcn/ui primitives, generated, not hand edited
  layout/                      Navbar, Footer, MobileMenu
  sections/                    Hero, ProductGrid, TrustStrip, TestimonialRow, etc, one component per homepage/page section
  products/                    ProductCard, ProductDetailLayout

lib/
  data/                        THE SEAM, see below
    products.ts
    dealers.ts
    testimonials.ts
    resources.ts
  schemas/                     zod schemas shared by forms today and by future portal forms
    contact.ts
    dealer-enquiry.ts
  utils.ts

content/
  products/
    fertilizer.ts (or .json)
    bio-pesticide.ts
    soil-stimulant.ts
    plant-booster.ts
    toxic-remover.ts
  dealers.ts
  testimonials.ts

public/
  images/, favicon, og-image.png
```

## The data layer seam, this is what makes phase 1 agile

Every component reads data through a function, never through a direct import of a content file or a hardcoded array in the component body.

```ts
// lib/data/products.ts
import { products } from "@/content/products";
import type { Product } from "@/lib/types";

export async function getAllProducts(): Promise<Product[]> {
  // Phase 1: reads the local content array.
  // Future: replace the body of this function with a fetch to a real API
  // or a database query. Nothing that calls getAllProducts() has to change.
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return products.find((p) => p.slug === slug) ?? null;
}
```

Components and pages only ever call `getAllProducts()` or `getProductBySlug()`. When a real product database or the marketplace app's API exists, only the inside of these two functions changes. Apply the same pattern to `dealers.ts`, `testimonials.ts`, and `resources.ts`.

## Reserving space for the future portal

- Keep phase 1 entirely inside an `app/(marketing)` route group. When the portal is built, it becomes a sibling `app/(portal)` route group (for example `app/(portal)/dashboard`, `app/(portal)/orders`), sharing the same root layout, design tokens, and `lib/` utilities, with zero conflict with marketing routes.
- Add an empty `middleware.ts` at the project root with a comment marking it as the future auth guard location. Do not implement auth logic now.
- Define TypeScript types for `Product`, `Dealer`, `Testimonial` in `lib/types.ts` now, shaped the way they would realistically look coming back from a future API (`id`, `slug`, `name`, `description`, `images: string[]`, `createdAt`, and so on). This means the future backend team has a contract to build to instead of guessing.
- Contact and dealer enquiry forms validate with zod schemas in `lib/schemas/`. Reuse these exact schemas for the future portal's order or registration forms so validation logic is not duplicated or reinvented.
- Environment variables: create a `.env.example` now with placeholders for values the future portal will need (`NEXT_PUBLIC_API_URL`, `AUTH_SECRET`, `DATABASE_URL`), commented as "not used yet, reserved for the portal phase", so the eventual setup is a known, documented step rather than a surprise.

## What "agile for future integration" does NOT mean here

It does not mean building auth, a database, or an API now. It means: no component ever reaches directly into a content file, every dynamic value has one function that produces it, and route groups plus shared layout keep the marketing site and the eventual portal from becoming two separate codebases. Keep phase 1 simple and static under the hood, just accessed through the seam described above.
