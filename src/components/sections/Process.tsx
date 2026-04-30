"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/* ── Card data ───────────────────────────────────────────────── */
const CARDS = [
  {
    n: "01", title: "Brand Identity",
    desc: "We dig into who you are, what you stand for, and learn about you business and industry — then design a visual system that fits your business like it was always meant to look this way.",
    tags: ["Strategy", "Planning", "Identity", "Guidelines"],
  },
  {
    n: "02", title: "Product Design",
    desc: "UI/UX built around your users. We present the designs, walk through them together, and keep refining until every screen feels exactly right.",
    tags: ["UX", "UI", "Prototyping", "Handoff"],
  },
  {
    n: "03", title: "Development",
    desc: "We plan before we build. Every decision , design, stack, content — is intentional, then executed to the highest standard. We do any changes required before and even after deployment.",
    tags: ["Architecture", "Development", "Testing", "Launch"],
  },
  {
    n: "04", title: "Performance",
    desc: "We don't hand off and disappear. SEO, speed, maintainance, and post-launch support — we stay invested in how your site actually performs.",
    tags: ["SEO", "Analytics", "Speed", "Retention"],
  },
] as const;

/* ── Shared: dot grid bg ─────────────────────────────────────── */
const DotBg = ({ id }: { id: string }) => (
  <>
    <defs>
      <pattern id={id} x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx={0.9} cy={0.9} r={0.9} fill="currentColor" opacity={0.16} />
      </pattern>
    </defs>
    <rect width={320} height={260} fill={`url(#${id})`} />
  </>
);

/* ── 01 · Brand Identity — Orbital hub ──────────────────────── */
const OrbitVisual = ({ inView }: { inView: boolean }) => {
  const cx0 = 160, cy0 = 130, orbitR = 82;
  const items = [
    { label: "Strategy",   angle: -Math.PI / 2, pw: 78 },
    { label: "Planning",   angle: 0,            pw: 78 },
    { label: "Identity",   angle: Math.PI / 2,  pw: 78 },
    { label: "Guidelines", angle: Math.PI,      pw: 86 },
  ].map((it) => {
    const cx = cx0 + orbitR * Math.cos(it.angle);
    const cy = cy0 + orbitR * Math.sin(it.angle);
    return { ...it, cx, cy, px: cx - it.pw / 2 };
  });

  return (
    <svg viewBox="0 0 320 260" className="w-full h-full" aria-hidden>
      <DotBg id="db-orbit" />
      {items.map(({ cx, cy }, i) => (
        <motion.line key={i} x1={cx0} y1={cy0} x2={cx} y2={cy}
          stroke="currentColor" strokeWidth={0.5}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 0.15 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
        />
      ))}
      <motion.circle cx={cx0} cy={cy0} r={orbitR}
        fill="none" stroke="currentColor"
        strokeWidth={0.9} strokeDasharray="3 7"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 0.3 : 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      />
      {items.map(({ label, cx, cy, px, pw }, i) => (
        <motion.g key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <rect x={px} y={cy - 13} width={pw} height={26} rx={13}
            fill="hsl(var(--background))" fillOpacity={0.9}
            stroke="currentColor" strokeWidth={0.9} strokeOpacity={0.22}
          />
          <text x={cx} y={cy + 4.5}
            textAnchor="middle" fontSize={9} fill="currentColor"
            fontFamily="'JetBrains Mono', monospace" letterSpacing="0.08em"
          >
            {label.toUpperCase()}
          </text>
        </motion.g>
      ))}
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: inView ? 1 : 0 }}
        style={{ transformOrigin: `${cx0}px ${cy0}px` }}
        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <circle cx={cx0} cy={cy0} r={22} fill="hsl(var(--signal))" />
      </motion.g>
      <text x={cx0} y={cy0 + 3.5} textAnchor="middle" fontSize={8.5}
        fill="white" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.12em"
        style={{ pointerEvents: "none" }}
      >
        BRAND
      </text>
    </svg>
  );
};

