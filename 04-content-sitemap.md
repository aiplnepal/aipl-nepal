# Content and Sitemap

Six pages plus product detail pages. Use this copy as final content, not placeholder. Expand lightly where marked, keeping the same tone: credible, rooted, premium, never salesy or exaggerated.

---

## 1. Home (`/`)

**Nav**: Logo "AIPL", links Home, About, Products, Quality and Impact, Resources, Contact, gold "Enquire Now" button.

**Hero**
- Eyebrow: "AGRICULTURAL INVESTMENT PVT. LTD."
- Headline: "Growing Nepal, One Field at a Time"
- Subtext: "Fertilizers, bio pesticides, and crop care products trusted by farmers and dealers across Nepal."
- CTA: "Explore Products" (links to `/products`), secondary link "Talk to Us" (links to `/contact`)

**Trust strip** (three short stat style lines, no invented numbers, use qualitative claims)
- "Made for Nepal's soil and seasons"
- "Backed by farmer feedback"
- "Nationwide dealer network"

**Product highlights**: grid of all five products (icon, name, one line tagline), each card links to its detail page.

**Why AIPL section**: three columns, reuse the "why it matters" logic from the pitch deck.
- First Impression: "Dealers and institutional buyers judge product quality by how a brand presents itself, before they ever open a bag."
- Buyer Trust: "Agri inputs affect a whole season's harvest. We stand behind every product we sell."
- Wider Reach: "From our dealer network to your doorstep, wherever you farm in Nepal."

**Testimonial row**: 2 to 3 placeholder farmer or dealer quotes, structure the data through `lib/data/testimonials.ts` (see architecture doc), mark clearly in code comments that these are placeholder quotes pending real client supplied testimonials.

**CTA banner**: "Ready to grow with AIPL, get in touch with our team or find a dealer near you." Buttons: "Contact Us", "Find a Dealer".

**Footer**: logo, short tagline, nav links, social icons (Facebook, Instagram, YouTube, placeholder hrefs), contact email and phone placeholders, copyright line.

---

## 2. About AIPL (`/about`)

- Eyebrow: "OUR STORY"
- Headline: "Built on Nepal's Soil"
- Body (expand to 150 to 200 words): AIPL is an agricultural investment company producing and supplying fertilizers, bio pesticides, and crop care solutions for Nepal's farmers. The company was founded to close the gap between imported, generic agri inputs and products actually suited to Nepal's soil types, crops, and climate. AIPL invests in research, sourcing, and quality control so that every product on the shelf earns a farmer's trust season after season.
- Mission statement (short, one or two sentences): "To help every farmer in Nepal grow healthier crops and higher yields, through products built for local conditions and backed by real support."
- Values section, three or four short value cards: Quality First, Farmer First, Rooted in Nepal, Long Term Partnership. One sentence each.
- Team or leadership section: structure as optional, if the client has not supplied bios, ship a simple "Meet the People Behind AIPL" section with placeholder name and role fields driven by `lib/data` so it is trivial to fill in real names later.

---

## 3. Products index (`/products`)

- Eyebrow: "OUR PRODUCT LINE"
- Headline: "A Portfolio Built for the Field"
- Grid of all five products, larger cards than the homepage version, each with icon, name, one line tagline, "View Details" button
- Short intro paragraph above the grid: "Every AIPL product is developed and tested for Nepal's soil, crops, and climate, from nutrition to protection to recovery."

### Product data shape (`content/products/*.ts`)

Each product needs this shape, feed it through `lib/data/products.ts`:

```ts
{
  slug: "fertilizer",
  name: "Fertilizer",
  tagline: "Balanced nutrition for stronger yields",
  description: "A balanced blend of essential nutrients designed to support healthy root development, stronger stems, and higher yields across Nepal's major crop types. Suitable for use throughout the growing season as part of a regular feeding schedule.",
  useCases: ["Cereal crops", "Vegetable farming", "Seasonal planting"],
  icon: "flask", // lucide-react icon name
  colorAccent: "forest" // or "brown", used for the icon chip
}
```

