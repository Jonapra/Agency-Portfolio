import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PROJECTS } from "@/constants/site";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

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
  shipped: { t: string; d: string }[];
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
    shipped: [
      { t: "Identity system", d: "Wordmark, secondary marks, 14 typographic lockups, motion kit." },
      { t: "Menu program", d: "Summer + autumn menus, signage, a typographic license that survives chefs." },
      { t: "Site (Framer)", d: "One pager, three rooms, live reservation feed. Shipped in six weeks." },
      { t: "Uniform", d: "Apron, tote, card. Produced in Porto with Têxteis do Cávado." },
    ],
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
    shipped: [
      { t: "Brand identity", d: "Wordmark, type system, motion principles, and a 12-page guide." },
      { t: "Investor site", d: "Next.js, MDX-driven, with a quietly programmable case-study layer." },
      { t: "Flint OS", d: "An internal portfolio dashboard for the operating team. Used daily." },
      { t: "Pitch system", d: "Keynote + Figma libraries the partners actually open." },
    ],
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
    shipped: [
      { t: "Editorial identity", d: "A custom serif, three secondary lockups, an issue-numbering system." },
      { t: "Print templates", d: "Cover, interior and supplement masters in InDesign + Affinity." },
      { t: "Web archive", d: "A searchable, generous reading experience — built on Astro." },
      { t: "Subscription kit", d: "Welcome card, bookmark, and a quietly proud envelope." },
    ],
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
    shipped: [
      { t: "Brand revival", d: "A redrawn wordmark, race numerals, and a livery system for 2026." },
      { t: "Launch film", d: "90 seconds, shot on 16mm, scored to a single cello line." },
      { t: "Site", d: "A one-page configurator, in three languages, built on Framer." },
      { t: "Sound identity", d: "A six-note motif that survived being put on hold." },
    ],
    next: { slug: "paperbound", title: "Paperbound.", sub: "An independent press gets louder." },
  },
};

