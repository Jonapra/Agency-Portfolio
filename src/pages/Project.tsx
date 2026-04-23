import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PROJECTS } from "@/constants/site";

interface CaseContent {
  slug: string;
  title: string;
  italicLine: string;
  trail: string;
  intro: string;
  client: string;
  timeline: string;
  team: string;
  scope: string;
  cover: string;
  tags: string[];
  problem: React.ReactNode;
  stats: { v: string; l: string }[];
  pull: { q: React.ReactNode; n: string };
  solution: { t: string; d: string }[];
  tools: { design: string[]; colors: string[]; stack: string[] };
  images: string[];
  next: { slug: string; title: string; sub: string };
}

const cases: Record<string, CaseContent> = {
  veldt: {
    slug: "veldt",
    title: "Veldt—",
    italicLine: "a restaurant",
    trail: "with a garden problem.",
    intro: "When Veldt opened a third location on a former mushroom farm, the brand had to carry the stink of the soil without smelling like a theme.",
    client: "Veldt Restaurants · Porto",
    timeline: "Jan – Mar 2026",
    team: "Lead · 2 designers · Writer",
    scope: "Identity · Menu · Site · Uniform",
    cover: `radial-gradient(900px 500px at 30% 80%, rgba(255,90,31,.8), transparent 60%), radial-gradient(700px 400px at 80% 10%, rgba(42,31,15,.9), transparent 55%), linear-gradient(135deg,#1a1207,#06060a)`,
    tags: ["Identity · Menu · Site", "2026"],
    problem: <>Veldt's first two rooms sold out on word‑of‑mouth. The third needed to say something — <span className="italic-display text-signal">out loud</span> — before a single plate was sent out, without betraying the quiet the founders had earned.</>,
    stats: [
      { v: "+42%", l: "Reservations in first 60 days" },
      { v: "3×", l: "Instagram saves / month" },
      { v: "08", l: "Press pickups without pitch" },
      { v: "01", l: "Michelin nod, pending" },
    ],
    pull: { q: <>We asked for a brand. They gave us <span className="italic-display text-signal">a way of speaking</span> — one that outlived the launch and started showing up in the way we write emails.</>, n: "Rui Madeira · Founder, Veldt" },
    solution: [
      { t: "Brand Direction", d: "We stripped back two years of rustic-restaurant clichés and built from the soil up — agricultural typefaces, a muted earthy palette that felt earned, not applied." },
      { t: "Identity System", d: "A wordmark that works at 8pt on a receipt and at 8 metres on signage. Fourteen typographic lockups, a secondary mark, and a motion kit." },
      { t: "Digital Presence", d: "A Framer site built around the reservation flow — one pager, three rooms, live availability. Shipped in six weeks." },
    ],
    tools: {
      design: ["Figma", "Framer", "Illustrator", "After Effects"],
      colors: ["#FF5A1F", "#2A1F0F", "#F2EDE4", "#1A1207"],
      stack: ["Framer", "Webflow", "GSAP"],
    },
    images: [],
    next: { slug: "flint-os", title: "Flint OS.", sub: "Private equity, made legible." },
  },
  "flint-os": {
    slug: "flint-os",
    title: "Flint OS—",
    italicLine: "private equity,",
    trail: "made legible.",
    intro: "A nineteen-year-old PE shop with a website that read like a 2008 brochure. The fund needed to look as sharp as the founders it backed.",
    client: "Flint Capital · London",
    timeline: "Aug – Nov 2025",
    team: "Lead · 1 designer · 1 engineer",
    scope: "Brand · Product UI · Site",
    cover: `radial-gradient(700px 400px at 30% 80%, rgba(42,95,255,.4), transparent 60%), linear-gradient(135deg,#0E1E3A,#05080C)`,
    tags: ["Product · Brand · Ops", "2025"],
    problem: <>Flint had outgrown its founders' decks but kept selling like a startup. The new brand had to <span className="italic-display text-signal">earn LP trust</span> in eight seconds and survive a quarterly report.</>,
    stats: [
      { v: "2.4×", l: "LP inbound after launch" },
      { v: "−38%", l: "Sales-cycle length" },
      { v: "11", l: "Portcos onboarded to OS" },
      { v: "92", l: "Net Promoter Score" },
    ],
    pull: { q: <>They gave our partners a vocabulary, not a logo. <span className="italic-display text-signal">Six months later</span> our LPs are using it back to us in calls.</>, n: "Anya Beaumont · CEO, Flint Capital" },
    solution: [
      { t: "Brand System", d: "A crisp institutional type system with motion principles that signal precision over personality — LP trust in eight seconds, built to survive a quarterly report." },
      { t: "Product Design", d: "Flint OS: an internal dashboard used daily by the operating team to track portfolio companies, designed around real workflows not hypothetical ones." },
      { t: "Investor Site", d: "Next.js, MDX-driven, with a programmable case-study layer the partners update without touching code." },
    ],
    tools: {
      design: ["Figma", "Notion", "Pitch", "Principle"],
      colors: ["#0E1E3A", "#2A5FFF", "#05080C", "#F2EDE4"],
      stack: ["Next.js", "MDX", "Vercel", "TypeScript"],
    },
    images: [],
    next: { slug: "veldt", title: "Veldt◐", sub: "A restaurant with a garden problem." },
  },
  paperbound: {
    slug: "paperbound",
    title: "Paperbound—",
    italicLine: "an independent press",
    trail: "gets louder.",
    intro: "A six-person literary press in Edinburgh, with a cult readership and zero shelf presence beyond it. We rebuilt the brand around the typography it already loved.",
    client: "Paperbound · Edinburgh",
    timeline: "May – Jul 2025",
    team: "Lead · 1 designer · Type",
    scope: "Identity · Editorial · Web",
    cover: `linear-gradient(135deg,#F2EDE4,#E8E1D3)`,
    tags: ["Editorial · Type · Web", "2025"],
    problem: <>Paperbound had eight years of beautiful covers and no system. Every issue felt like <span className="italic-display text-signal">starting over.</span> We made the press feel like one continuous voice.</>,
    stats: [
      { v: "+61%", l: "Subscriber growth, 90 days" },
      { v: "3", l: "New retail accounts" },
      { v: "12pt", l: "Custom type weights cut" },
      { v: "07", l: "Awards in launch quarter" },
    ],
    pull: { q: <>For the first time, our spine looks like our mission. <span className="italic-display text-signal">Quiet, exact,</span> and impossible to mistake for someone else's.</>, n: "Iona Reith · Editor, Paperbound" },
    solution: [
      { t: "Editorial Identity", d: "A custom serif, three secondary lockups, and an issue-numbering system designed to outlast any single editor and unify eight years of scattered covers." },
      { t: "Print System", d: "Cover, interior, and supplement masters in InDesign + Affinity — built to survive hand-off across editors and seasons without losing the voice." },
      { t: "Web Archive", d: "A searchable Astro site with a generous reading experience, built to grow over decades without CMS lock-in or replatform risk." },
    ],
    tools: {
      design: ["Figma", "InDesign", "Affinity", "Glyphs"],
      colors: ["#F2EDE4", "#E8E1D3", "#1A1207", "#FF5A1F"],
      stack: ["Astro", "Netlify", "Sanity"],
    },
    images: [],
    next: { slug: "aero-90", title: "Aero/90", sub: "A launch film for the fastest bike of 1990, in 2026." },
  },
  "aero-90": {
    slug: "aero-90",
    title: "Aero/90—",
    italicLine: "a launch film",
    trail: "for a 1990 bike.",
    intro: "A revival of an obscure Italian race bike, reissued in carbon. The brand had to feel like an archive find that arrived this morning.",
    client: "Aero Cicli · Bologna",
    timeline: "Sep – Dec 2025",
    team: "Director · 2 designers · Composer",
    scope: "Direction · Motion · Sound",
    cover: `radial-gradient(700px 400px at 70% 60%, rgba(255,90,31,.4), transparent 60%), linear-gradient(135deg,#1A1D22,#0A0A0B)`,
    tags: ["Direction · Motion · Sound", "2025"],
    problem: <>Reissue products struggle to feel earned. We needed a film that respected the original engineers <span className="italic-display text-signal">without nostalgia</span> — and a brand that worked at race speed.</>,
    stats: [
      { v: "1.2M", l: "Film views, week one" },
      { v: "Sold out", l: "First production run, 14 days" },
      { v: "06", l: "Magazine covers" },
      { v: "01", l: "Cannes shortlist" },
    ],
    pull: { q: <>They watched 30 hours of 1990 race footage before drawing a line. The film <span className="italic-display text-signal">feels like the bike</span> — and that's the point.</>, n: "Marco Frigo · Founder, Aero Cicli" },
    solution: [
      { t: "Brand Revival", d: "A redrawn wordmark, race numerals, and a full livery system. Respects the 1990 engineering without the nostalgia — archive find that arrived this morning." },
      { t: "Launch Film", d: "90 seconds, shot on 16mm, scored to a single cello line. 1.2M views in week one. Sold the first production run in 14 days." },
      { t: "Sound Identity", d: "A six-note motif that survived being put on hold, a client rebrand, and three rounds of feedback. Ended up in the brand guidelines as a canonical asset." },
    ],
    tools: {
      design: ["Figma", "After Effects", "DaVinci", "Cinema 4D"],
      colors: ["#1A1D22", "#FF5A1F", "#0A0A0B", "#C4C1B9"],
      stack: ["Framer", "Vimeo", "WebGL"],
    },
    images: [],
    next: { slug: "paperbound", title: "Paperbound.", sub: "An independent press gets louder." },
  },
};

const Project = () => {
  const { slug = "veldt" } = useParams();
  const c = cases[slug] ?? cases.veldt;
  const current = PROJECTS.find(p => p.slug === c.slug) ?? PROJECTS[0];
  const otherProjects = PROJECTS.filter(p => p.slug !== c.slug);

  return (
    <Layout anchorPrefix="/">
      {/* HERO */}
      <section className="relative px-6 md:px-10 pt-36 pb-16">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <nav className="h-eyebrow text-mute mb-10 flex items-center gap-3">
              <Link to="/" className="u-link">Agiton</Link><span>/</span>
              <Link to="/#work" className="u-link">Work</Link><span>/</span>
              <span>{c.title.replace("—", "")}</span>
            </nav>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  {c.tags.map(t => <span key={t} className="pill">{t}</span>)}
                </div>
              </Reveal>
              <Reveal>
                <h1 className="font-display leading-[0.92]" style={{ fontSize: "clamp(50px,10vw,130px)", letterSpacing: "-0.04em" }}>
                  {c.title}<br />
                  <span className="italic-display text-signal">{c.italicLine}</span><br />
                  {c.trail}
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.16} className="md:col-span-4 space-y-6">
              <p className="font-display text-2xl md:text-4xl text-foreground font-medium leading-[1.1]">{c.intro}</p>
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-foreground/10">
                <div><div className="h-eyebrow text-mute mb-1">Client</div><div>{c.client}</div></div>
                <div><div className="h-eyebrow text-mute mb-1">Timeline</div><div>{c.timeline}</div></div>
                <div><div className="h-eyebrow text-mute mb-1">Team</div><div>{c.team}</div></div>
                <div><div className="h-eyebrow text-mute mb-1">Scope</div><div>{c.scope}</div></div>
              </div>
            </Reveal>
          </div>

          <div className="relative overflow-hidden rounded-lg plate aspect-[16/9]">
            <div className="absolute inset-0" style={{ background: c.cover }} />
            <div className="absolute inset-0 grid place-items-center">
              <div className="italic-display text-white/95" style={{ fontSize: "clamp(80px, 16vw, 260px)", lineHeight: 0.9 }}>
                {c.title.replace("—", "")}<span className="not-italic font-display">◐</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT IMAGES */}
      <section className="px-6 md:px-10 pb-8">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <div className="h-eyebrow text-mute">§ 01 · Snapshots</div>
              <div className="h-eyebrow text-mute hidden md:block">{current.meta}</div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-5">
            {/* Phone — left, tall portrait */}
            <Reveal className="md:col-span-5">
              <div className="relative overflow-hidden rounded-lg plate aspect-[9/16] group">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]" style={{ background: `radial-gradient(400px 600px at 50% 60%, ${current.c1}55, transparent 60%), linear-gradient(160deg, ${current.c2}, #06060a)` }} />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center px-6">
                    <div className="h-eyebrow text-white/40 mb-3">Phone · 9:16</div>
                    <div className="italic-display text-white/30 text-3xl leading-tight">Image<br />placeholder</div>
                  </div>
                </div>
                <div className="absolute left-4 top-4"><span className="pill text-white/70">9 : 16</span></div>
              </div>
            </Reveal>
            {/* Tablet + Laptop — right, stacked */}
            <div className="md:col-span-7 flex flex-col gap-5">
              <Reveal delay={0.08}>
                <div className="relative overflow-hidden rounded-lg plate aspect-[4/3] group">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]" style={{ background: `radial-gradient(600px 300px at 60% 40%, ${current.c1}44, transparent 60%), linear-gradient(135deg, ${current.c2}, #06060a)` }} />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <div className="h-eyebrow text-white/40 mb-2">Tablet · 4:3</div>
                      <div className="italic-display text-white/25 text-2xl">Placeholder</div>
                    </div>
                  </div>
                  <div className="absolute left-4 top-4"><span className="pill text-white/70">4 : 3</span></div>
                </div>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="relative overflow-hidden rounded-lg plate aspect-[16/10] group">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]" style={{ background: `radial-gradient(700px 350px at 30% 60%, ${current.c1}44, transparent 60%), linear-gradient(135deg, ${current.c2}, #06060a)` }} />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <div className="h-eyebrow text-white/40 mb-2">Laptop · 16:10</div>
                      <div className="italic-display text-white/25 text-2xl">Placeholder</div>
                    </div>
                  </div>
                  <div className="absolute left-4 top-4"><span className="pill text-white/70">16 : 10</span></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="px-6 md:px-10 py-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-3">
              <Reveal><div className="h-eyebrow text-mute mb-3">§ 02 · Challenges</div></Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-4xl md:text-5xl leading-tight">
                  What we <span className="italic-display text-signal">had to solve.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="md:col-span-9 flex items-end">
              <p className="text-mute-2 text-base md:text-lg leading-relaxed max-w-[700px]">
                Every project starts with a real constraint. Here is the challenge Agiton took on.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="relative plate rounded-xl p-10 md:p-16 lg:p-20 overflow-hidden">
              <div className="absolute left-0 top-10 bottom-10 w-[2px] bg-signal/70 hidden md:block" />
              <h3 className="font-display text-xl md:text-2xl text-signal mb-8">The Agiton challenge was —</h3>
              <p className="font-display text-2xl md:text-4xl lg:text-5xl leading-[1.15] max-w-[1100px]">{c.problem}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="px-6 md:px-10 py-12">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="h-eyebrow text-mute mb-12">§ 03 · Our approach</div>
          </Reveal>
          <div className="divide-y divide-foreground/8">
            {c.solution.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.07}>
                <div className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 items-start">
                  <div className="md:col-span-1">
                    <span className="font-mono-ui text-sm text-signal">0{i + 1}</span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="font-display text-2xl md:text-3xl leading-tight">{s.t}</h3>
                  </div>
                  <div className="md:col-span-7 md:col-start-5">
                    <p className="text-mute-2 leading-relaxed text-base md:text-lg">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="px-6 md:px-10 py-12">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="h-eyebrow text-mute mb-10">§ 04 · Outcome</div>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <Reveal className="md:col-span-5">
              <div className="relative overflow-hidden rounded-xl plate aspect-[4/5] group">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]" style={{ background: `radial-gradient(600px 400px at 40% 60%, ${current.c1}66, transparent 60%), linear-gradient(160deg, ${current.c2}, #06060a)` }} />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center px-6">
                    <div className="h-eyebrow text-white/40 mb-3">Outcome visual</div>
                    <div className="italic-display text-white/25 text-3xl leading-tight">Image<br />placeholder</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="md:col-span-7 flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                {c.stats.map((s, i) => (
                  <Reveal key={i} delay={i * 0.07} className="plate rounded-xl p-7 md:p-8">
                    <div className="font-display text-5xl md:text-6xl">{s.v}</div>
                    <div className="h-eyebrow text-mute mt-3">{s.l}</div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.3}>
                <figure className="plate rounded-xl p-8 md:p-10">
                  <svg width="32" height="32" viewBox="0 0 22 22" className="text-signal mb-5 opacity-90" fill="currentColor">
                    <path d="M0 12 C0 6 3 2 9 0 L10 3 C6 5 5 7 5 10 H9 V22 H0 Z M13 12 C13 6 16 2 22 0 L22 3 C18 5 17 7 17 10 H22 V22 H13 Z" />
                  </svg>
                  <blockquote className="font-display text-xl md:text-2xl leading-[1.2]">{c.pull.q}</blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-foreground/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-signal/20 grid place-items-center font-display text-signal text-sm shrink-0">
                      {c.pull.n.charAt(0)}
                    </div>
                    <div className="h-eyebrow text-mute-2">{c.pull.n}</div>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="px-6 md:px-10 py-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-4">
              <div className="h-eyebrow text-mute mb-3">§ 05 · Tools & Stack</div>

              <Reveal>
                <h2 className="font-display text-4xl md:text-5xl leading-tight">
                  What we <span className="italic-display text-signal">worked with.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="md:col-span-8 flex items-end">
              <p className="text-mute-2 text-base md:text-lg leading-relaxed max-w-[620px]">
                The toolkit, palette, and stack behind this build — what we drew with, what we shipped on.
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <Reveal delay={0.05}>
              <div className="plate rounded-xl p-7 md:p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-eyebrow text-mute">Design tools</div>
                  <span className="font-mono-ui text-xs text-signal">01</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {c.tools.design.map(t => (
                    <span key={t} className="pill border border-foreground/15 text-foreground/80">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="plate rounded-xl p-7 md:p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-eyebrow text-mute">Color palette</div>
                  <span className="font-mono-ui text-xs text-signal">02</span>
                </div>
                <div className="grid grid-cols-4 gap-3 mt-auto">
                  {c.tools.colors.map(hex => (
                    <div key={hex} className="flex flex-col gap-2">
                      <div className="aspect-square rounded-md border border-foreground/10" style={{ background: hex }} />
                      <div className="font-mono-ui text-[10px] text-mute-2 uppercase tracking-wider">{hex}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="plate rounded-xl p-7 md:p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-eyebrow text-mute">Tech stack</div>
                  <span className="font-mono-ui text-xs text-signal">03</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {c.tools.stack.map(t => (
                    <span key={t} className="pill border border-signal/30 text-signal">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-12 border-y border-foreground/10">
        <div className="mx-auto max-w-[1600px] overflow-hidden">
          <div className="flex w-max marquee-track" style={{ animationDuration: "20s" }}>
            {[0, 1].map(k => (
              <div key={k} className="flex items-center gap-10 px-8 font-display italic-display" style={{ fontSize: "clamp(60px,12vw,180px)", lineHeight: 0.9 }}>
                <span>{c.title.replace("—", "")} 2026</span>
                <span className="text-signal">◐</span>
                <span>Next case →</span>
                <span className="text-signal">◐</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MORE PROJECTS */}
      <section className="px-6 md:px-10 py-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid md:grid-cols-12 gap-10 mb-12 items-end">
            <div className="md:col-span-8">
              <div className="h-eyebrow text-mute mb-3">§ 06 · Other work</div>

              <Reveal>
                <h2 className="font-display text-4xl md:text-5xl leading-tight">
                  More <span className="italic-display text-signal">receipts.</span>
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link to="/#work" className="u-link h-eyebrow text-mute">View all projects →</Link>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link to={`/projects/${p.slug}`} className="proj-card group block" data-cursor="view">
                  <div
                    className={`relative overflow-hidden rounded-lg plate aspect-[4/3] ${p.invert ? "bg-cream" : ""}`}
                    style={!p.invert ? { background: `radial-gradient(500px 250px at 30% 70%, ${p.c1}66, transparent 60%), linear-gradient(135deg, ${p.c2}, #06060a)` } : { background: `linear-gradient(135deg, ${p.c1}, ${p.c2})` }}
                  >
                    <div className="absolute left-4 top-4">
                      <span className={`pill ${p.invert ? "text-ink" : "text-white/80"}`}>{p.tag}</span>
                    </div>
                    <div className="absolute inset-0 grid place-items-center">
                      <div className={`italic-display ${p.invert ? "text-ink/80" : "text-white/85"}`} style={{ fontSize: "clamp(36px,5vw,64px)", lineHeight: 0.9 }}>
                        {p.title}
                      </div>
                    </div>
                    <div className="absolute right-4 bottom-4 proj-arrow">
                      <svg width="34" height="34" viewBox="0 0 42 42" className={p.invert ? "text-ink" : "text-white"}>
                        <circle cx="21" cy="21" r="20" fill="none" stroke="currentColor" strokeOpacity=".4" />
                        <path d="M15 27 L27 15 M19 15 H27 V23" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <div className="font-display text-2xl">{p.title}</div>
                      <div className="text-mute-2 text-xs mt-1">{p.sub}</div>
                    </div>
                    <div className="h-eyebrow text-mute text-right">{p.year}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Project;