/* ── 02 · Product Design — Zigzag flow ──────────────────────── */
const FlowVisual = ({ inView }: { inView: boolean }) => {
  const steps = [
    { label: "UX Research", side: "right" as const },
    { label: "UI Design",   side: "left"  as const },
    { label: "Prototype",   side: "right" as const },
    { label: "Handoff",     side: "left"  as const },
  ];
  const spineX = 160;
  const yTop = 28, yBot = 234;
  const ys    = [52, 108, 164, 218];
  const pillW = 92, pillH = 28;
  const pillR = 170, pillL = 58;

  return (
    <svg viewBox="0 0 320 260" className="w-full h-full" aria-hidden>
      <DotBg id="db-flow" />
      <motion.path d={`M ${spineX} ${yTop} L ${spineX} ${yBot}`}
        fill="none" stroke="hsl(var(--signal))" strokeWidth={1.8} strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      />
      {ys.map((y, i) => (
        <motion.g key={`sd-${i}`}
          style={{ transformOrigin: `${spineX}px ${y}px` }}
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.35, delay: 0.5 + i * 0.12, ease: "backOut" }}
        >
          <circle cx={spineX} cy={y} r={6}
            fill="hsl(var(--background))" stroke="hsl(var(--signal))" strokeWidth={1.8} />
          <circle cx={spineX} cy={y} r={2.6} fill="hsl(var(--signal))" />
        </motion.g>
      ))}
      {steps.map((step, i) => {
        const y   = ys[i];
        const isR = step.side === "right";
        const px  = isR ? pillR : pillL;
        return (
          <motion.g key={step.label}
            initial={{ opacity: 0, x: isR ? -16 : 16 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isR ? -16 : 16 }}
            transition={{ duration: 0.5, delay: 0.55 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <line
              x1={isR ? spineX : px + pillW} y1={y}
              x2={isR ? px : spineX}         y2={y}
              stroke="currentColor" strokeWidth={0.9} opacity={0.22}
            />
            <rect x={px} y={y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2}
              fill="hsl(var(--background))" fillOpacity={0.92}
              stroke="currentColor" strokeWidth={0.9} strokeOpacity={0.22}
            />
            <text x={px + pillW / 2} y={y + 5}
              textAnchor="middle" fontSize={9.5} fill="currentColor"
              fontFamily="'JetBrains Mono', monospace" letterSpacing="0.05em"
            >
              {step.label.toUpperCase()}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
};

/* ── 03 · Website — Architecture stack ──────────────────────── */
const ArchVisual = ({ inView }: { inView: boolean }) => {
  const layers = [
    { label: "ARCHITECTURE", w: 240, signal: false },
    { label: "DEVELOPMENT",  w: 196, signal: false },
    { label: "TESTING",      w: 152, signal: false },
    { label: "LAUNCH",       w: 112, signal: true  },
  ];
  const lh = 36, gap = 8;
  const baseY = 208;
  const ys = layers.map((_, i) => baseY - i * (lh + gap));

  return (
    <svg viewBox="0 0 320 260" className="w-full h-full" aria-hidden>
      <DotBg id="db-arch" />
      <line x1={40} y1={baseY + lh + 4} x2={280} y2={baseY + lh + 4}
        stroke="currentColor" strokeWidth={0.5} opacity={0.18} />
      {layers.map((layer, i) => {
        const y = ys[i];
        const x = (320 - layer.w) / 2;
        return (
          <motion.g key={layer.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <rect x={x} y={y} width={layer.w} height={lh} rx={8}
              fill={layer.signal ? "hsl(var(--signal))" : "currentColor"}
              fillOpacity={layer.signal ? 1 : 0.06 + i * 0.028}
              stroke={layer.signal ? "none" : "currentColor"}
              strokeWidth={0.9} strokeOpacity={0.22}
            />
            <text x={160} y={y + lh / 2 + 4.5}
              textAnchor="middle" fontSize={9.5}
              fill={layer.signal ? "white" : "currentColor"}
              fillOpacity={1}
              fontFamily="'JetBrains Mono', monospace" letterSpacing="0.14em"
            >
              {layer.label}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
};

/* ── 04 · Performance — Metrics bars ────────────────────────── */
const MetricsVisual = ({ inView }: { inView: boolean }) => {
  const bars = [
    { label: "SEO",       h: 74,  pct: "+42%" },
    { label: "Analytics", h: 106, pct: "+58%" },
    { label: "Speed",     h: 130, pct: "+76%" },
    { label: "Retention", h: 154, pct: "+91%" },
  ];
  const base = 208, bw = 44;
  const xs  = [48, 108, 172, 232];
  const cxs = xs.map((x) => x + bw / 2);
  const pts = bars.map((b, i) => ({ x: cxs[i], y: base - b.h }));
  const trendD = `M ${pts.map((p) => `${p.x},${p.y}`).join(" L ")}`;

  return (
    <svg viewBox="0 0 320 260" className="w-full h-full" aria-hidden>
      <DotBg id="db-metrics" />
      {[60, 120, 180].map((y) => (
        <line key={y} x1={34} y1={y} x2={290} y2={y}
          stroke="currentColor" strokeWidth={0.4} opacity={0.08} strokeDasharray="2 4" />
      ))}
      <line x1={34} y1={base} x2={290} y2={base}
        stroke="currentColor" strokeWidth={0.6} opacity={0.22} />
      {bars.map((bar, i) => (
        <g key={bar.label}>
          <motion.rect
            x={xs[i]} y={base - bar.h} width={bw} height={bar.h} rx={5}
            fill="currentColor"
            stroke="currentColor" strokeOpacity={0.22} strokeWidth={0.9}
            style={{ transformOrigin: `${xs[i] + bw / 2}px ${base}px` }}
            initial={{ scaleY: 0, fillOpacity: 0.08 }}
            animate={{ scaleY: inView ? 1 : 0, fillOpacity: 0.08 }}
            transition={{ duration: 0.85, delay: 0.2 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          />
          <motion.text
            x={cxs[i]} textAnchor="middle" fontSize={9}
            fill="hsl(var(--signal))" fillOpacity={0.95}
            fontFamily="'JetBrains Mono', monospace" letterSpacing="0.04em"
            initial={{ opacity: 0, y: base - bar.h + 8 }}
            animate={inView
              ? { opacity: 1, y: base - bar.h - 10 }
              : { opacity: 0, y: base - bar.h + 8 }}
            transition={{ duration: 0.45, delay: 1.1 + i * 0.08 }}
          >
            {bar.pct}
          </motion.text>
          <text x={cxs[i]} y={base + 18}
            textAnchor="middle" fontSize={8.5} fill="currentColor" fillOpacity={1}
            fontFamily="'JetBrains Mono', monospace" letterSpacing="0.06em"
          >
            {bar.label.toUpperCase()}
          </text>
        </g>
      ))}
      <motion.path d={trendD} fill="none"
        stroke="hsl(var(--signal))" strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 1.1, delay: 0.75, ease: "easeInOut" }}
      />
      {pts.map((p, i) => (
        <motion.circle key={i} cx={p.x} cy={p.y} r={4}
          fill="hsl(var(--signal))"
          style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.8 + i * 0.24, ease: "backOut" }}
        />
      ))}
    </svg>
  );
};

const VISUALS = [OrbitVisual, FlowVisual, ArchVisual, MetricsVisual] as const;

/* ── Card ────────────────────────────────────────────────────── */
const ProcessCard = ({
  card,
  index,
  reduced,
}: {
  card: typeof CARDS[number];
  index: number;
  reduced: boolean;
}) => {
  const Visual = VISUALS[index];

  return (
    <motion.article
      className="flex flex-col border border-cream/10 rounded-2xl overflow-hidden bg-ink-2"
      initial={reduced ? false : { opacity: 0, y: 40 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* SVG diagram */}
      <div className="h-44 sm:h-48 w-full text-cream/70 p-4">
        <Visual inView />
      </div>

      {/* Text content */}
      <div className="flex-1 flex flex-col p-5 border-t border-cream/10">
        <div className="flex items-start justify-between mb-2">
          <span className="font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-none text-cream/20 select-none">
            {card.n}
          </span>
          <span className="h-eyebrow text-cream/40 mt-1">§ {card.n}</span>
        </div>
        <h3 className="font-display text-xl md:text-2xl text-cream mb-2 leading-[1.05] [-webkit-text-stroke:0.4px_currentColor]">
          {card.title}
        </h3>
        <p className="text-cream/70 text-sm leading-relaxed mb-4 flex-1">
          {card.desc}
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {card.tags.map((tag: string) => (
            <li
              key={tag}
              className="h-eyebrow text-cream/60 border border-cream/10 rounded-full px-2.5 py-1"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

/* ── Section ─────────────────────────────────────────────────── */
export const Process = () => {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="process" className="relative bg-ink text-cream py-20 md:py-28">
      <SectionContainer>
        <motion.header
          className="mb-14 md:mb-20"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="font-display font-normal leading-[0.95] tracking-tightest text-[clamp(2.75rem,8vw,7rem)] [-webkit-text-stroke:0.4px_currentColor]">
            Process from,{" "}
            <span className="italic text-signal">Start‑to‑end.</span>
          </h2>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {CARDS.map((card, i) => (
            <ProcessCard key={card.n} card={card} index={i} reduced={reduced} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};
