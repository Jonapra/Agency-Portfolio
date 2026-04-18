# Graph Report - .  (2026-04-18)

## Corpus Check
- Corpus is ~3,033 words - fits in a single context window. You may not need a graph.

## Summary
- 86 nodes · 95 edges · 14 communities detected
- Extraction: 80% EXTRACTED · 20% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Stack & Motion Libraries|Stack & Motion Libraries]]
- [[_COMMUNITY_Design System & Rules|Design System & Rules]]
- [[_COMMUNITY_Component Specs & Colors|Component Specs & Colors]]
- [[_COMMUNITY_Build Config & Tooling|Build Config & Tooling]]
- [[_COMMUNITY_Favicon Brand Identity|Favicon Brand Identity]]
- [[_COMMUNITY_SVG Icons & Social|SVG Icons & Social]]
- [[_COMMUNITY_shadcn UI Primitives|shadcn UI Primitives]]
- [[_COMMUNITY_App Shell|App Shell]]
- [[_COMMUNITY_Hello Component|Hello Component]]
- [[_COMMUNITY_cn() Utility|cn() Utility]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Vite Config|Vite Config]]
- [[_COMMUNITY_Entry Point|Entry Point]]
- [[_COMMUNITY_Spacing Tokens|Spacing Tokens]]

