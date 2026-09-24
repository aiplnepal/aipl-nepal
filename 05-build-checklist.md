# Build Checklist

Work through these phases in order. After each phase, run `npm run lint` and `npm run build`, fix errors, then give a two or three line summary before moving to the next phase. Do not skip ahead.

## Phase 0, Setup

- [ ] `create-next-app` with TypeScript, Tailwind, App Router, `src/` directory off
- [ ] Install `shadcn/ui`, initialize, set the theme colors from `03-design-system.md` in `globals.css` and `tailwind.config`
- [ ] Add core shadcn/ui components needed: `button`, `card`, `sheet`, `navigation-menu`, `form`, `input`, `textarea`, `select`, `dialog`, `badge`, `separator`
- [ ] Install `framer-motion` (or `motion`), `react-hook-form`, `zod`, `@hookform/resolvers`, `lucide-react`
- [ ] Set up `lib/types.ts` with `Product`, `Dealer`, `Testimonial`, `Resource` types per the architecture doc
- [ ] Create the `.env.example` with the reserved future portal variables, commented as unused
- [ ] Create an empty `middleware.ts` with a comment marking it as the future auth guard location
- [ ] Set up fonts (Cambria/serif fallback plus Calibri/sans fallback, or the webfont equivalents) in root layout

## Phase 1, Layout and data layer

- [ ] Build `lib/data/products.ts`, `dealers.ts`, `testimonials.ts`, `resources.ts` and their matching `content/` files, fully populated per `04-content-sitemap.md`
- [ ] Build `lib/schemas/contact.ts` and `dealer-enquiry.ts` with zod
- [ ] Build shared layout: `Navbar` (with mobile `Sheet` menu), `Footer`
- [ ] Confirm layout renders correctly at 375px, 768px, 1280px, 1536px before moving on

## Phase 2, Home page

- [ ] Hero section
- [ ] Trust strip
- [ ] Product highlights grid (reads from `getAllProducts()`)
- [ ] Why AIPL three column section
- [ ] Testimonial row (reads from `getTestimonials()`)
- [ ] CTA banner
- [ ] Scroll entrance motion per the design system, subtle, once only

## Phase 3, Products pages

- [ ] Products index page
- [ ] Product detail page template, dynamic route `[slug]`, `generateStaticParams` from `getAllProducts()`
- [ ] Related products row
- [ ] Verify all five products render correctly through the dynamic route, not five separate hardcoded pages

## Phase 4, About, Quality, Resources

- [ ] About page
- [ ] Quality and Impact page
- [ ] Resources index page (data driven, no CMS)

## Phase 5, Contact and Dealers

- [ ] Contact form, client side validation via zod, submits to `app/api/contact/route.ts`
- [ ] `app/api/contact/route.ts`, validates with the same zod schema server side, sends via Resend or Formspree (use an environment variable for the API key, do not hardcode it)
- [ ] Dealer locator section, reads from `getDealers()`
- [ ] Confirm form shows success and error states clearly

## Phase 6, SEO, performance, and polish

- [ ] Metadata API set per page (title, description, OpenGraph image)
- [ ] `app/sitemap.ts` and `app/robots.ts`
- [ ] `next/image` used everywhere images appear, with real width, height, and alt text
- [ ] Run Lighthouse locally, target 90+ across Performance, Accessibility, Best Practices, SEO on the home page, fix what is flagged
- [ ] Full pass on copy, no lorem ipsum, no unmarked placeholder content left in
- [ ] Cross check every page against `03-design-system.md`, colors, type, spacing, motion all consistent

## Phase 7, Deploy

- [ ] Push to GitHub
- [ ] Deploy to Vercel, set environment variables for the contact form's email service
- [ ] Verify the live URL on an actual phone, not just desktop dev tools
- [ ] Share the preview link back for client review before pointing the final domain at it

## Definition of done for phase 1

The client can browse the whole site on a phone or desktop, everything in `04-content-sitemap.md` is present and functioning, the form actually delivers an email, the visual design matches the approved pitch deck direction, and a future engineer could add a sixth product or start building the portal without needing to refactor what phase 1 shipped.
