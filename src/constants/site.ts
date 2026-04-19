// ============================================================
// Centralized site content + brand constants for Agiton studio
// ============================================================

export const BRAND = {
  name: "Agiton",
  tagline: "A design studio building brands that move.",
  email: "hello@agiton.studio",
  location: "Lisbon · Brooklyn",
  founded: "2019",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#work" },
  { label: "Blogs", href: "#journal" },
  { label: "FAQ", href: "#faq" },
] as const;

export interface Project {
  slug: string;
  tag: string;
  title: string;
  sub: string;
  c1: string;
  c2: string;
  year: string;
  meta: string;
  invert?: boolean;
}

export const PROJECTS: Project[] = [
  { slug: "veldt", tag: "01 · Identity", title: "Veldt", sub: "A restaurant with a garden problem.", c1: "#FF5A1F", c2: "#2A1F0F", year: "2026", meta: "Identity · Menu · Site" },
  { slug: "flint-os", tag: "02 · Product", title: "Flint OS", sub: "Private equity, made legible.", c1: "#0E1E3A", c2: "#05080C", year: "2025", meta: "Product · Brand · Ops" },
  { slug: "paperbound", tag: "03 · Editorial", title: "Paperbound", sub: "An independent press gets louder.", c1: "#F2EDE4", c2: "#E8E1D3", year: "2025", meta: "Editorial · Type · Web", invert: true },
  { slug: "aero-90", tag: "04 · Motion", title: "Aero/90", sub: "A launch film for the fastest bike of 1990, in 2026.", c1: "#1A1D22", c2: "#0A0A0B", year: "2025", meta: "Direction · Motion · Sound" },
];

export const SERVICES = [
  ["01", "Brand Identity", "Naming, wordmarks, systems, guidelines — and the discipline to actually ship them.", "Strategy · Naming · Identity · Guidelines"],
  ["02", "Websites", "Editorial, product and portfolio sites. Designed by us, built on Framer or Next.js.", "UX · Art direction · Build · CMS"],
  ["03", "Product UI", "Interfaces that survive first contact with a roadmap. Systems your eng team will thank you for.", "Audit · Flows · Design system · Handoff"],
  ["04", "Motion & Direction", "Launch films, social loops, title work. Used sparingly, to devastating effect.", "Direction · Storyboard · Animation · Sound"],
] as const;

export const PROCESS_STEPS = [
  ["Week 1", "Immersion", "We read every deck, interview every stakeholder, walk every floor. You'll be surprised what we find."],
  ["Week 2–3", "Direction", "Three distinct territories, each defensible, each uncomfortable in the right way."],
  ["Week 4–6", "Make", "We design the system and everything it touches — in parallel, in full fidelity."],
  ["Week 7+", "Ship & hold", "We stay on hand for launch and the six weeks after. That's where brands are won or lost."],
] as const;

export interface Plan {
  n: string; p: string; f: string; d: string; feat: string[]; hi: boolean;
}
export const PLANS: Plan[] = [
  { n: "Sprint", p: "€12k", f: "per week", d: "A single, focused problem. Landing page, pitch, rebrand kickoff.", feat: ["1 senior lead", "Async daily", "1 live review/week", "Handoff in Figma"], hi: false },
  { n: "Partner", p: "€38k", f: "per month", d: "Our most-taken engagement. Identity, site and launch in one arc.", feat: ["Dedicated team of 3", "Weekly studio call", "Prototype build", "12 weeks minimum", "Launch support"], hi: true },
  { n: "Embedded", p: "Let's talk", f: "quarter+", d: "We sit inside your team as a fractional design function.", feat: ["Team of 2 — 4", "Slack + Linear", "Quarterly roadmap", "Hiring support", "Design ops"], hi: false },
];

export const TESTIMONIALS = [
  { q: "They didn't just redesign the brand — they rewrote the company's internal language. Every email sounds sharper now.", n: "Marion Lux", r: "COO, Hollow", col: "md:col-span-7" },
  { q: "Rare to find a team both this opinionated and this easy to collaborate with.", n: "Theo Mercer", r: "Founder, Mercer&Co.", col: "md:col-span-5" },
  { q: "Shipped our site three weeks early and the post-launch guide is still how we onboard designers.", n: "Jamie O.", r: "Head of Design, Lantern", col: "md:col-span-5" },
  { q: "Agiton made a boring B2B product feel like a culture brand. Our hiring funnel doubled.", n: "Elena Qiu", r: "CEO, Kiln", col: "md:col-span-7" },
];

export const JOURNAL = [
  { d: "Apr 2026", r: "8 min", t: "Against the wordmark gradient.", x: "A polemic against the most overused identity trick of the last decade — and a few times it's earned.", g: "linear-gradient(135deg,#FF5A1F,#2A1F8A)" },
  { d: "Mar 2026", r: "12 min", t: "How we priced our way into better clients.", x: "Raising our rates 3× didn't lose us work. It rebuilt the kind of work we got asked to do.", g: "linear-gradient(135deg,#0E1E3A,#05080C)" },
  { d: "Feb 2026", r: "6 min", t: "Brand systems are a liability until they're used.", x: "Why guidelines PDFs fail, and what we ship instead.", g: "linear-gradient(135deg,#E8E1D3,#F2EDE4)", invert: true },
];

export const FAQ_ITEMS: [string, string][] = [
  ["What does a typical engagement look like?", "Most clients start on Partner — an 8 to 12 week arc covering strategy, identity and launch site. We scope live on our first call and email the number within 48h."],
  ["Can you work inside our existing team?", "Yes. Our Embedded engagement places two to four of us into your Slack, Figma and Linear on a quarterly basis. It is how we work with most public-company design teams."],
  ["Do you take equity?", "Rarely, and only as a top-up to fair cash. We've done it three times in seven years; all three are still in our portfolio."],
  ["Where are you based?", "Lisbon and remote, with a small room in Brooklyn. We travel for kickoffs and launches."],
  ["What tools do you use?", "Figma for design, Framer or Next.js for build, Linear for ops, a lot of pen and paper for thinking."],
  ["Do you do logos only?", "No. We took logo-only work off the table in 2023 — it was rarely the actual problem."],
];

export const LOGOS: [string, string][] = [
  ["Flint", "italic-display"], ["VELDT", ""], ["Noma·", "italic-display"], ["Paperbound", ""],
  ["Aero/90", ""], ["Mercer&Co.", ""], ["Hollow", ""], ["Lantern", ""],
  ["Corso", ""], ["⌘ Kiln", ""], ["Radiant", ""], ["Orsay", ""],
];

export const WHY_CARDS = [
  { n: "01", h: "Senior hands, every step.", b: "The person you meet on the pitch is the person designing your site. No juniors you didn't choose, no pass-the-parcel between teams.", stat: "8 / 8", lbl: "Team members are senior" },
  { n: "02", h: "One client at a time.", b: "We stack engagements, not minds. For six to eight weeks, your project is the only thing open on our desks.", stat: "1 : 1", lbl: "Focus ratio per arc" },
  { n: "03", h: "Designed to be maintained.", b: "Your team inherits a Figma library, a Framer or Next.js codebase, and a brand guide that fits on two screens. Not a 90-page PDF no one reads.", stat: "2 screens", lbl: "Brand guide length" },
  { n: "04", h: "Shipped in weeks, not quarters.", b: "Most partner engagements go live in 6 – 10 weeks. We stay on hand for the six weeks after launch, because that's when brands are actually won.", stat: "6 – 10 wks", lbl: "From kickoff to live" },
];
