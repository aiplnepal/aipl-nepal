# Project Brief

## Client

AIPL, Agricultural Investment Pvt. Ltd., a Nepal based company producing and supplying agricultural inputs. AIPL wants a premium, top tier website that reflects the quality of its products and its ambitions, not a generic template.

## Products (five lines, final)

1. **Fertilizer**, balanced nutrition for stronger yields
2. **Bio Pesticide**, natural protection against crop pests
3. **Soil Stimulant**, revives and enriches soil health
4. **Plant Booster**, accelerates healthy plant growth
5. **Toxic Remover**, clears harmful residue from soil

Each product needs: a name, a one line tagline, a longer description (60 to 100 words), suggested use cases or crop types, and a placeholder for a product image (see `04-content-sitemap.md` for the exact shape).

## Audience

- Farmers across Nepal, browsing on mobile, often on slower connections
- Dealers and distributors evaluating AIPL as a supplier
- Institutional or bulk buyers researching credibility before contact

Design and copy should read as credible and rooted, not flashy. Performance on low end phones and slow networks matters as much as visual polish.

## Phase 1 scope (this build)

- Full marketing website: Home, About, Products (index and detail pages), Quality and Impact, Resources, Contact and Dealers
- Contact and dealer enquiry forms that work (send email via a serverless function or a form service such as Formspree or Resend, client can swap the endpoint later)
- Fully responsive, fast, accessible, SEO ready (metadata, sitemap.xml, robots.txt, OpenGraph tags)
- Social links wired to AIPL's Facebook, Instagram, and YouTube (use placeholder URLs, `#social-facebook` etc., client will supply real links)

## Explicitly out of scope for phase 1, but must not be blocked by phase 1's architecture

- The marketplace ordering app (Daraz style)
- Dealer or farmer login and accounts
- Order placement, cart, and payment
- A real backend, database, or CMS admin panel
- Multi language (Nepali/English toggle)

Design the data layer and routing so every item above can be added later without restructuring the site that ships in phase 1. See `02-tech-architecture.md`.

## Brand

Colors, type, and tone must match the pitch deck already presented to and approved in direction by the client: forest green, earth brown, white, warm gold accent, Cambria style serif headings paired with clean sans body text. Full detail in `03-design-system.md`.

## Success criteria

- Client can look at the live site and recognize the same design language shown in the pitch deck
- Lighthouse score of 90+ on Performance, Accessibility, Best Practices, and SEO on the home page
- Site works and looks correct on a mid range Android phone on a throttled connection
- Adding a sixth product later takes editing one content file, not touching component code
