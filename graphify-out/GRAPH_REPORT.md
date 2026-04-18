# Graph Report - .  (2026-04-18)

## Corpus Check
- 6 files · ~3,700 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 82 nodes · 89 edges · 14 communities detected
- Extraction: 80% EXTRACTED · 20% INFERRED · 0% AMBIGUOUS · INFERRED: 18 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]

## God Nodes (most connected - your core abstractions)
1. `Design System (MASTER.md)` - 10 edges
2. `Agency Portfolio Project` - 8 edges
3. `Favicon SVG Icon` - 7 edges
4. `icons.svg SVG Sprite Sheet` - 7 edges
5. `Color Palette Tokens` - 6 edges
6. `Graph Report (2026-04-18)` - 6 edges
7. `GSAP 3 Animation Library` - 4 edges
8. `Framer Motion` - 4 edges
9. `Vite + React Template` - 4 edges
10. `Typography System (Archivo + Space Grotesk)` - 4 edges

## Surprising Connections (you probably didn't know these)
- `prefers-reduced-motion Accessibility Rule` --semantically_similar_to--> `Accessibility Rules (contrast 4.5:1, focus states)`  [INFERRED] [semantically similar]
  CLAUDE.md → design-system/MASTER.md
- `icons.svg SVG Sprite Sheet` --rationale_for--> `Design System MASTER`  [INFERRED]
  public/icons.svg → design-system/MASTER.md
- `cn() Helper Utility` --semantically_similar_to--> `Graph Community 2 (utils.ts, cn())`  [INFERRED] [semantically similar]
  CLAUDE.md → graphify-out/GRAPH_REPORT.md
- `Anti-Patterns (Enforced Rules)` --semantically_similar_to--> `Anti-Patterns (MASTER)`  [INFERRED] [semantically similar]
  CLAUDE.md → design-system/MASTER.md
- `Pre-Delivery Checklist` --semantically_similar_to--> `Pre-Delivery Checklist (MASTER)`  [INFERRED] [semantically similar]
  CLAUDE.md → design-system/MASTER.md

## Hyperedges (group relationships)
- **Design Token Pipeline: MASTER.md â†’ src/index.css â†’ Tailwind v4 Utilities** — CLAUDE_designsystem, CLAUDE_srcindexcss, CLAUDE_tailwindv4 [EXTRACTED 1.00]
- **Design Skill Routing Workflow: ui-ux-pro-max â†’ frontend-design â†’ emil-design-eng** — CLAUDE_skill_uiuxpromax, CLAUDE_skill_frontenddesign, CLAUDE_skill_emildesigneng [EXTRACTED 1.00]
- **shadcn Component System: cva + radix-ui + cn() in src/components/ui/** — CLAUDE_shadcn, CLAUDE_cva, CLAUDE_radixui, CLAUDE_cn, CLAUDE_uicomponentsdir [EXTRACTED 1.00]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.17
Nodes (16): Agency Portfolio Project, Framer Motion, GSAP 3 Animation Library, lucide-react Icons, MCP Servers (github, context7, playwright), prefers-reduced-motion Accessibility Rule, Rationale: Design Skill Routing Phases, React 19 (+8 more)

### Community 1 - "Community 1"
Cohesion: 0.14
Nodes (16): Anti-Patterns (Enforced Rules), Design System (MASTER.md), Per-Page Design Overrides (design-system/pages/), Pre-Delivery Checklist, Rationale: MASTER.md as Single Source of Truth, Accessibility Rules (contrast 4.5:1, focus states), Anti-Patterns (MASTER), Archivo Heading Font (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.17
Nodes (12): Primary Button Spec, Secondary Button Spec, Card Component Spec, Background Color #FDF2F8, CTA/Accent Color #06B6D4, Color Palette Tokens, Primary Color #EC4899, Secondary Color #F472B6 (+4 more)

### Community 3 - "Community 3"
Cohesion: 0.18
Nodes (11): cn() Helper Utility, class-variance-authority, @radix-ui/react-slot, shadcn-style UI Primitives, Graph Community 0 (App, App.jsx), Graph Community 1 (Hello, Hello.jsx), Graph Community 2 (utils.ts, cn()), Graph Community 3 (eslint.config.js) (+3 more)

### Community 4 - "Community 4"
Cohesion: 0.39
Nodes (8): Agency Portfolio Brand Identity, Cyan / Blue Accent Color (#47bfff), Light Purple / Lavender Color (#ede6ff), Primary Purple Color (#863bff / #7e14ff), Display-P3 Wide Color Gamut, Gaussian Blur Glow / Radiance Effect, Lightning Bolt / Flash Shape, Favicon SVG Icon

### Community 5 - "Community 5"
Cohesion: 0.43
Nodes (8): Design System MASTER, Bluesky Icon Symbol, Discord Icon Symbol, Documentation Icon Symbol, GitHub Icon Symbol, Social/User Icon Symbol, icons.svg SVG Sprite Sheet, X (Twitter) Icon Symbol

### Community 6 - "Community 6"
Cohesion: 1.0
Nodes (0): 

### Community 7 - "Community 7"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Community 8"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Community 10"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Community 11"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Community 12"
Cohesion: 1.0
Nodes (1): Path Alias @ -> /src

### Community 13 - "Community 13"
Cohesion: 1.0
Nodes (1): Spacing Variable Scale

## Knowledge Gaps
- **31 isolated node(s):** `lucide-react Icons`, `@radix-ui/react-slot`, `class-variance-authority`, `Per-Page Design Overrides (design-system/pages/)`, `Anti-Patterns (Enforced Rules)` (+26 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 6`** (2 nodes): `App()`, `App.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (2 nodes): `Hello()`, `Hello.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (2 nodes): `utils.ts`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (1 nodes): `vite.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (1 nodes): `main.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (1 nodes): `Path Alias @ -> /src`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (1 nodes): `Spacing Variable Scale`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Design System (MASTER.md)` connect `Community 1` to `Community 0`, `Community 2`?**
  _High betweenness centrality (0.212) - this node is a cross-community bridge._
- **Why does `Color Palette Tokens` connect `Community 2` to `Community 1`?**
  _High betweenness centrality (0.123) - this node is a cross-community bridge._
- **Why does `Agency Portfolio Project` connect `Community 0` to `Community 1`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._
- **What connects `lucide-react Icons`, `@radix-ui/react-slot`, `class-variance-authority` to the rest of the system?**
  _31 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._