# AIPL DESIGN SYSTEM

## 1. BRAND POSITIONING

AIPL (Agriculture Investment Private Limited) must visually position itself at the intersection of traditional Nepali agriculture and advanced institutional technology. The brand should not feel like a generic "farm supply store" nor a disconnected "Silicon Valley tech startup." Instead, it must communicate the gravity of a national, science-backed agricultural institution that genuinely empowers the layman farmer through initiatives like ARSD. The design should convey deep trust, scientific credibility, and robust infrastructure, assuring both local farmers and high-level institutional partners of its reliability and modern capabilities.

## 2. DESIGN KEYWORDS

- **Authoritative**
- **Scientific**
- **Grounded**
- **Authentic (Nepalese)**
- **Modern**
- **Premium**
- **Reliable**
- **Empowering**
- **Institutional**
- **Clear**

## 3. COLOR SYSTEM

Green is the accent, not the canvas. The brand relies on clean white space to feel premium and institutional, using the primary brand color strategically to guide the eye.

- **Primary:** `#39B54A` (AIPL Green)
- **Primary Hover:** `#2D923B` (Darker, accessible interaction state)
- **Primary Light:** `#EBF7EC` (Very subtle, 5-10% opacity equivalent for active states/subtle backgrounds)
- **Background:** `#FDFDFD` (Slightly warm off-white to reduce harsh screen glare)
- **Surface:** `#FFFFFF` (Pure white for cards and elevated elements)
- **Text (Headings):** `#111827` (Deep charcoal, practically black)
- **Text (Body):** `#374151` (Dark gray for high legibility)
- **Muted Text:** `#6B7280` (Medium gray for secondary information)
- **Border:** `#E5E7EB` (Subtle structural lines)
- **Success:** `#10B981`
- **Warning:** `#F59E0B`
- **Error:** `#EF4444`

## 4. TYPOGRAPHY

The typography relies on the existing Next.js `next/font` setup but refines its usage to achieve an editorial, institutional feel.

- **Primary Font (Sans-serif):** *Inter*. Used for UI elements, body copy, navigation, buttons, and technical data. Conveys modernity and clarity.
- **Secondary Font (Serif):** *Source Serif 4*. Used for large display headings (H1, H2) and blockquotes. This introduces the "institutional," established feel, grounding the modern tech aspect with traditional credibility.
- **Heading Hierarchy:**
  - H1: Serif, 4xl-6xl, tight leading (tracking-tight).
  - H2: Serif, 3xl-4xl.
  - H3: Sans-serif, xl-2xl, medium weight.
  - H4/Eyebrow: Sans-serif, text-sm, uppercase, tracking-wider, Primary color.
- **Numeric/Stat Typography:** Sans-serif, tabular-nums for data grids, large and semi-bold for impact stats.

## 5. SPACING SYSTEM

A rigorous 8pt spacing system (Tailwind defaults) to ensure a structured, rhythmic layout. Generous macro-whitespace (sections separated by `py-24` or `py-32`) to allow the content to breathe and feel premium.

## 6. BORDER RADIUS

Avoid overly bubbly or pill-shaped designs. The radius should feel structural and precise.
- **Small (Buttons, Inputs, Badges):** `4px` (`rounded` or `rounded-md`).
- **Medium (Cards, Images):** `8px` (`rounded-lg`).
- **Large (Major layout blocks):** `12px` (`rounded-xl` maximum). 
- *Anti-pattern:* Do not use `rounded-2xl` or `rounded-full` for structural containers.

## 7. SHADOWS

Shadows must be restrained, crisp, and realistic, avoiding the diffuse, blurry, overly dark shadows of older web trends.
- **Default (Cards):** `shadow-sm` (barely visible, mostly a 1px border with a soft ambient shadow).
- **Hover/Interactive:** `shadow-md` (crisp lift).
- *Anti-pattern:* No heavy colored drop-shadows or massive blurs.

## 8. BUTTON SYSTEM