Repeat with tailored copy for all five:

1. **Fertilizer**, icon `flask`, "Balanced nutrition for stronger yields", description as above
2. **Bio Pesticide**, icon `shield`, "Natural protection against crop pests", description: "A bio based pest control solution that protects crops from common pests without harsh chemical residue, safe for continued use through the growing cycle and gentler on beneficial insects and soil life."
3. **Soil Stimulant**, icon `sprout`, "Revives and enriches soil health", description: "Improves soil structure and microbial activity over time, helping tired or overworked soil recover its fertility for future seasons. Recommended before planting or after a heavy harvest cycle."
4. **Plant Booster**, icon `leaf`, "Accelerates healthy plant growth", description: "A targeted growth booster that supports faster, healthier development during key growth stages, helping plants establish strong roots and reach maturity with greater resilience."
5. **Toxic Remover**, icon `recycle`, "Clears harmful residue from soil", description: "Helps break down and clear harmful chemical residue that builds up in soil over repeated growing cycles, supporting a cleaner foundation for the next planting season."

### Product detail page (`/products/[slug]`)

- Hero band, product name, tagline, large icon treatment (placeholder for real photography)
- Full description
- "Best for" section listing use cases as a tag list
- "How to use" section, expand with two or three general usage guidance bullets per product, written generically since exact dosage or application specifics were not provided by the client, mark clearly for the client to confirm and refine before launch
- Related products row, the other four products, using the same `getAllProducts()` data function
- CTA to contact or dealer locator

---

## 4. Quality and Impact (`/quality`)

- Eyebrow: "COMMITTED TO BETTER FARMING"
- Headline: "Quality and Impact"
- Intro: "Committed to healthier soil and stronger harvests across Nepal."
- Four pillar cards, same as the pitch deck: Quality tested formulations, Soil friendly and sustainable ingredients, Backed by farmer feedback, Nationwide dealer network. Expand each into two or three sentences.
- Optional "Our process" section, three or four steps from research to farm, styled the same as the process timeline pattern used in the pitch deck (numbered icon circles connected by a line)
- Optional certifications or standards row, structure as a data driven list so real certification logos or names can be dropped in later without a redesign

---

## 5. Resources (`/resources`)

Static for phase 1, no CMS. Structure as a simple list of articles or guides driven by `lib/data/resources.ts`, so a real CMS or MDX pipeline can replace it later without changing the page component.

- Eyebrow: "GUIDES AND ADVICE"
- Headline: "Resources for Better Growing"
- Three to five starter articles with title, short excerpt, and a placeholder "Read More" state (can 404 gracefully or link to a simple static content page), suggested topics: "When to Apply Fertilizer for Maximum Yield", "Recognizing Common Crop Pests Early", "Preparing Your Soil Before Planting Season", "Understanding Your Soil's Health", "Choosing the Right Products for Your Crop"

---

## 6. Contact and Dealers (`/contact`)

- Eyebrow: "GET IN TOUCH"
- Headline: "Let's Grow Together"
- Contact form (react-hook-form plus zod, per architecture doc): Name, Phone, Email, Message, Inquiry Type (dropdown: General, Dealer Partnership, Bulk Order, Product Question), submits to `app/api/contact/route.ts`
- Contact details block: phone, email, address placeholders, business hours
- Dealer locator section: a simple list or map style layout of dealer locations, driven by `lib/data/dealers.ts`, seed with two or three placeholder Nepal locations (Kathmandu, Pokhara, Biratnagar) clearly marked as placeholder pending the client's actual dealer list
- Social links repeated here as well

---

## Global content notes

- Every placeholder value (dealer addresses, phone numbers, testimonial names, team bios, social URLs) must be clearly marked with a code comment such as `// PLACEHOLDER: confirm with AIPL before launch`, so nothing fake ships to production by accident.
- Do not invent specific statistics (farmer counts, years in business, tonnage sold), the client has not supplied these. Use qualitative language instead, as shown above.
