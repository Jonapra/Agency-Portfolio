# Graph Report - .  (2026-04-20)

## Corpus Check
- 48 files · ~50,732 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 306 nodes · 348 edges · 57 communities detected
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.64)
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
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]

## God Nodes (most connected - your core abstractions)
1. `_make_assistant_record()` - 18 edges
2. `DashboardHandler` - 16 edges
3. `TestGetPricing` - 12 edges
4. `TestGetDashboardData` - 11 edges
5. `TestParseJsonlFile` - 11 edges
6. `TestCalcCost` - 9 edges
7. `_make_user_record()` - 9 edges
8. `TestScanIncrementalUpdate` - 9 edges
9. `scan()` - 8 edges
10. `TestProjectNameFromCwd` - 8 edges

## Surprising Connections (you probably didn't know these)
- `icons.svg SVG Sprite Sheet` --rationale_for--> `Design System MASTER`  [INFERRED]
  public/icons.svg → design-system/MASTER.md
- `DashboardHandler` --uses--> `Tests for dashboard.py - API endpoint and data retrieval.`  [INFERRED]
  claude-usage\dashboard.py → claude-usage\tests\test_dashboard.py
- `DashboardHandler` --uses--> `Integration test: start server and make HTTP requests.`  [INFERRED]
  claude-usage\dashboard.py → claude-usage\tests\test_dashboard.py
- `DashboardHandler` --uses--> `Verify XSS protection is present (PR #10).`  [INFERRED]
  claude-usage\dashboard.py → claude-usage\tests\test_dashboard.py
- `DashboardHandler` --uses--> `Verify getPricing falls back to substring match for unknown models.`  [INFERRED]
  claude-usage\dashboard.py → claude-usage\tests\test_dashboard.py

