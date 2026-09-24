# AIPL Website, Build Instructions for Claude Code

You are building the marketing website for AIPL (Agricultural Investment Pvt. Ltd.), a Nepal based agri input company. This is a frontend only build for now, but it must be architected so a future portal (dealer login, marketplace ordering, order tracking) can be bolted on without a rewrite.

Read these files in this exact order before writing any code:

1. `01-project-brief.md`, who the client is, what they asked for, tone and goals
2. `02-tech-architecture.md`, the stack, folder structure, and the data layer pattern that keeps this frontend only build agile for future integration
3. `03-design-system.md`, colors, type, spacing, motion, component style
4. `04-content-sitemap.md`, every page, its sections, and the actual content or content shape to use
5. `05-build-checklist.md`, the order to build in and what "done" looks like

## Non negotiable rules

- Follow `02-tech-architecture.md` exactly for the data layer. Every piece of dynamic content (products, testimonials, dealer locations, form submissions) must be read through a function in `lib/data/*`, never imported or hardcoded directly into a component. This is the seam that lets a future API or database replace static content without touching UI code.
- Follow `03-design-system.md` exactly for colors, fonts, and spacing. Do not invent a new palette. This site's look must match the pitch deck already shown to the client: forest green, earth brown, white, warm gold accent.
- Do not build a backend, database, auth, or CMS in this phase. Stub the seams (see architecture doc) but keep the actual implementation static, content as code.
- Every page needs real, finished AIPL relevant copy, not placeholder or lorem ipsum. Use `04-content-sitemap.md` as the source of truth and extend it sensibly where it says "expand".
- Mobile first, responsive at 375px, 768px, 1280px, 1536px minimum.
- Ship working code after each phase in `05-build-checklist.md`, do not attempt the whole site in one giant pass.
- Run `npm run build` and `npm run lint` before considering a phase complete. Fix all errors before moving on.

## Working style

- Work in small, verifiable phases per `05-build-checklist.md`. Summarize what changed after each phase in two or three lines, then continue.
- If Tailwind, Next.js, or shadcn/ui APIs are uncertain, check current docs (via an MCP docs tool if available, such as Context7) rather than guessing from memory. Framework APIs change between versions.
- Prefer editing and composing existing shadcn/ui primitives over writing bespoke components from scratch.
- Keep components small and single purpose. A page file should mostly compose section components, not contain raw markup for the whole page.

## Recommended Claude Code setup before you start

Add these once at the start of the session, they meaningfully speed up and improve this build:

- **shadcn MCP server** or the `shadcn` CLI, for pulling accessible, pre styled primitives (`npx shadcn@latest add button card sheet navigation-menu form dialog badge separator`) instead of hand rolling them
- **Context7 MCP** (or equivalent docs MCP), for pulling current Next.js App Router, Tailwind v4, and Framer Motion API references instead of relying on training data, since these libraries move fast
- **Playwright MCP**, for taking real browser screenshots of each page at the three breakpoints above as a visual QA step, the same way you would review a rendered design
- If a Vercel MCP or CLI is available, use it at the end for the actual deployment step instead of manual dashboard clicks

If none of these are available, proceed with plain Claude Code tools, they are conveniences, not requirements.