- **Primary:** Solid `#39B54A` background, white text, 4px border radius. No gradients.
- **Secondary:** Transparent background, `border border-gray-300`, dark text. Hover to light gray.
- **Outline (Brand):** Transparent background, `border border-[#39B54A]`, `#39B54A` text.
- **Text/Link:** No background, bold text with an arrow icon (`Link ↗`), underlining on hover.

## 9. CARD SYSTEM

- **Products:** White surface, subtle 1px border (`border-gray-200`), crisp product photography (or structured typography if pending), clear technical hierarchy.
- **Services/Tech:** Minimalist. Icon left-aligned, clear bold title, concise description.
- **Statistics:** Large typography, no background, separated by subtle borders.
- **Resources:** Editorial card. Image top, category eyebrow, serif title, sans-serif excerpt.

## 10. NAVIGATION

- **Desktop:** Crisp, white sticky header. Bottom border of 1px gray. 
  - Left: AIPL Logo.
  - Center: Clean links (About, Products, Quality/Tech, Resources, Contact).
  - Right: Language Selector (EN / NP), CTA Button ("Join as Freelancer" or "Contact Us").
- **Mobile:** Hamburger menu opening a clean, full-width white sheet (not a floating modal). 

## 11. HERO DIRECTION

The ideal homepage hero avoids generic bright green gradients and stock tractors. 
- **Visual:** A high-quality, authentic, documentary-style photograph of a Nepali farmer holding a smartphone in a field, or a high-tech soil sensor in rich Nepali soil. 
- **Layout:** Left-aligned or center-aligned typography over a dark/muted overlay to ensure perfect text contrast, or a split 50/50 layout with white space on one side.
- **Copy:** Strong serif headline focusing on empowering the layman farmer through sustainable tech.
- **Note:** Do NOT invent statistics for the hero. Use only verified facts.

## 12. HOMEPAGE VISUAL SECTIONS (Recommended Structure)

1. **Hero:** Brand positioning and primary ARSD message.
2. **Credibility Strip:** Registration/Certification logos [CLIENT VERIFICATION REQUIRED].
3. **About / The ARSD Mission:** Brief institutional overview.
4. **Technology & SFMS:** Highlighting the marriage of IoT/Smart Farming with traditional agriculture.
5. **Core Products:** Grid of top bio-fertilizers and bio-pesticides.
6. **Farmer Empowerment (Reach):** 7 provinces, 77 districts, 6,743 wards [CLIENT VERIFICATION REQUIRED].
7. **Resources/Education:** Latest guides for farmers.
8. **CTA:** Contact or Freelancer application.
9. **Footer:** Comprehensive institutional footer.

## 13. ABOUT PAGE

Editorial storytelling structure.
- **The Institution:** History, founding date (2020), and official registration.
- **The Vision:** Transforming the perception of the Nepali farmer.
- **The ARSD Program:** Detailed explanation of the nationwide campaign.
- **Leadership/Team:** Clean grid (pending real client data).

## 14. PRODUCTS PAGE

A structured, scientific catalog. 
- Avoid looking like a cheap e-commerce store. 
- Categorized clearly (Fertilizers, Liquid Fertilizers, Stimulants, Pesticides, Compost).
- Focus on the biological/scientific components (Rhizobium, PSB, etc.).

## 15. PRODUCT DETAIL PAGE

Technical, clean, and highly structured.
- **Header:** Product name, type, and primary benefit.
- **Body:** Split layout. Left: Description and active components. Right: Application specs (pending) and IoT soil monitoring integration.
- **Trust:** Any specific environmental or safety claims (Note: Chemical residue removal claims [CLIENT VERIFICATION REQUIRED]).

## 16. QUALITY & IMPACT PAGE (Tech & Services)

This page must sell the "Institution" and "Technology".
- **SFMS & IoT:** Detailed breakdown of Smart Irrigation, Drones, Sensors.
- **Soil Health Card:** Explanation of this pioneering scheme [CLIENT VERIFICATION REQUIRED].
- **Phytopathology:** The laboratory/scientific backing of AIPL.
- **Certifications:** Documented proof of government compliance [CLIENT VERIFICATION REQUIRED].

## 17. RESOURCES