## Hyperedges (group relationships)
- **Design Token Pipeline: MASTER.md â†’ src/index.css â†’ Tailwind v4 Utilities** — CLAUDE_designsystem, CLAUDE_srcindexcss, CLAUDE_tailwindv4 [EXTRACTED 1.00]
- **Design Skill Routing Workflow: ui-ux-pro-max â†’ frontend-design â†’ emil-design-eng** — CLAUDE_skill_uiuxpromax, CLAUDE_skill_frontenddesign, CLAUDE_skill_emildesigneng [EXTRACTED 1.00]
- **shadcn Component System: cva + radix-ui + cn() in src/components/ui/** — CLAUDE_shadcn, CLAUDE_cva, CLAUDE_radixui, CLAUDE_cn, CLAUDE_uicomponentsdir [EXTRACTED 1.00]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (20): _make_assistant_record(), _make_user_record(), Tests for scanner.py - JSONL parsing, DB operations, and scanning., Test deduplication of streaming events by message.id., Multiple records with same message.id should produce one turn., Records with different message.id are separate turns., Records without message.id are kept as-is (no dedup)., Mix of records with and without message.id. (+12 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (15): BaseHTTPRequestHandler, DashboardHandler, get_dashboard_data(), dashboard.py - Local web dashboard served on localhost:8080., Tests for dashboard.py - API endpoint and data retrieval., Verify XSS protection is present (PR #10)., Verify getPricing falls back to substring match for unknown models., Verify getPricing returns null for non-Anthropic models. (+7 more)

### Community 2 - "Community 2"
Cohesion: 0.09
Nodes (6): Tests for cli.py - pricing, formatting, and cost calculation., Ensure CLI pricing matches known Anthropic API rates., TestCalcCost, TestFmt, TestFmtCost, TestPricingConsistency

### Community 3 - "Community 3"
Cohesion: 0.27
Nodes (13): calc_cost(), cmd_dashboard(), cmd_scan(), cmd_stats(), cmd_today(), fmt(), fmt_cost(), get_pricing() (+5 more)

### Community 4 - "Community 4"
Cohesion: 0.26
Nodes (12): aggregate_sessions(), get_db(), init_db(), insert_turns(), parse_jsonl_file(), project_name_from_cwd(), scanner.py - Scans Claude Code JSONL transcript files and stores data in SQLite., Aggregate turn data back into session-level stats. (+4 more)

### Community 5 - "Community 5"
Cohesion: 0.24
Nodes (6): Test that updating a file only processes new lines (no double reads)., Growing a file must add only new turns, not re-insert old ones., Session totals should reflect all turns, not double-count., Last timestamp should advance after file grows., If mtime changes but line count doesn't grow, skip the file., TestScanIncrementalUpdate

### Community 6 - "Community 6"
Cohesion: 0.17
Nodes (1): TestGetPricing

### Community 7 - "Community 7"
Cohesion: 0.17
Nodes (12): Primary Button Spec, Secondary Button Spec, Card Component Spec, Background Color #FDF2F8, CTA/Accent Color #06B6D4, Color Palette Tokens, Primary Color #EC4899, Secondary Color #F472B6 (+4 more)

### Community 8 - "Community 8"
Cohesion: 0.25
Nodes (1): TestProjectNameFromCwd

### Community 9 - "Community 9"
Cohesion: 0.25
Nodes (1): TestDatabaseOperations

### Community 10 - "Community 10"
Cohesion: 0.36
Nodes (2): Integration test: create fake JSONL files and run scan()., TestScanIntegration

### Community 11 - "Community 11"
Cohesion: 0.39
Nodes (8): Agency Portfolio Brand Identity, Cyan / Blue Accent Color (#47bfff), Light Purple / Lavender Color (#ede6ff), Primary Purple Color (#863bff / #7e14ff), Display-P3 Wide Color Gamut, Gaussian Blur Glow / Radiance Effect, Lightning Bolt / Flash Shape, Favicon SVG Icon

### Community 12 - "Community 12"
Cohesion: 0.43
Nodes (8): Design System MASTER, Bluesky Icon Symbol, Discord Icon Symbol, Documentation Icon Symbol, GitHub Icon Symbol, Social/User Icon Symbol, icons.svg SVG Sprite Sheet, X (Twitter) Icon Symbol

### Community 13 - "Community 13"
Cohesion: 0.48
Nodes (5): addToRemoveQueue(), dispatch(), genId(), reducer(), toast()

### Community 14 - "Community 14"
Cohesion: 0.29
Nodes (0): 

### Community 15 - "Community 15"
Cohesion: 0.29
Nodes (7): Graph Community 0 (App, App.jsx), Graph Community 1 (Hello, Hello.jsx), Graph Community 2 (utils.ts, cn()), Graph Community 3 (eslint.config.js), Graph Community 4 (vite.config.js), Graph Community 5 (main.jsx), Graph Report (2026-04-18)

### Community 16 - "Community 16"
Cohesion: 0.5
Nodes (4): Archivo Heading Font, Google Fonts Import (Archivo + Space Grotesk), Space Grotesk Body Font, Typography System (Archivo + Space Grotesk)

### Community 17 - "Community 17"
Cohesion: 0.5
Nodes (4): Motion-Driven Style, Portfolio Grid Page Pattern, Rationale: Motion-Driven as Sales Asset, Section Order: Heroâ†’ProjectGridâ†’Aboutâ†’Contact

### Community 18 - "Community 18"
Cohesion: 0.67
Nodes (1): TestAggregateSessions

### Community 19 - "Community 19"
Cohesion: 0.67
Nodes (0): 

### Community 20 - "Community 20"
Cohesion: 0.67
Nodes (0): 

### Community 21 - "Community 21"
Cohesion: 0.67
Nodes (3): Accessibility Rules (contrast 4.5:1, focus states), Anti-Patterns (MASTER), Pre-Delivery Checklist (MASTER)

### Community 22 - "Community 22"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Community 23"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "Community 24"
Cohesion: 1.0
Nodes (0): 

### Community 25 - "Community 25"
Cohesion: 1.0
Nodes (0): 

### Community 26 - "Community 26"
Cohesion: 1.0
Nodes (0): 

### Community 27 - "Community 27"
Cohesion: 1.0
Nodes (0): 

### Community 28 - "Community 28"
Cohesion: 1.0
Nodes (0): 

### Community 29 - "Community 29"
Cohesion: 1.0
Nodes (0): 

### Community 30 - "Community 30"
Cohesion: 1.0
Nodes (0): 

### Community 31 - "Community 31"
Cohesion: 1.0
Nodes (0): 

### Community 32 - "Community 32"
Cohesion: 1.0
Nodes (0): 

### Community 33 - "Community 33"
Cohesion: 1.0
Nodes (0): 

### Community 34 - "Community 34"
Cohesion: 1.0
Nodes (0): 

### Community 35 - "Community 35"
Cohesion: 1.0
Nodes (0): 

### Community 36 - "Community 36"
Cohesion: 1.0
Nodes (0): 

### Community 37 - "Community 37"
Cohesion: 1.0
Nodes (0): 

### Community 38 - "Community 38"
Cohesion: 1.0
Nodes (0): 

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (0): 

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (0): 

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (0): 

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (0): 

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (0): 

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (0): 

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (0): 

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (0): 

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (0): 

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (0): 

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (0): 

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (0): 

### Community 51 - "Community 51"
Cohesion: 1.0
Nodes (0): 

### Community 52 - "Community 52"
Cohesion: 1.0
Nodes (0): 

### Community 53 - "Community 53"
Cohesion: 1.0
Nodes (0): 

### Community 54 - "Community 54"
Cohesion: 1.0
Nodes (0): 

### Community 55 - "Community 55"
Cohesion: 1.0
Nodes (0): 

### Community 56 - "Community 56"
Cohesion: 1.0
Nodes (1): Spacing Variable Scale

## Knowledge Gaps
- **51 isolated node(s):** `cli.py - Command-line interface for the Claude Code usage dashboard.  Commands`, `Extract --projects-dir value from argument list.`, `dashboard.py - Local web dashboard served on localhost:8080.`, `scanner.py - Scans Claude Code JSONL transcript files and stores data in SQLite.`, `Derive a friendly project name from cwd path.` (+46 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 22`** (2 nodes): `Footer()`, `Footer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (2 nodes): `Layout()`, `Layout.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (2 nodes): `Logo()`, `Logo.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (2 nodes): `Reveal()`, `Reveal.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 26`** (2 nodes): `CTA()`, `CTA.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (2 nodes): `Marquee()`, `Marquee.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (2 nodes): `Process()`, `Process.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (2 nodes): `ButtonWithIcon()`, `button-with-icon.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (2 nodes): `GooeyText()`, `gooey-text-morphing.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (2 nodes): `Toaster()`, `sonner.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 32`** (2 nodes): `toaster.tsx`, `Toaster()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 33`** (2 nodes): `useCustomCursor.ts`, `useCustomCursor()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 34`** (2 nodes): `useMagnetic.ts`, `useMagnetic()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 35`** (2 nodes): `utils.ts`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (1 nodes): `tailwind.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `__init__.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `vite-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `Cursor.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `NavLink.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `FAQ.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `Hero.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `Journal.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `Pricing.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `Services.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `Testimonials.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `Work.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `button.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `toast.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (1 nodes): `tooltip.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 54`** (1 nodes): `use-toast.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 55`** (1 nodes): `site.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 56`** (1 nodes): `Spacing Variable Scale`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `_make_assistant_record()` connect `Community 0` to `Community 10`, `Community 5`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `TestScanIncrementalUpdate` connect `Community 5` to `Community 0`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Are the 11 inferred relationships involving `DashboardHandler` (e.g. with `TestGetDashboardData` and `TestDashboardHTTP`) actually correct?**
  _`DashboardHandler` has 11 INFERRED edges - model-reasoned connections that need verification._
- **What connects `cli.py - Command-line interface for the Claude Code usage dashboard.  Commands`, `Extract --projects-dir value from argument list.`, `dashboard.py - Local web dashboard served on localhost:8080.` to the rest of the system?**
  _51 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._