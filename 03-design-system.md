# Design System

This must visually match the pitch deck already shown to and approved in direction by the client. Do not deviate from this palette or type pairing.

## Colors

Define these as CSS variables in `globals.css` and as Tailwind theme tokens, do not hardcode hex values in components.

| Token | Hex | Use |
|---|---|---|
| `--color-forest` | `#1E4620` | Primary, nav, headings, primary buttons, dark section backgrounds |
| `--color-forest-dark` | `#132F16` | Darkest sections, hero overlays, footer |
| `--color-brown` | `#6B4423` | Secondary accent, section headers on light backgrounds, icon chips |
| `--color-cream` | `#F0EBE0` | Soft light section backgrounds, card fills on dark sections |
| `--color-white` | `#FFFFFF` | Primary light background, cards |
| `--color-gold` | `#B08D57` | Sharp accent, CTA buttons, eyebrow labels, small highlights only, never a large fill |
| `--color-ink` | `#2A2A22` | Body text on light backgrounds |
| `--color-muted` | `#746F63` | Secondary and caption text |

Usage ratio, forest green and white dominate, brown and cream are supporting, gold is a sharp accent used sparingly (buttons, small labels, underlines), never as a large background.

## Typography

- Headings: a serif with a rooted, established feel. Use `Cambria` as the safe system fallback, or if the project setup allows a webfont, a similar serif such as `Source Serif 4` or `Lora`.
- Body: a clean sans, `Calibri` as safe fallback, or `Inter` if a webfont is set up.
- Scale: H1 40 to 56px bold, H2 28 to 36px bold, H3 20 to 24px bold, body 16 to 18px, small or caption 13 to 14px.
- Line height: 1.5 for body text, 1.15 to 1.25 for headings.

## Spacing and layout

- Base spacing unit 4px, use Tailwind's default scale
- Section vertical padding, 80 to 120px on desktop, 48 to 64px on mobile
- Max content width, 1280px, centered, with 24px side padding on mobile
- Card corner radius, 12 to 16px, consistent across the site
- Generous white space, do not cram sections, this reads as premium

## Motion (Framer Motion)

- Section entrances: fade up 16 to 24px, 400 to 600ms, ease out, triggered on scroll into view, once only
- Hover states: buttons and cards lift 2 to 4px with a soft shadow increase, 150 to 200ms
- Do not animate on every scroll repeat, do not use bouncy or elastic easing, the brand tone is trusted and rooted, not playful

## Visual motif

Repeat one motif across the whole site: an icon inside a solid colored circle (forest green or brown), exactly as used in the pitch deck for products and services. Do not use accent stripes, side borders, or gradient bars anywhere, these read as generic template filler.

## Component notes

- **Navbar**: forest green background, white text and logo, gold accent on the primary CTA button ("Enquire Now" or similar), mobile hamburger menu using a shadcn/ui `Sheet`
- **Buttons**: primary button, gold fill with dark forest text, or forest fill with white text for secondary emphasis. Never a plain gray or default blue button
- **Product cards**: white or cream background, icon or image at top, name, one line tagline, a "View Details" link styled as a small pill button in brown or forest
- **Hero sections**: dark forest or forest dark background, large serif headline, italic supporting line, one primary CTA
- **Forms**: clean white background, labeled fields, forest green focus rings, gold submit button, inline validation messages in a clear error color that still fits the palette (a muted terracotta, not a jarring red)

## Imagery

Real product photography is not yet available. Use tasteful placeholder treatment: solid color blocks in the brand palette with a large centered icon (lucide-react), the same way the pitch deck represented products. Structure image slots in the code (`next/image` with defined `src`, `alt`, dimensions) so swapping in real photos later is a one line change per product, not a redesign.
