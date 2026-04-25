"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { SectionContainer } from "@/components/ui/section-container";

/* ── Card data ───────────────────────────────────────────────── */
const CARDS = [
  {
    n: "01", title: "Brand Identity",
    desc: "We dig into who you are, what you stand for, and where you're headed — then design & build a visual system that fits your brand like it was always meant to look this way.",
    tags: ["Strategy", "Naming", "Identity", "Guidelines"],
  },
  {
    n: "02", title: "Product Design",
    desc: "UI/UX built around your users. We present the designs, walk through them together, and keep refining until every screen feels exactly right.",
    tags: ["UX", "UI", "Prototyping", "Handoff"],
  },
  {
    n: "03", title: "Website",
    desc: "We plan before we build. Every decision — structure, stack, content — is intentional, then executed to the highest standard. We do any changes required before and even after deployment.",
    tags: ["Architecture", "Development", "Testing", "Launch"],
  },
  {
    n: "04", title: "Performance",
    desc: "We don't hand off and disappear. SEO, speed, and post-launch support — we stay invested in how your site actually performs.",
    tags: ["SEO", "Analytics", "Speed", "Retention"],
  },
] as const;

const VP = { once: true, margin: "0px 0px -60px 0px" } as const;

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
const OrbitVisual = ({ active }: { active: boolean }) => {
  const cx0 = 160, cy0 = 130, orbitR = 82;
  const items = [
    { label: "Strategy",   angle: -Math.PI / 2, pw: 78 },
    { label: "Naming",     angle: 0,            pw: 64 },
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

      {/* spokes — fade in on scroll */}
      {items.map(({ cx, cy }, i) => (
        <motion.line key={i} x1={cx0} y1={cy0} x2={cx} y2={cy}
          stroke="currentColor" strokeWidth={0.5}
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.15 }}
          viewport={VP} transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
        />
      ))}

      {/* orbit ring — static dash, no loop */}
      <motion.circle cx={cx0} cy={cy0} r={orbitR}
        fill="none" stroke="currentColor"
        strokeWidth={0.9} strokeDasharray="3 7"
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }}
        viewport={VP} transition={{ duration: 0.8, delay: 0.1 }}
      />

      {/* label pills — slide in on scroll */}
      {items.map(({ label, cx, cy, px, pw }, i) => (
        <motion.g key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VP}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <rect x={px} y={cy - 13} width={pw} height={26} rx={13}
            fill="hsl(var(--background))" fillOpacity={0.9}
            stroke="currentColor" strokeWidth={0.9}
            strokeOpacity={active ? 0.5 : 0.22}
            style={{ transition: "stroke-opacity 0.3s ease" }}
          />
          <text x={cx} y={cy + 4.5}
            textAnchor="middle" fontSize={9} fill="currentColor"
            fillOpacity={active ? 0.9 : 0.72}
            fontFamily="'JetBrains Mono', monospace" letterSpacing="0.08em"
            style={{ transition: "fill-opacity 0.3s ease" }}
          >
            {label.toUpperCase()}
          </text>
        </motion.g>
      ))}

      {/* center hub — scales on hover */}
      <motion.g
        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
        viewport={VP}
        style={{ transformOrigin: `${cx0}px ${cy0}px` }}
        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <motion.circle cx={cx0} cy={cy0} r={22} fill="hsl(var(--signal))"
          style={{ transformOrigin: `${cx0}px ${cy0}px` }}
          animate={{ scale: active ? 26/22 : 1 }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        />
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
const FlowVisual = ({ active }: { active: boolean }) => {
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

      {/* spine draws once on scroll */}
      <motion.path d={`M ${spineX} ${yTop} L ${spineX} ${yBot}`}
        fill="none" stroke="hsl(var(--signal))" strokeWidth={1.8} strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={VP} transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      />

      {/* spine dots — pop in once */}
      {ys.map((y, i) => (
        <motion.g key={`sd-${i}`}
          style={{ transformOrigin: `${spineX}px ${y}px` }}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={VP}
          transition={{ duration: 0.35, delay: 0.5 + i * 0.12, ease: "backOut" }}
        >
          <circle cx={spineX} cy={y} r={6}
            fill="hsl(var(--background))" stroke="hsl(var(--signal))" strokeWidth={1.8} />
          <circle cx={spineX} cy={y} r={2.6} fill="hsl(var(--signal))" />
        </motion.g>
      ))}

      {/* pills — slide in once, highlight on hover */}
      {steps.map((step, i) => {
        const y   = ys[i];
        const isR = step.side === "right";
        const px  = isR ? pillR : pillL;
        return (
          <motion.g key={step.label}
            initial={{ opacity: 0, x: isR ? -16 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.55 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <line
              x1={isR ? spineX : px + pillW} y1={y}
              x2={isR ? px : spineX}         y2={y}
              stroke="currentColor" strokeWidth={0.9} opacity={0.22}
            />
            <rect x={px} y={y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2}
              fill="hsl(var(--background))" fillOpacity={0.92}
              stroke="currentColor" strokeWidth={0.9}
              strokeOpacity={active ? 0.45 : 0.22}
              style={{ transition: "stroke-opacity 0.3s ease" }}
            />
            <text x={px + pillW / 2} y={y + 5}
              textAnchor="middle" fontSize={9.5} fill="currentColor"
              fillOpacity={active ? 0.9 : 0.72}
              fontFamily="'JetBrains Mono', monospace" letterSpacing="0.05em"
              style={{ transition: "fill-opacity 0.3s ease" }}
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
const ArchVisual = ({ active }: { active: boolean }) => {
  const layers = [
    { label: "ARCHITECTURE", w: 240, signal: false },
    { label: "DEVELOPMENT",  w: 196, signal: false },
    { label: "TESTING",      w: 152, signal: false },
    { label: "LAUNCH",       w: 112, signal: true  },
  ];
  const lh = 36, gap = 8;
  const baseY = 208;
  // hover: spread layers apart slightly
  const ys = layers.map((_, i) => baseY - i * (lh + gap) - (active ? i * 5 : 0));

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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            animate={{ y: active ? -i * 5 : 0 }}
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
              fillOpacity={layer.signal ? 1 : 0.6}
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
const MetricsVisual = ({ active }: { active: boolean }) => {
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

      {/* bars — grow once on scroll */}
      {bars.map((bar, i) => (
        <g key={bar.label}>
          <motion.rect
            x={xs[i]} y={base - bar.h} width={bw} height={bar.h} rx={5}
            fill="currentColor"
            fillOpacity={active ? 0.16 : 0.08}
            stroke="currentColor" strokeOpacity={0.22} strokeWidth={0.9}
            style={{ 
              transition: "fill-opacity 0.3s ease",
              transformOrigin: `${xs[i] + bw / 2}px ${base}px`
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VP}
            transition={{ duration: 0.85, delay: 0.2 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          />
          {/* percentage — flies up once */}
          <motion.text
            x={cxs[i]} textAnchor="middle" fontSize={9}
            fill="hsl(var(--signal))" fillOpacity={0.95}
            fontFamily="'JetBrains Mono', monospace" letterSpacing="0.04em"
            initial={{ opacity: 0, y: base - bar.h + 8 }}
            whileInView={{ opacity: 1, y: base - bar.h - 10 }}
            viewport={VP}
            transition={{ duration: 0.45, delay: 1.1 + i * 0.08 }}
          >
            {bar.pct}
          </motion.text>
          <text x={cxs[i]} y={base + 18}
            textAnchor="middle" fontSize={8.5} fill="currentColor" fillOpacity={0.5}
            fontFamily="'JetBrains Mono', monospace" letterSpacing="0.06em"
          >
            {bar.label.toUpperCase()}
          </text>
        </g>
      ))}

      {/* trend line — draws once */}
      <motion.path d={trendD} fill="none"
        stroke="hsl(var(--signal))" strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={VP}
        transition={{ duration: 1.1, delay: 0.75, ease: "easeInOut" }}
      />

      {/* trend dots — pop in once, static after */}
      {pts.map((p, i) => (
        <motion.circle key={i} cx={p.x} cy={p.y} r={4}
          fill="hsl(var(--signal))"
          style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={VP}
          transition={{ duration: 0.3, delay: 0.8 + i * 0.24, ease: "backOut" }}
        />
      ))}
    </svg>
  );
};

/* ── Card ────────────────────────────────────────────────────── */
type CardData = (typeof CARDS)[number];
const VISUALS = [OrbitVisual, FlowVisual, ArchVisual, MetricsVisual] as const;

const ServiceCard = ({ data, index }: { data: CardData; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const Visual = VISUALS[index];
  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.75, delay: index * 0.09, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative rounded-2xl border border-foreground/10 bg-foreground/[0.025]
                 overflow-hidden cursor-pointer hover:border-signal/30
                 hover:shadow-[0_20px_60px_-20px_hsl(17_100%_56%/0.18)]
                 transition-[border-color,box-shadow] duration-500"
    >
      <div className="relative h-[180px] md:h-[220px] lg:h-[240px] text-foreground overflow-hidden">
        <Visual active={hovered} />
      </div>

      <div className="h-px bg-foreground/[0.08]" />

      <div className="p-4 md:p-5">
        <div className="h-eyebrow text-mute mb-2">{data.n}</div>
        <h3 className="font-display text-[1.35rem] md:text-[1.6rem] leading-[1.08] mb-2
                       group-hover:text-signal transition-colors duration-300">
          {data.title}
        </h3>
        <p className="text-mute-2 text-xs md:text-sm leading-relaxed mb-3 max-w-[52ch]">{data.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {data.tags.map((tag: string) => (
            <span key={tag}
              className="h-eyebrow text-mute border border-foreground/10 rounded-full
                         px-2 py-0.5 text-[9px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

/* ── Section ─────────────────────────────────────────────────── */
export const Process = () => (
  <section id="process" className="relative py-10 md:py-16">
    <SectionContainer>
      <div className="grid md:grid-cols-12 gap-10 mb-14">
        <div className="md:col-span-3">
          <div className="h-eyebrow text-mute mb-3">§ 02 · Process</div>
        </div>
        <div className="md:col-span-9">
          <Reveal>
            <h2 className="h-section font-display">
              Process from,{" "}
              <span className="italic-display text-signal">Start‑to‑end.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6 font-semibold lg:px-32">
        {CARDS.map((card, i) => (
          <ServiceCard key={card.n} data={card} index={i} />
        ))}
      </div>
    </SectionContainer>
  </section>
);
