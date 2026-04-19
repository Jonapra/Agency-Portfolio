# Agency Portfolio

Marketing + portfolio site for a web-design agency that builds websites for clients. The site itself is the agency's strongest sales asset — design quality and motion polish are the product demo. Treat every surface as a shippable showcase, not a template.

## Stack

- **Build:** Vite 5 (SWC), React 18.3.1, strictly TypeScript (`.tsx`, `.ts`).
- **Styling:** Tailwind v3. Configured via `tailwind.config.ts` and `postcss.config.js`. (Note: The previous Tailwind v4 CSS-first paradigm is no longer, so rely firmly on the config file for tokens).
- **Components:** shadcn-style primitives built on Radix UI. Compose via the `cn()` helper in `src/lib/utils.ts` (using `clsx` and `tailwind-merge`).
- **Icons:** `lucide-react`. No emoji icons.
- **Motion:** GSAP 3 (+ `@gsap/react` for `useGSAP`) and Framer Motion.
- **Path alias:** `@` → `/src` (configured in `vite.config.ts` and `tsconfig.json` / `tsconfig.app.json`).

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — production build
- `npm run build:dev` — Vite development build
- `npm run preview` — preview built output
- `npm run lint` — ESLint

## Design System — Single Source of Truth

**`design-system/MASTER.md` is authoritative.** Read it before writing any UI. It defines:

- Color tokens — brand scale: `ink` (dark text), `ink-2`, `ink-3`, `cream` (light bg), `cream-2`, `bone`, `signal` (accent/CTA), `signal-2`, `mute`, `mute-2`. Resolved via HSL CSS variables in `src/index.css`.
- Typography — `font-serif` (Instrument Serif), `font-sans` (Geist), `font-mono` (JetBrains Mono)
- Spacing / shadow scales
- Component specs (buttons, cards, inputs, modals)
- Overall style: **Motion-Driven**, pattern: **Portfolio Grid** (Hero → Project Grid → About → Contact)
- Anti-patterns and pre-delivery checklist

**Per-page overrides** live in `design-system/pages/[page-name].md`. If a page file exists, it **overrides** MASTER for that page. Always check `pages/` first when building a specific route.

Tokens are defined in `tailwind.config.ts`. Use Tailwind utilities (`bg-primary`, `font-heading`) — never hardcode hex or font names in JSX.

## Design Skill Routing (avoid collision)

Three design skills are installed. They cover different phases — don't invoke more than one for the same decision.

| Skill | When to invoke | What it answers |
|---|---|---|
| **`ui-ux-pro-max`** | Early / structural decisions on a **new page or section**: picking a layout pattern, color direction, font pairing, chart type, stack template. | "Which of the 67 styles / 96 palettes / 57 font pairings fits this brief?" |
| **`frontend-design`** (Anthropic) | Mid-stage implementation: turning a chosen pattern into accessible, responsive, well-structured React + Tailwind. Component architecture, a11y, layout mechanics. | "How do I build this correctly?" |
| **`emil-design-eng`** | Final polish pass: motion feel, easing curves, micro-interactions, hover/press states, timing, the last 10% that separates shipped work from demoware. | "How do I make this feel right?" |

**Rule of thumb:** Pro Max picks *what*, frontend-design builds *how*, Emil tunes *feel*. If MASTER.md or a `pages/` file has already made a structural choice, skip Pro Max and go straight to frontend-design + Emil.

Do not re-derive palettes, fonts, or layout patterns once they're fixed in the design system — those are settled. Skills are for new decisions, not re-litigating old ones.

## Component Conventions

- Put shadcn-style primitives in `src/components/ui/` as `.tsx`. Follow the existing `button.tsx` pattern: `cva` variants + `forwardRef` + `cn()`.
- Page-level / feature components go in `src/components/<feature>/`.
- Prefer `@/components/ui/...` imports (path alias) over relative.
- Hooks in their own files (e.g. `use-scroll.ts`); kebab-case filenames match shadcn convention already in the repo.
- Respect `prefers-reduced-motion` on every GSAP/Framer animation.

## Anti-Patterns (from MASTER.md — enforced)

- No emojis as icons — use `lucide-react`.
- No missing `cursor-pointer` on clickables.
- No layout-shifting hovers (avoid scale transforms that reflow siblings).
- No instant state changes — 150–300ms transitions minimum.
- No invisible focus states.
- Contrast ≥ 4.5:1.

## Pre-Delivery Checklist

Before saying a UI task is done, run through the checklist at the bottom of `design-system/MASTER.md`. In particular: 375 / 768 / 1024 / 1440 responsive check, keyboard focus visible, no horizontal scroll on mobile, reduced-motion honored.

## MCP Servers Available

`github`, `context7`, `playwright` (see `.mcp.json`). Playwright is the preferred way to verify UI changes end-to-end — don't claim a UI task is done without driving the dev server in a browser.

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- After modifying code files in this session, run `python3 -c "from graphify.watch import _rebuild_code; from pathlib import Path; _rebuild_code(Path('.'))"` to keep the graph current