const Project = () => {
  const { slug = "veldt" } = useParams();
  const c = cases[slug] ?? cases.veldt;
  const nextProject = PROJECTS.find(p => p.slug === c.next.slug) ?? PROJECTS[1];

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
                <h1 className="font-display leading-[0.92]" style={{ fontSize: "clamp(60px,11vw,180px)", letterSpacing: "-0.04em" }}>
                  {c.title}<br />
                  <span className="italic-display text-signal">{c.italicLine}</span><br />
                  {c.trail}
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.16} className="md:col-span-4 space-y-6">
              <p className="text-lg text-mute-2 leading-relaxed">{c.intro}</p>
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

      {/* STATS */}
      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-4 gap-6">
          {c.stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.06} className="plate rounded-lg p-7">
              <div className="font-display text-6xl">{s.v}</div>
              <div className="h-eyebrow text-mute mt-3">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-6 md:px-10 py-28">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3"><div className="h-eyebrow text-mute">§ 01 · The problem</div></div>
          <Reveal className="md:col-span-9">
            <p className="font-display text-3xl md:text-5xl leading-[1.1]">{c.problem}</p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-10 py-10">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-12 gap-6">
          <Reveal className="md:col-span-7 plate rounded-lg overflow-hidden aspect-[4/3] relative">
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#3d2712,#0a0a0b)" }} />
            <div className="absolute inset-0 grid place-items-center p-10 text-center">
              <div>
                <div className="h-eyebrow text-signal mb-4">Wordmark · Primary</div>
                <div className="italic-display text-white" style={{ fontSize: "clamp(72px,10vw,180px)", lineHeight: 0.9 }}>
                  {c.title.replace("—", "")}<span className="not-italic font-display text-signal">◐</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 plate rounded-lg overflow-hidden aspect-[4/3] relative">
            <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 60%, hsl(var(--signal)), #0a0a0b 70%)" }} />
            <div className="absolute inset-0 grid place-items-center">
              <svg viewBox="0 0 200 200" className="w-2/3">
                <g stroke="hsl(var(--cream))" fill="none" strokeWidth="1">
                  <circle cx="100" cy="100" r="78" /><circle cx="100" cy="100" r="54" /><circle cx="100" cy="100" r="30" />
                </g>
                <text x="100" y="20" fill="currentColor" fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle" letterSpacing="2" className="text-cream">{c.title.replace("—", "").toUpperCase()} · 2026</text>
              </svg>
            </div>
          </Reveal>
          <Reveal className="md:col-span-5 plate rounded-lg overflow-hidden aspect-[4/3] relative">
            <div className="absolute inset-0 bg-cream" />
            <div className="absolute inset-0 p-10 text-ink flex flex-col justify-between">
              <div className="h-eyebrow">Menu · Summer</div>
              <div>
                <div className="italic-display text-5xl">Tarragon, raw beet,<br />a little smoke.</div>
                <div className="h-eyebrow mt-4 opacity-60">€22 · Plates 01–12</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 plate rounded-lg overflow-hidden aspect-[4/3] relative">
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#FF5A1F,#C23E10)" }} />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-ink text-center">
                <div className="h-eyebrow mb-6 opacity-70">Color · Signal Orange</div>
                <div className="font-display" style={{ fontSize: "clamp(72px,9vw,160px)", lineHeight: 0.9 }}>#FF5A1F</div>
                <div className="h-eyebrow mt-4 opacity-70">Paint · Print · Uniform</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PULLQUOTE */}
      <section className="px-6 md:px-10 py-28">
        <div className="mx-auto max-w-[1200px] text-center">
          <svg width="30" height="30" viewBox="0 0 22 22" className="text-signal mx-auto mb-8" fill="currentColor">
            <path d="M0 12 C0 6 3 2 9 0 L10 3 C6 5 5 7 5 10 H9 V22 H0 Z M13 12 C13 6 16 2 22 0 L22 3 C18 5 17 7 17 10 H22 V22 H13 Z" />
          </svg>
          <Reveal>
            <blockquote className="font-display text-3xl md:text-5xl leading-[1.1]">{c.pull.q}</blockquote>
          </Reveal>
          <div className="mt-8 h-eyebrow text-mute">{c.pull.n}</div>
        </div>
      </section>

      {/* FULL BLEED */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative overflow-hidden rounded-lg plate aspect-[21/9]">
            <div className="absolute inset-0" style={{ background: "conic-gradient(from 200deg at 50% 60%, #FF5A1F, #3d2712, #0a0a0b, #FF5A1F)" }} />
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <div className="h-eyebrow text-white/70 mb-4">Season 01 · Launch film still</div>
                <div className="italic-display text-white" style={{ fontSize: "clamp(60px,10vw,160px)", lineHeight: 0.9 }}>A garden,<br />overheard.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHIPPED */}
      <section className="px-6 md:px-10 py-28">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <div className="h-eyebrow text-mute mb-3">§ 02 · Shipped</div>
            <Reveal><h2 className="font-display text-4xl md:text-5xl leading-tight">What we <span className="italic-display text-signal">handed over.</span></h2></Reveal>
          </div>
          <div className="md:col-span-9 grid sm:grid-cols-2 gap-6">
            {c.shipped.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.06} className="plate rounded-lg p-7">
                <div className="font-display text-2xl mb-2">{s.t}</div>
                <p className="text-sm text-mute-2 leading-relaxed">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-12 overflow-hidden border-y border-foreground/10">
        <div className="flex whitespace-nowrap marquee-track" style={{ width: "max-content" }}>
          {[0, 1].map(k => (
            <div key={k} className="flex items-center gap-10 px-8 font-display italic-display" style={{ fontSize: "clamp(60px,12vw,180px)", lineHeight: 0.9 }}>
              <span>{c.title.replace("—", "")} 2026</span>
              <span className="text-signal">◐</span>
              <span>Next case →</span>
              <span className="text-signal">◐</span>
            </div>
          ))}
        </div>
      </section>

      {/* NEXT */}
      <section className="px-6 md:px-10 py-28">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4">
            <div className="h-eyebrow text-mute mb-3">Next case</div>
            <div className="font-display text-5xl">{c.next.title}<span className="italic-display text-signal">.</span></div>
            <p className="text-mute-2 mt-3">{c.next.sub}</p>
            <div className="mt-8">
              <Link to={`/projects/${c.next.slug}`}>
                <ButtonWithIcon 
                  text="Read the case" 
                  variant="default" 
                  className="bg-signal text-ink"
                />
              </Link>
            </div>
          </div>
          <Link to={`/projects/${c.next.slug}`} className="md:col-span-8 block relative overflow-hidden rounded-lg plate aspect-[16/9] group">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: `radial-gradient(700px 400px at 30% 80%, ${nextProject.c1}55, transparent 60%), linear-gradient(135deg, ${nextProject.c2}, #05080C)` }} />
            <div className="absolute inset-0 grid place-items-center">
              <div className="italic-display text-white/90" style={{ fontSize: "clamp(60px,10vw,160px)", lineHeight: 0.9 }}>
                {c.next.title}
              </div>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Project;