Editorial UX. Looks like a serious publication or agricultural extension portal.
- Large, readable typography (Source Serif 4 for titles, Inter for body).
- Narrow line widths (max `65ch`) for optimal reading.

## 18. CAREER / FREELANCER

A dedicated page for the massive hiring initiative [CLIENT VERIFICATION REQUIRED].
- **Hero:** "Empowering 6,743 Wards Across Nepal".
- **Content:** Explanation of the market management freelancer role.
- **Form:** Clean, multi-step or well-organized application form requiring specific ward/district selection.

## 19. CONTACT

Professional and structured.
- **Locations:** Clear display of Lalitpur and Kathmandu addresses [CLIENT VERIFICATION REQUIRED].
- **Communications:** Phone/Email (Pending).
- **Dealer Locator:** Map or cascading dropdown interface (Pending real data).

## 20. IMAGE DIRECTION

Photography must feel authentic, documentary, and local.
- **Prioritize:** Authentic Nepalese farmers, specific Nepali terrain (Himalayan to Terai), real soil, agricultural tech (sensors in dirt), macro shots of crops.
- **Avoid:** Generic western corporate agriculture, overly glossy stock photos, obvious AI-generated images with artifacts. 

## 21. ICONOGRAPHY

Use `lucide-react`.
- **Style:** Consistent 2px stroke width. 
- **Usage:** Used as structural wayfinding elements, not massive decorative illustrations. Keep them small and precise (`w-5 h-5` or `w-6 h-6`).

## 22. MOTION

Premium and subtle. 
- **Scroll Reveals:** Gentle `opacity-0 y-4` to `opacity-100 y-0` fade-ups on scroll (using Framer Motion).
- **Interactions:** Subtle color transitions on hover. No bouncing, no heavy parallax, no continuous spinning elements.

## 23. RESPONSIVE DESIGN

- **Mobile:** 1-column layouts, touch-friendly tap targets (min 44px), sticky bottom CTAs where appropriate.
- **Tablet:** 2-column grids for products/services.
- **Desktop:** Max-width containers (`max-w-7xl`), multi-column grids, sophisticated whitespace.

## 24. ACCESSIBILITY

- **Contrast:** Ensure `#39B54A` passes WCAG AA against white backgrounds (use the darker `#2D923B` for text/icons if necessary).
- **Keyboard:** Visible focus rings (`focus-visible:ring-2 focus-visible:ring-forest`).
- **Semantic HTML:** Proper use of `<section>`, `<article>`, `<nav>`, and sequential heading hierarchies.

## 25. DESIGN ANTI-PATTERNS (DO NOT DO)

- ❌ **No heavy glassmorphism:** Avoid massive blurred background panels; they conflict with the grounded, earthy agricultural vibe.
- ❌ **No full-page green backgrounds:** Green is an accent. White/off-white is the canvas.
- ❌ **No generic rounded blobs:** Keep shapes structured and geometric.
- ❌ **No inventing facts:** Do NOT publish unverified claims, fake stats, or fake testimonials.
- ❌ **No overly playful UI:** Avoid childish illustrations or bouncy animations. This is a serious B2B/B2C agricultural institution.

## 26. PAGE-BY-PAGE DESIGN SUMMARY

| Page | Purpose | Main Visual Idea | Primary CTA |
|---|---|---|---|
| **Home** | Brand introduction & routing | Tech meets Nepali agriculture (Authentic Hero) | Explore Products / Apply as Freelancer |
| **About** | History, Mission, ARSD | Editorial storytelling, institutional history | Contact Us |
| **Products** | Scientific catalog | Clean grid, technical focus, biological icons | View Details |
| **Product Detail** | Deep technical breakdown | Split layout: Tech specs vs Practical application | Find a Dealer |
| **Quality/Tech** | Prove SFMS, IoT, and Lab capabilities | Data-focused, infographics, sensor imagery | Request Soil Testing (Contact) |
| **Resources** | Education for farmers | Premium editorial blog layout | Read Article |
| **Career** | Ward-level freelancer recruitment | Empowering imagery, clear interactive form | Submit Application |
| **Contact** | Support and location access | Clean grid of addresses, functional form | Send Message |