## God Nodes (most connected - your core abstractions)
1. `Design System (MASTER.md)` - 10 edges
2. `Agency Portfolio Project` - 8 edges
3. `Color Palette Tokens` - 7 edges
4. `Favicon SVG Icon` - 7 edges
5. `icons.svg SVG Sprite Sheet` - 7 edges
6. `Graph Report (2026-04-18)` - 6 edges
7. `GSAP 3 Animation Library` - 4 edges
8. `Framer Motion` - 4 edges
9. `shadcn-style UI Primitives` - 4 edges
10. `Vite + React Template` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Graph Community 2 (utils.ts, cn())` --semantically_similar_to--> `cn() Helper Utility`  [INFERRED] [semantically similar]
  graphify-out/GRAPH_REPORT.md → CLAUDE.md
- `prefers-reduced-motion Accessibility Rule` --semantically_similar_to--> `Accessibility Rules (contrast 4.5:1, focus states)`  [INFERRED] [semantically similar]
  CLAUDE.md → design-system/MASTER.md
- `icons.svg SVG Sprite Sheet` --rationale_for--> `Design System MASTER`  [INFERRED]
  public/icons.svg → design-system/MASTER.md
- `Anti-Patterns (MASTER)` --semantically_similar_to--> `Anti-Patterns (Enforced Rules)`  [INFERRED] [semantically similar]
  design-system/MASTER.md → CLAUDE.md
- `Pre-Delivery Checklist (MASTER)` --semantically_similar_to--> `Pre-Delivery Checklist`  [INFERRED] [semantically similar]
  design-system/MASTER.md → CLAUDE.md

## Hyperedges (group relationships)
- **Design Token Pipeline: MASTER.md â†’ src/index.css â†’ Tailwind v4 Utilities** — CLAUDE_designsystem, CLAUDE_srcindexcss, CLAUDE_tailwindv4 [EXTRACTED 1.00]
- **Design Skill Routing Workflow: ui-ux-pro-max â†’ frontend-design â†’ emil-design-eng** — CLAUDE_skill_uiuxpromax, CLAUDE_skill_frontenddesign, CLAUDE_skill_emildesigneng [EXTRACTED 1.00]
- **shadcn Component System: cva + radix-ui + cn() in src/components/ui/** — CLAUDE_shadcn, CLAUDE_cva, CLAUDE_radixui, CLAUDE_cn, CLAUDE_uicomponentsdir [EXTRACTED 1.00]

## Communities

### Community 0 - "Stack & Motion Libraries"
Cohesion: 0.16
Nodes (17): Agency Portfolio Project, Framer Motion, GSAP 3 Animation Library, lucide-react Icons, MCP Servers (github, context7, playwright), prefers-reduced-motion Accessibility Rule, Rationale: Design Skill Routing Phases, React 19 (+9 more)

### Community 1 - "Design System & Rules"
Cohesion: 0.14
Nodes (16): Anti-Patterns (Enforced Rules), Design System (MASTER.md), Per-Page Design Overrides (design-system/pages/), Pre-Delivery Checklist, Rationale: MASTER.md as Single Source of Truth, Accessibility Rules (contrast 4.5:1, focus states), Anti-Patterns (MASTER), Archivo Heading Font (+8 more)

### Community 2 - "Component Specs & Colors"
Cohesion: 0.17
Nodes (12): Primary Button Spec, Secondary Button Spec, Card Component Spec, Background Color #FDF2F8, CTA/Accent Color #06B6D4, Color Palette Tokens, Primary Color #EC4899, Secondary Color #F472B6 (+4 more)

### Community 3 - "Build Config & Tooling"
Cohesion: 0.2
Nodes (10): jsconfig.json, Path Alias @ -> /src, vite.config.js, Graph Community 0 (App, App.jsx), Graph Community 1 (Hello, Hello.jsx), Graph Community 2 (utils.ts, cn()), Graph Community 3 (eslint.config.js), Graph Community 4 (vite.config.js) (+2 more)

### Community 4 - "Favicon Brand Identity"
Cohesion: 0.39
Nodes (8): Agency Portfolio Brand Identity, Cyan / Blue Accent Color (#47bfff), Light Purple / Lavender Color (#ede6ff), Primary Purple Color (#863bff / #7e14ff), Display-P3 Wide Color Gamut, Gaussian Blur Glow / Radiance Effect, Lightning Bolt / Flash Shape, Favicon SVG Icon

### Community 5 - "SVG Icons & Social"
Cohesion: 0.43
Nodes (8): Design System MASTER, Bluesky Icon Symbol, Discord Icon Symbol, Documentation Icon Symbol, GitHub Icon Symbol, Social/User Icon Symbol, icons.svg SVG Sprite Sheet, X (Twitter) Icon Symbol

### Community 6 - "shadcn UI Primitives"
Cohesion: 0.4
Nodes (5): cn() Helper Utility, class-variance-authority, @radix-ui/react-slot, shadcn-style UI Primitives, src/components/ui/ Directory

### Community 7 - "App Shell"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Hello Component"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "cn() Utility"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "ESLint Config"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Vite Config"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Entry Point"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Spacing Tokens"
Cohesion: 1.0
Nodes (1): Spacing Variable Scale

## Knowledge Gaps
- **31 isolated node(s):** `lucide-react Icons`, `@radix-ui/react-slot`, `class-variance-authority`, `Per-Page Design Overrides (design-system/pages/)`, `Anti-Patterns (Enforced Rules)` (+26 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `App Shell`** (2 nodes): `App()`, `App.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hello Component`** (2 nodes): `Hello()`, `Hello.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `cn() Utility`** (2 nodes): `utils.ts`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `ESLint Config`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Config`** (1 nodes): `vite.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Entry Point`** (1 nodes): `main.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Spacing Tokens`** (1 nodes): `Spacing Variable Scale`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Design System (MASTER.md)` connect `Design System & Rules` to `Stack & Motion Libraries`, `Component Specs & Colors`?**
  _High betweenness centrality (0.190) - this node is a cross-community bridge._
- **Why does `Color Palette Tokens` connect `Component Specs & Colors` to `Stack & Motion Libraries`, `Design System & Rules`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Why does `Agency Portfolio Project` connect `Stack & Motion Libraries` to `Design System & Rules`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **What connects `lucide-react Icons`, `@radix-ui/react-slot`, `class-variance-authority` to the rest of the system?**
  _31 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Design System & Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._