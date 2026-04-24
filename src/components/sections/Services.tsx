"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../Reveal";

/* ── Card data ───────────────────────────────────────────────── */
const CARDS = [
  {
    n: "01", title: "Brand Identity",
    desc: "We dig into who you are, what you stand for, and where you're headed — then design a visual system that fits your brand like it was always meant to look this way.",
    tags: ["Strategy", "Naming", "Identity", "Guidelines"],
  },
  {
    n: "02", title: "Product Design",
    desc: "UI/UX built around your users. We present the designs, walk through them together, and keep refining until every screen feels exactly right.",
    tags: ["UX", "UI", "Prototyping", "Handoff"],
  },
  {
    n: "03", title: "Website",
    desc: "We plan before we build. Every decision — structure, stack, content — is intentional, then executed to the highest standard.",
    tags: ["Architecture", "Build", "CMS", "Launch"],
  },
  {
    n: "04", title: "Performance",
    desc: "We don't hand off and disappear. SEO, speed, and post-launch support — we stay invested in how your site actually performs.",
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
const OrbitVisual = ({ active }: { active: boolean }) => {
  const rm = useReducedMotion();
  const cx0 = 160, cy0 = 130, orbitR = 82;
  const circ = 2 * Math.PI * orbitR;
  const items = [
    { label: "Strategy",   angle: -Math.PI / 2,   pw: 78 },
    { label: "Naming",     angle: 0,              pw: 64 },
    { label: "Identity",   angle: Math.PI / 2,    pw: 78 },
    { label: "Guidelines", angle: Math.PI,        pw: 86 },
  ].map((it) => {
    const cx = cx0 + orbitR * Math.cos(it.angle);
    const cy = cy0 + orbitR * Math.sin(it.angle);
    return { ...it, cx, cy, px: cx - it.pw / 2 };
  });

  // Smooth orbit path for satellite (17 points)
  const SAT_STEPS = 24;
  const satCx = Array.from({ length: SAT_STEPS + 1 }, (_, i) =>
    cx0 + orbitR * Math.cos(-Math.PI / 2 + (2 * Math.PI * i) / SAT_STEPS)
  );
  const satCy = Array.from({ length: SAT_STEPS + 1 }, (_, i) =>
    cy0 + orbitR * Math.sin(-Math.PI / 2 + (2 * Math.PI * i) / SAT_STEPS)
  );

  return (
    <svg viewBox="0 0 320 260" className="w-full h-full" aria-hidden preserveAspectRatio="xMidYMid meet">
      <DotBg id="db-orbit" />

      {/* spokes */}
      {items.map(({ cx, cy }, i) => (
        <line key={i} x1={cx0} y1={cy0} x2={cx} y2={cy}
          stroke="currentColor" strokeWidth={0.5} opacity={0.15} />
      ))}

      {/* orbit ring with flowing dash */}
      <motion.circle cx={cx0} cy={cy0} r={orbitR}
        fill="none" stroke="currentColor"
        strokeWidth={0.9} strokeDasharray="3 7" opacity={0.3}
        animate={!rm ? { strokeDashoffset: [0, -circ] } : undefined}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      {/* pulse ring from center */}
      {!rm && (
        <motion.circle cx={cx0} cy={cy0}
          fill="none" stroke="hsl(var(--signal))" strokeWidth={1.2}
          animate={{ r: [22, 52], opacity: [0.55, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* traveling satellite */}
      {!rm && (
        <motion.circle r={4} fill="hsl(var(--signal))"
          initial={{ cx: satCx[0], cy: satCy[0] }}
          animate={{ cx: satCx, cy: satCy }}
          transition={{
            duration: 16, repeat: Infinity, ease: "linear",
            times: Array.from({ length: SAT_STEPS + 1 }, (_, i) => i / SAT_STEPS),
          }}
        />
      )}

      {/* orbit label pills */}
      {items.map(({ label, cx, cy, px, pw }, i) => (
        <motion.g key={label}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          transition={{ duration: 0.55, delay: 0.4 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <rect x={px} y={cy - 13} width={pw} height={26} rx={13}
            fill="hsl(var(--background))" fillOpacity={0.9}
            stroke="currentColor" strokeWidth={0.9}
            strokeOpacity={active ? 0.45 : 0.22}
            style={{ transition: "stroke-opacity 0.35s ease" }}
          />
          <text x={cx} y={cy + 4.5}
            textAnchor="middle" fontSize={9} fill="currentColor" fillOpacity={0.75}
            fontFamily="'JetBrains Mono', monospace" letterSpacing="0.08em"
          >
            {label.toUpperCase()}
          </text>
        </motion.g>
      ))}

      {/* center hub */}
      <motion.circle cx={cx0} cy={cy0} r={22} fill="hsl(var(--signal))"
        animate={{ r: active ? 26 : 22 }}
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      />
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
  const rm = useReducedMotion();
  const steps = [
    { label: "UX Research", side: "right" as const },
    { label: "UI Design",   side: "left"  as const },
    { label: "Prototype",   side: "right" as const },
    { label: "Handoff",     side: "left"  as const },
  ];
  const spineX = 160;
  const yTop = 28, yBot = 234;
  const ys   = [52, 108, 164, 218];
  const pillW = 92, pillH = 28;
  const pillR = 170;
  const pillL = 58;

  return (
    <svg viewBox="0 0 320 260" className="w-full h-full" aria-hidden>
      <DotBg id="db-flow" />

      {/* spine draws in */}
      <motion.path d={`M ${spineX} ${yTop} L ${spineX} ${yBot}`}
        fill="none" stroke="hsl(var(--signal))" strokeWidth={1.8} strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.95, ease: [0.2, 0.8, 0.2, 1] }}
      />

      {/* flowing particles along spine */}
      {!rm && [0, 1, 2].map((i) => (
        <motion.circle key={`p-${i}`}
          cx={spineX} r={2.8} fill="hsl(var(--signal))"
          initial={{ cy: yTop, opacity: 0 }}
          animate={{
            cy: [yTop, yBot],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.6,
            delay: 1.6 + i * 0.9,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.1, 0.9, 1],
          }}
        />
      ))}

      {/* spine dots */}
      {ys.map((y, i) => (
        <motion.g key={`sd-${i}`}
          style={{ transformOrigin: `${spineX}px ${y}px` }}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.65 + i * 0.14, ease: "backOut" }}
        >
          <circle cx={spineX} cy={y} r={6}
            fill="hsl(var(--background))" stroke="hsl(var(--signal))" strokeWidth={1.8} />
          <circle cx={spineX} cy={y} r={2.6} fill="hsl(var(--signal))" />
        </motion.g>
      ))}

      {/* pills */}
      {steps.map((step, i) => {
        const y   = ys[i];
        const isR = step.side === "right";
        const px  = isR ? pillR : pillL;
        return (
          <motion.g key={step.label}
            initial={{ opacity: 0, x: isR ? -18 : 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.6 + i * 0.14, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <line
              x1={isR ? spineX : px + pillW} y1={y}
              x2={isR ? px : spineX}         y2={y}
              stroke="currentColor" strokeWidth={0.9} opacity={0.22}
            />
            <rect x={px} y={y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2}
              fill="hsl(var(--background))" fillOpacity={0.92}
              stroke="currentColor" strokeWidth={0.9}
              strokeOpacity={active ? 0.4 : 0.22}
              style={{ transition: "stroke-opacity 0.3s ease" }}
            />
            <text x={px + pillW / 2} y={y + 5}
              textAnchor="middle" fontSize={9.5} fill="currentColor" fillOpacity={0.78}
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
const ArchVisual = ({ active }: { active: boolean }) => {
  const rm = useReducedMotion();
  const layers = [
    { label: "ARCHITECTURE", w: 240, signal: false },
    { label: "BUILD",        w: 196, signal: false },
    { label: "CMS",          w: 152, signal: false },
    { label: "LAUNCH",       w: 112, signal: true  },
  ];
  const lh = 36;
  const gap = 8;
  const spread = active ? 4 : 0;
  const baseY = 208;
  const ys = layers.map((_, i) => baseY - i * (lh + gap) - i * spread);

  const launchIdx = 3;
  const launchW = layers[launchIdx].w;
  const launchX = (320 - launchW) / 2;
  const launchY = ys[launchIdx];

  return (
    <svg viewBox="0 0 320 260" className="w-full h-full" aria-hidden>
      <DotBg id="db-arch" />

      {/* ground rule */}
      <line x1={40} y1={baseY + lh + 4} x2={280} y2={baseY + lh + 4}
        stroke="currentColor" strokeWidth={0.5} opacity={0.18} />
      <line x1={40} y1={baseY + lh + 8} x2={280} y2={baseY + lh + 8}
        stroke="currentColor" strokeWidth={0.4} opacity={0.1} />

      <defs>
        <clipPath id="launch-clip">
          <rect x={launchX} y={launchY} width={launchW} height={lh} rx={8} />
        </clipPath>
        <linearGradient id="shimmer-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="0.45" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {layers.map((layer, i) => {
        const y = ys[i];
        const x = (320 - layer.w) / 2;
        return (
          <motion.g key={layer.label}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ transition: "transform 0.4s ease" }}
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

      {/* shimmer sweep on LAUNCH bar */}
      {!rm && (
        <g clipPath="url(#launch-clip)">
          <motion.rect
            y={launchY} width={80} height={lh}
            fill="url(#shimmer-grad)"
            initial={{ x: launchX - 80 }}
            animate={{ x: [launchX - 80, launchX + launchW] }}
            transition={{
              duration: 1.8, repeat: Infinity, repeatDelay: 2.4,
              delay: 1.6, ease: "easeInOut",
            }}
          />
        </g>
      )}
    </svg>
  );
};

/* ── 04 · Performance — Metrics bars ────────────────────────── */
const MetricsVisual = ({ active }: { active: boolean }) => {
  const rm = useReducedMotion();
  const bars = [
    { label: "SEO",       h: 74,  pct: "+42%" },
    { label: "Analytics", h: 106, pct: "+58%" },
    { label: "Speed",     h: 130, pct: "+76%" },
    { label: "Retention", h: 154, pct: "+91%" },
  ];
  const base = 208;
  const bw   = 44;
  const xs   = [48, 108, 172, 232];
  const cxs  = xs.map((x) => x + bw / 2);
  const pts  = bars.map((b, i) => ({ x: cxs[i], y: base - b.h }));
  const trendD = `M ${pts.map((p) => `${p.x},${p.y}`).join(" L ")}`;

  return (
    <svg viewBox="0 0 320 260" className="w-full h-full" aria-hidden>
      <DotBg id="db-metrics" />

      {/* grid lines */}
      {[60, 120, 180].map((y) => (
        <line key={y} x1={34} y1={y} x2={290} y2={y}
          stroke="currentColor" strokeWidth={0.4} opacity={0.08}
          strokeDasharray="2 4" />
      ))}

      {/* baseline */}
      <line x1={34} y1={base} x2={290} y2={base}
        stroke="currentColor" strokeWidth={0.6} opacity={0.22} />

      {/* bars */}
      {bars.map((bar, i) => (
        <g key={bar.label}>
          <motion.rect
            x={xs[i]} width={bw} rx={5}
            fill="currentColor"
            fillOpacity={active ? 0.15 : 0.08}
            stroke="currentColor" strokeOpacity={0.22} strokeWidth={0.9}
            style={{ transition: "fill-opacity 0.3s ease" }}
            initial={{ height: 0, y: base }}
            whileInView={{ height: bar.h, y: base - bar.h }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          />
          {/* percentage */}
          <motion.text
            x={cxs[i]} textAnchor="middle" fontSize={9}
            fill="hsl(var(--signal))" fillOpacity={0.95}
            fontFamily="'JetBrains Mono', monospace" letterSpacing="0.04em"
            initial={{ opacity: 0, y: base - bar.h + 6 }}
            whileInView={{ opacity: 1, y: base - bar.h - 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1 + i * 0.09 }}
          >
            {bar.pct}
          </motion.text>
          {/* axis label */}
          <text x={cxs[i]} y={base + 18}
            textAnchor="middle" fontSize={8.5} fill="currentColor" fillOpacity={0.5}
            fontFamily="'JetBrains Mono', monospace" letterSpacing="0.06em"
          >
            {bar.label.toUpperCase()}
          </text>
        </g>
      ))}

      {/* trend line */}
      <motion.path d={trendD} fill="none"
        stroke="hsl(var(--signal))" strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.75, ease: "easeInOut" }}
      />

      {/* trend dots + pulse rings */}
      {pts.map((p, i) => (
        <g key={i}>
          <motion.circle cx={p.x} cy={p.y} r={4}
            fill="hsl(var(--signal))"
            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
            initial={{ scale: 0 }} whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.32, delay: 0.78 + i * 0.26, ease: "backOut" }}
          />
          {!rm && (
            <motion.circle cx={p.x} cy={p.y}
              fill="none" stroke="hsl(var(--signal))" strokeWidth={1.2}
              animate={{ r: [4, 12], opacity: [0.6, 0] }}
              transition={{
                duration: 1.9, repeat: Infinity,
                delay: 2.2 + i * 0.35, ease: "easeOut",
              }}
            />
          )}
        </g>
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
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.8, delay: index * 0.09, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative rounded-2xl border border-foreground/10 bg-foreground/[0.025]
                 overflow-hidden cursor-pointer hover:border-signal/30
                 hover:shadow-[0_20px_60px_-20px_hsl(17_100%_56%/0.18)]
                 transition-[border-color,box-shadow] duration-500"
    >
      {/* visual */}
      <div className="relative h-[210px] md:h-[270px] lg:h-[300px] text-foreground overflow-hidden">
        <Visual active={hovered} />
      </div>

      <div className="h-px bg-foreground/[0.08]" />

      {/* content */}
      <div className="p-5 md:p-6">
        <div className="h-eyebrow text-mute mb-3">{data.n}</div>
        <h3 className="font-display text-[1.55rem] md:text-[1.9rem] leading-[1.08] mb-3
                       group-hover:text-signal transition-colors duration-300">
          {data.title}
        </h3>
        <p className="text-mute-2 text-sm leading-relaxed mb-4 max-w-[52ch]">{data.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {data.tags.map((tag: string) => (
            <span key={tag}
              className="h-eyebrow text-mute border border-foreground/10 rounded-full
                         px-2.5 py-1 text-[9.5px]"
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
export const Services = () => (
  <section id="services" className="relative px-6 md:px-10 py-12 md:py-20">
    <div className="mx-auto max-w-[1600px]">
      <div className="grid md:grid-cols-12 gap-10 mb-14">
        <div className="md:col-span-3">
          <div className="h-eyebrow text-mute mb-3">§ 02 · Services</div>
        </div>
        <div className="md:col-span-9">
          <Reveal>
            <h2 className="h-section font-display">
              What we make,{" "}
              <span className="italic-display text-signal">end‑to‑end.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {CARDS.map((card, i) => (
          <ServiceCard key={card.n} data={card} index={i} />
        ))}
      </div>
    </div>
  </section>
);
