import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../Reveal";
import { SectionContainer } from "@/components/ui/section-container";
import { cn } from "@/lib/utils";
import "../step-animations.css";

/* ── Color constants (match StepIllustration.tsx convention) ─── */
const SIG  = "#FF5A1F";
const SIG2 = "#ff9d7a";
const FG   = "hsl(var(--foreground))";
const INK3 = "hsl(var(--ink-3))";

const VP = { once: true, margin: "0px 0px -60px 0px" } as const;

/* ================================================================
   ILLUSTRATION 1 — Personalised Support
   Five overlapping avatar circles, signal ring on center.
================================================================ */
const PersonalisedIllustration = ({ active }: { active: boolean }) => {
  const avatars = [
    { cx: 86,  color: "#5C748B", label: "A", float: "anim-float-slow", delay: "0.5s" },
    { cx: 116, color: "#8B7355", label: "B", float: "anim-float-mid",  delay: "0.2s" },
    { cx: 156, color: "#6B5B7B", label: "C", float: undefined,         delay: "0s",  isCenter: true },
    { cx: 196, color: "#5C7A5C", label: "D", float: "anim-float-mid",  delay: "0.35s" },
    { cx: 226, color: "#7A5C5C", label: "E", float: "anim-float-slow", delay: "0.7s" },
  ];

  return (
    <svg viewBox="0 0 312 190" className="w-full h-full" aria-hidden="true">
      {/* Ambient glow behind center avatar */}
      <circle cx="156" cy="90" r="36"
        fill={SIG} fillOpacity="0.07"
        className="anim-pulse-glow"
      />

      {/* Hover ripple */}
      <motion.circle cx="156" cy="90" r="28"
        fill="none" stroke={SIG} strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        style={{ transformOrigin: "156px 90px" }}
        animate={{ scale: active ? 54/28 : 1, opacity: active ? 0 : 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Avatars — back to front (z-order) */}
      {avatars.map(({ cx, color, label, float, delay, isCenter }) => (
        <g key={cx}
          className={float}
          style={{ animationDelay: delay }}
        >
          <circle cx={cx} cy="90" r="26"
            fill={color} fillOpacity="0.9"
            stroke="white" strokeOpacity="0.2" strokeWidth="2"
          />
          <text x={cx} y="95" textAnchor="middle"
            fill="white" fillOpacity="0.88"
            fontSize="13" fontWeight="600" fontFamily="sans-serif"
          >{label}</text>

          {isCenter && (
            <motion.circle cx={cx} cy="90" r="29"
              fill="none" stroke={SIG} strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              style={{ transformOrigin: `${cx}px 90px` }}
              animate={{ strokeOpacity: active ? 0.9 : 0.45, scale: active ? 31/29 : 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          )}
        </g>
      ))}

      <text x="156" y="155" textAnchor="middle"
        fill={FG} fillOpacity="0.28"
        fontSize="9.5" letterSpacing="0.09em" fontFamily="sans-serif"
      >DEDICATED TEAM</text>
    </svg>
  );
};

/* ================================================================
   ILLUSTRATION 2 — With You Every Step
   Chat bubble UI + animated typing dots.
================================================================ */
const StepsIllustration = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 312 190" className="w-full h-full" aria-hidden="true">
    {/* Agent avatar */}
    <circle cx="42" cy="36" r="14" fill={SIG} fillOpacity="0.85" />
    <text x="42" y="41" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="sans-serif">M</text>
    <text x="62" y="32" fill={FG} fillOpacity="0.7" fontSize="10" fontWeight="600" fontFamily="sans-serif">Maddy</text>
    <text x="62" y="44" fill={FG} fillOpacity="0.35" fontSize="9" fontFamily="sans-serif">10:15 AM</text>

    {/* Bubble 1 — agent */}
    <motion.rect x="38" y="58" width="205" height="36" rx="14"
      fill={SIG} fillOpacity="0.1" stroke={SIG} strokeWidth="1"
      animate={{ strokeOpacity: active ? 0.55 : 0.22 }}
      transition={{ duration: 0.3 }}
    />
    <text x="52" y="81" fill={FG} fillOpacity="0.82" fontSize="10" fontFamily="sans-serif">
      Hi Daniel! Your design draft is ready.
    </text>

    {/* Bubble 2 — client */}
    <motion.rect x="38" y="104" width="184" height="36" rx="14"
      fill={FG} fillOpacity="0.06" stroke={FG} strokeWidth="1"
      animate={{ strokeOpacity: active ? 0.22 : 0.1 }}
      transition={{ duration: 0.3 }}
    />
    <text x="52" y="127" fill={FG} fillOpacity="0.72" fontSize="10" fontFamily="sans-serif">
      Want feedback before next step?
    </text>

    {/* Typing bubble */}
    <rect x="38" y="150" width="62" height="30" rx="14"
      fill={FG} fillOpacity="0.05"
      stroke={FG} strokeOpacity="0.1" strokeWidth="1"
    />
    {[0, 1, 2].map((i) => (
      <circle key={i}
        cx={57 + i * 13} cy="165" r="3.5"
        fill={FG} fillOpacity="0.48"
        className="anim-float-mid"
        style={{ animationDelay: `${i * 0.25}s` }}
      />
    ))}
  </svg>
);

/* ================================================================
   ILLUSTRATION 3 — Measurable Impact
   Animated bar chart with D/W/M/Y toggle pills.
================================================================ */
const BARS = [0.38, 0.55, 0.70, 0.46, 0.78, 0.90, 0.60, 0.72];
const SIG_BAR = 5;
const BAR_W = 20, BAR_GAP = 10;
const CHART_BOT = 172, CHART_TOP = 50, CHART_H = CHART_BOT - CHART_TOP; // 122
const BAR_START_X = (312 - (BARS.length * BAR_W + (BARS.length - 1) * BAR_GAP)) / 2;

const ImpactIllustration = ({ active }: { active: boolean }) => {
  const bx = (i: number) => BAR_START_X + i * (BAR_W + BAR_GAP);
  const bh = (v: number) => v * CHART_H;
  const by = (v: number) => CHART_BOT - bh(v);

  const trendD = BARS.map((v, i) =>
    `${i === 0 ? "M" : "L"} ${bx(i) + BAR_W / 2} ${by(v)}`
  ).join(" ");

  const toggles = ["D", "W", "M", "Y"];
  const TW = 26, TGAP = 5;
  const toggleStartX = 312 - (toggles.length * (TW + TGAP) + 12);

  return (
    <svg viewBox="0 0 312 190" className="w-full h-full" aria-hidden="true">
      {/* Chart label */}
      <text x="16" y="24" fill={FG} fillOpacity="0.5" fontSize="10" fontWeight="600" fontFamily="sans-serif">
        Uptime Trends
      </text>

      {/* Toggle pills */}
      {toggles.map((t, i) => {
        const isOn = t === "M";
        const tx = toggleStartX + i * (TW + TGAP);
        return (
          <g key={t}>
            <rect x={tx} y="12" width={TW} height="18" rx="9"
              fill={isOn ? SIG : FG}
              fillOpacity={isOn ? 0.9 : 0.08}
              stroke={isOn ? "none" : FG}
              strokeOpacity="0.15" strokeWidth="1"
            />
            <text x={tx + TW / 2} y="25" textAnchor="middle"
              fill={isOn ? "#fff" : FG} fillOpacity={isOn ? 1 : 0.5}
              fontSize="9" fontWeight="600" fontFamily="sans-serif"
            >{t}</text>
          </g>
        );
      })}

      {/* Bars */}
      {BARS.map((v, i) => {
        const isSig = i === SIG_BAR;
        const h = bh(v), y = by(v), x = bx(i);
        return (
          <g key={i}>
            {/* Glow backdrop for performance instead of drop-shadow filter */}
            {isSig && (
              <motion.rect
                x={x - 4} y={y - 4} width={BAR_W + 8} height={h + 8} rx="8"
                fill={SIG}
                style={{ 
                  filter: "blur(6px)", 
                  transformOrigin: `${x + BAR_W / 2}px ${CHART_BOT}px` 
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={VP}
                animate={{ opacity: active ? 0.35 : 0 }}
                transition={{ duration: 0.5, delay: 0.07 * i, ease: [0.2, 0.8, 0.2, 1] }}
              />
            )}
            <motion.rect
              x={x} y={y} width={BAR_W} height={h} rx="4"
              fill={isSig ? SIG : FG}
              style={{ transformOrigin: `${x + BAR_W / 2}px ${CHART_BOT}px` }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={VP}
              animate={{
                fillOpacity: isSig ? 0.88 : (active ? 0.16 : 0.09)
              }}
              transition={{ duration: 0.5, delay: 0.07 * i, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </g>
        );
      })}

      {/* Trend line */}
      <motion.path d={trendD}
        fill="none" stroke={SIG} strokeWidth="1.5" strokeOpacity="0.4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={VP}
        transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
      />
    </svg>
  );
};

/* ================================================================
   ILLUSTRATION 4 — Future-Ready Solutions
   Hub-and-spoke node diagram.
================================================================ */
const ORBIT_R = 78;
const HUB = { cx: 156, cy: 118 };
const SATS = ["SEO", "Perf", "CMS", "A11y", "i18n", "API"].map((label, i) => {
  const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
  return {
    label,
    cx: HUB.cx + ORBIT_R * Math.cos(angle),
    cy: HUB.cy + ORBIT_R * Math.sin(angle),
    float: i % 2 === 0 ? "anim-float-slow" : "anim-float-mid",
    delay: `${i * 0.28}s`,
  };
});

const FutureReadyIllustration = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 312 240" className="w-full h-full" aria-hidden="true">
    {/* Hub glow */}
    <circle cx={HUB.cx} cy={HUB.cy} r="38"
      fill={SIG} fillOpacity="0.07"
      className="anim-pulse-glow"
    />

    {/* Orbit ring */}
    <motion.circle cx={HUB.cx} cy={HUB.cy} r={ORBIT_R}
      fill="none" stroke={FG} strokeWidth="1" strokeDasharray="4 7"
      initial={{ opacity: 0, rotate: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={VP}
      animate={{ strokeOpacity: active ? 0.2 : 0.1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    />

    {/* Spokes */}
    {SATS.map(({ cx, cy }, i) => (
      <motion.line key={i}
        x1={HUB.cx} y1={HUB.cy} x2={cx} y2={cy}
        stroke={FG} strokeWidth="0.8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VP}
        animate={{ strokeOpacity: active ? 0.18 : 0.09 }}
        transition={{ delay: 0.1 * i, duration: 0.4 }}
      />
    ))}

    {/* Satellites — outer motion.g for entry, inner g for idle float */}
    {SATS.map(({ cx, cy, label, float, delay }, i) => (
      <motion.g key={i}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={VP}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        transition={{ delay: 0.12 * i, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <g className={float} style={{ animationDelay: delay }}>
          <circle cx={cx} cy={cy} r="18"
            fill={FG} fillOpacity="0.07"
            stroke={FG} strokeWidth="1"
            style={{
              strokeOpacity: active ? 0.22 : 0.12,
              transition: "stroke-opacity 0.3s ease",
            }}
          />
          <text x={cx} y={cy + 4} textAnchor="middle"
            fill={FG} fillOpacity="0.6"
            fontSize="8.5" fontWeight="600" fontFamily="sans-serif"
          >{label}</text>
        </g>
      </motion.g>
    ))}

    {/* Hub circle */}
    <motion.circle
      cx={HUB.cx} cy={HUB.cy} r="30"
      fill={FG} fillOpacity="0.07"
      stroke={SIG} strokeWidth="1.5"
      animate={{ strokeOpacity: active ? 0.85 : 0.4 }}
      transition={{ duration: 0.35 }}
    />
    <text x={HUB.cx} y={HUB.cy - 3} textAnchor="middle"
      fill={SIG} fontSize="7.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.07em"
    >YOUR</text>
    <text x={HUB.cx} y={HUB.cy + 10} textAnchor="middle"
      fill={SIG} fontSize="7.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.07em"
    >BRAND</text>
  </svg>
);

/* ================================================================
   ILLUSTRATION 5 — Transparent Process
   Gantt-style cascading pill labels.
================================================================ */
const STAGES = [
  { label: "Brief approval",  xOff: 44,  isSig: false },
  { label: "Content plan",    xOff: 62,  isSig: false },
  { label: "Internal review", xOff: 50,  isSig: false },
  { label: "Client feedback", xOff: 76,  isSig: false },
  { label: "Asset export",    xOff: 56,  isSig: true  },
  { label: "Launch setup",    xOff: 94,  isSig: true  },
];
const STAGE_Y = (i: number) => 20 + i * 33;
const SPINE_X = 26;

const TransparentProcessIllustration = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 480 222" className="w-full h-full" aria-hidden="true">
    {/* Spine */}
    <motion.line
      x1={SPINE_X} y1="16" x2={SPINE_X} y2="208"
      stroke={FG} strokeOpacity="0.1" strokeWidth="1.5"
      style={{ transformOrigin: `${SPINE_X}px 16px` }}
      initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={VP}
      transition={{ duration: 0.55, ease: "easeOut" }}
    />

    {/* Dashed active-zone segment between last two stages */}
    <line
      x1={SPINE_X} y1={STAGE_Y(4) + 6} x2={SPINE_X} y2={STAGE_Y(5) + 6}
      stroke={SIG} strokeWidth="1.5" strokeOpacity="0.4"
      strokeDasharray="4 5"
      className="anim-dash-flow"
    />

    {STAGES.map(({ label, xOff, isSig }, i) => {
      const cy = STAGE_Y(i) + 6;
      const pillW = label.length * 6.6 + 26;
      return (
        <motion.g key={i}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VP}
          transition={{ delay: 0.08 + i * 0.1, duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {/* Glow behind signal pills */}
          {isSig && (
            <circle cx={xOff + pillW / 2} cy={cy} r="14"
              fill={SIG} fillOpacity="0.06"
              className="anim-pulse-glow"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          )}

          {/* Spine dot */}
          <circle cx={SPINE_X} cy={cy} r="4"
            fill={isSig ? SIG : INK3}
            stroke={isSig ? SIG : FG}
            strokeWidth="1.5"
            style={{
              strokeOpacity: active ? (isSig ? 0.8 : 0.22) : (isSig ? 0.5 : 0.15),
              fillOpacity: isSig ? (active ? 1 : 0.9) : 0.45,
              transition: "stroke-opacity 0.3s ease, fill-opacity 0.3s ease",
            }}
          />

          {/* Connector */}
          <line
            x1={SPINE_X + 4} y1={cy} x2={xOff} y2={cy}
            stroke={FG} strokeOpacity="0.08" strokeWidth="1"
          />

          {/* Pill */}
          <motion.rect
            x={xOff} y={cy - 11} width={pillW} height="22" rx="11"
            fill={isSig ? SIG : FG}
            fillOpacity={isSig ? 0.13 : 0.05}
            stroke={isSig ? SIG : FG}
            strokeWidth="1"
            animate={{
              strokeOpacity: active
                ? (isSig ? 0.7 : 0.28)
                : (isSig ? 0.38 : 0.13),
              scale: active && isSig ? 1.04 : 1,
            }}
            style={{ transformOrigin: `${xOff + pillW / 2}px ${cy}px` }}
            transition={{ duration: 0.28 }}
          />

          <text x={xOff + 13} y={cy + 4}
            fill={isSig ? SIG2 : FG}
            fillOpacity={isSig ? 0.88 : 0.6}
            fontSize="10" fontFamily="sans-serif"
            fontWeight={isSig ? "600" : "400"}
          >{label}</text>
        </motion.g>
      );
    })}
  </svg>
);

/* ================================================================
   BentoCard — shared card shell
================================================================ */
interface BentoCardProps {
  title: string;
  desc: string;
  className?: string;
  delay?: number;
  illustrationHeight?: string;
  illustration: (active: boolean) => React.ReactNode;
}

const BentoCard = ({
  title, desc, className, delay = 0,
  illustrationHeight = "h-[160px] md:h-[190px]",
  illustration,
}: BentoCardProps) => {
  const [hovered, setHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <Reveal delay={delay} className={className}>
      <motion.article
        whileHover={{ y: prefersReduced ? 0 : -5 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        className={cn(
          "group relative rounded-2xl border border-foreground/10",
          "bg-foreground/[0.025] overflow-hidden cursor-pointer h-full",
          "hover:border-signal/30",
          "hover:shadow-[0_20px_60px_-20px_hsl(17_100%_56%/0.18)]",
          "transition-[border-color,box-shadow] duration-500",
        )}
      >
        <div className={cn("relative overflow-hidden", illustrationHeight)}>
          {illustration(hovered)}
        </div>
        <div className="h-px bg-foreground/[0.08]" />
        <div className="p-5 md:p-6">
          <h3 className="font-display text-[1.15rem] md:text-[1.35rem] leading-[1.1] mb-2
                         group-hover:text-signal transition-colors duration-300">
            {title}
          </h3>
          <p className="text-mute-2 text-xs md:text-sm leading-relaxed">
            {desc}
          </p>
        </div>
      </motion.article>
    </Reveal>
  );
};

/* ================================================================
   Section export
================================================================ */
export const ChooseUs = () => (
  <section id="choose-us" className="relative py-10 md:py-16">
    <SectionContainer>

      {/* Header */}
      <div className="mb-8 md:mb-12">
        <Reveal>
          <div className="h-eyebrow text-mute mb-5">§ 04 · Why Choose Us</div>
        </Reveal>
        
        <div className="text-center max-w-3xl mx-auto">
          <Reveal delay={0.05}>
            <h2 className="h-section font-display leading-[1.05]">
              Built To Move,{" "}
              <span className="italic-display text-signal">Ship High-Quality</span>{" "}
              Designs Faster
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-sm md:text-base text-mute-2 leading-relaxed max-w-2xl mx-auto">
              Most founders waste months juggling freelancers or waiting on agencies.
              We move at startup speed — here's exactly how.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 ">

        {/* Row 1 — equal thirds */}
        <BentoCard
          className="md:col-span-4"
          title="Personalised Support"
          desc="You get a dedicated senior lead, not a ticket queue. Real conversations, real decisions."
          delay={0}
          illustration={(a) => <PersonalisedIllustration active={a} />}
        />
        <BentoCard
          className="md:col-span-4"
          title="With You Every Step"
          desc="Weekly check-ins, async updates, and a direct line — we're in it with you, not just for you."
          delay={0.07}
          illustration={(a) => <StepsIllustration active={a} />}
        />
        <BentoCard
          className="md:col-span-4"
          title="Measurable Impact"
          desc="We track what matters. Every engagement ships with analytics baselines so you can see the delta."
          delay={0.14}
          illustration={(a) => <ImpactIllustration active={a} />}
        />

        {/* Row 2 — 5 + 7 split */}
        <BentoCard
          className="md:col-span-5"
          title="Future-Ready Solutions"
          desc="We build for scale from day one — composable, headless, with a tech stack that won't need replacing in 18 months."
          delay={0.07}
          illustrationHeight="h-[190px] md:h-[220px]"
          illustration={(a) => <FutureReadyIllustration active={a} />}
        />
        <BentoCard
          className="md:col-span-7"
          title="Transparent Process"
          desc="No black-box handoffs. You see every milestone before it moves, with a living timeline shared from day one."
          delay={0.14}
          illustrationHeight="h-[190px] md:h-[220px]"
          illustration={(a) => <TransparentProcessIllustration active={a} />}
        />

      </div>
    </SectionContainer>
  </section>
);
