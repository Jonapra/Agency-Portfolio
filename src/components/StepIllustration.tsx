import React from "react";
import "./step-animations.css";


const SIG  = "#FF5A1F";
const SIG2 = "#ff9d7a";
const SIGL = "#ffcfbe";
const FG   = "hsl(var(--foreground))";
const INK3 = "hsl(var(--ink-3))";

/* =========================================================
   STEP 1 — DISCOVER / Strategy
   Radar sweep scanning a discovery field of data nodes.
   The highlighted target = the strategic insight found.
========================================================= */
const DiscoverSVG = () => (
  <svg viewBox="0 0 400 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Concentric rings */}
    <circle cx="200" cy="130" r="45"  fill="none" stroke={SIG} strokeOpacity="0.18" strokeWidth="0.8" />
    <circle cx="200" cy="130" r="80"  fill="none" stroke={SIG} strokeOpacity="0.11" strokeWidth="0.8" strokeDasharray="4 6" />
    <circle cx="200" cy="130" r="112" fill="none" stroke={SIG} strokeOpacity="0.06" strokeWidth="0.8" strokeDasharray="2 8" />

    {/* Crosshair */}
    <line x1="55"  y1="130" x2="345" y2="130" style={{ stroke: FG }} strokeOpacity="0.1" strokeWidth="0.8" strokeDasharray="2 6" />
    <line x1="200" y1="12"  x2="200" y2="248" style={{ stroke: FG }} strokeOpacity="0.1" strokeWidth="0.8" strokeDasharray="2 6" />

    {/* Cardinal ticks on r=80 ring */}
    <line x1="200" y1="44"  x2="200" y2="56"  stroke={SIG} strokeOpacity="0.45" strokeWidth="1.5" />
    <line x1="200" y1="204" x2="200" y2="216" stroke={SIG} strokeOpacity="0.45" strokeWidth="1.5" />
    <line x1="114" y1="130" x2="126" y2="130" stroke={SIG} strokeOpacity="0.45" strokeWidth="1.5" />
    <line x1="274" y1="130" x2="286" y2="130" stroke={SIG} strokeOpacity="0.45" strokeWidth="1.5" />

    {/* Rotating radar sweep — wedge from center, 60° arc at r=90 */}
    <g className="anim-rotate-slow" style={{ transformOrigin: "200px 130px" }}>
      <path d="M200,130 L200,40 A90,90 0 0,1 278,85 Z" fill={SIG} fillOpacity="0.1" />
      <line x1="200" y1="130" x2="200" y2="40" stroke={SIG} strokeOpacity="0.65" strokeWidth="1.5" />
    </g>

    {/* Scattered field nodes */}
    <circle cx="152" cy="68"  r="4"   fill={SIG}  fillOpacity="0.45" className="anim-float-slow" style={{ animationDelay: "0.6s" }} />
    <circle cx="258" cy="175" r="3.5" fill={SIG}  fillOpacity="0.38" className="anim-float-mid"  style={{ animationDelay: "0.9s" }} />
    <circle cx="142" cy="172" r="3"   fill={SIG2} fillOpacity="0.5"  className="anim-float-slow" style={{ animationDelay: "0.3s" }} />
    <circle cx="308" cy="118" r="4"   fill={SIG}  fillOpacity="0.42" className="anim-float-mid"  style={{ animationDelay: "1.4s" }} />
    <circle cx="175" cy="58"  r="3"   fill={SIG2} fillOpacity="0.45" className="anim-float-slow" style={{ animationDelay: "0.2s" }} />
    <circle cx="108" cy="152" r="2.5" fill={SIG2} fillOpacity="0.38" className="anim-float-mid"  style={{ animationDelay: "1.1s" }} />

    {/* Target — acquired insight */}
    <circle cx="265" cy="72" r="18"  fill={SIG} fillOpacity="0.08" className="anim-pulse-glow" />
    <circle cx="265" cy="72" r="11"  fill="none" stroke={SIG} strokeOpacity="0.5" strokeWidth="1.2" />
    <circle cx="265" cy="72" r="5.5" fill={SIG} className="anim-pulse-glow" style={{ animationDelay: "0.4s" }} />
    <circle cx="265" cy="72" r="2.5" fill={SIGL} />

    {/* Annotation bars beside target */}
    <rect x="280" y="67" width="30" height="3.5" rx="1.5" fill={SIG} fillOpacity="0.7" />
    <rect x="280" y="74" width="22" height="3"   rx="1.5" fill={SIG} fillOpacity="0.35" />

    {/* Center hub */}
    <circle cx="200" cy="130" r="5"   fill={SIG} fillOpacity="0.85" />
    <circle cx="200" cy="130" r="2.5" fill={SIGL} />
  </svg>
);

/* =========================================================
   STEP 2 — DESIGN & BUILD
   Three component chips (left) assembling into a live
   page canvas (right) via flowing dashed connectors.
========================================================= */
const BuildSVG = () => (
  <svg viewBox="0 0 400 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Page canvas */}
    <rect x="150" y="20" width="220" height="220" rx="10"
      style={{ fill: INK3 }}
      stroke={SIG} strokeOpacity="0.35" strokeWidth="1" />
    <circle cx="167" cy="37" r="3.5" fill={SIG} fillOpacity="0.8" />
    <circle cx="180" cy="37" r="3.5" fill={SIG} fillOpacity="0.45" />
    <circle cx="193" cy="37" r="3.5" fill={SIG} fillOpacity="0.2" />
    <rect x="202" y="31" width="145" height="11" rx="5.5" fill="#ffffff" fillOpacity="0.05" />

    {/* Canvas: nav */}
    <rect x="160" y="52" width="200" height="5"  rx="2.5" fill="#ffffff" fillOpacity="0.07" />
    <rect x="160" y="52" width="48"  height="5"  rx="2.5" fill={SIG}    fillOpacity="0.65" />

    {/* Canvas: hero */}
    <rect x="160" y="64" width="200" height="62" rx="5" fill="#ffffff" fillOpacity="0.04" />
    <rect x="168" y="73" width="100" height="7.5" rx="3"   fill={SIG} fillOpacity="0.85" />
    <rect x="168" y="86" width="72"  height="4.5" rx="2"   fill="#ffffff" fillOpacity="0.24" />
    <rect x="168" y="95" width="55"  height="4"   rx="2"   fill="#ffffff" fillOpacity="0.17" />
    <rect x="168" y="107" width="52" height="11"  rx="5.5" fill={SIG} fillOpacity="0.8" />

    {/* Canvas: feature cards */}
    <rect x="160" y="135" width="58" height="45" rx="5" fill="#ffffff" fillOpacity="0.05" stroke={SIG} strokeOpacity="0.28" strokeWidth="0.8" />
    <rect x="229" y="135" width="58" height="45" rx="5" fill="#ffffff" fillOpacity="0.05" stroke={SIG} strokeOpacity="0.2"  strokeWidth="0.8" />
    <rect x="298" y="135" width="58" height="45" rx="5" fill="#ffffff" fillOpacity="0.05" stroke={SIG} strokeOpacity="0.14" strokeWidth="0.8" />
    <rect x="168" y="149" width="40" height="4.5" rx="2" fill={SIG}  fillOpacity="0.65" />
    <rect x="168" y="158" width="30" height="3.5" rx="2" fill="#ffffff" fillOpacity="0.2" />
    <rect x="237" y="149" width="40" height="4.5" rx="2" fill={SIG}  fillOpacity="0.45" />
    <rect x="237" y="158" width="25" height="3.5" rx="2" fill="#ffffff" fillOpacity="0.2" />
    <rect x="306" y="149" width="40" height="4.5" rx="2" fill={SIG}  fillOpacity="0.35" />
    <rect x="306" y="158" width="28" height="3.5" rx="2" fill="#ffffff" fillOpacity="0.2" />

    {/* Canvas: CTA */}
    <rect x="185" y="192" width="130" height="32" rx="8" fill={SIG} fillOpacity="0.14" stroke={SIG} strokeOpacity="0.48" strokeWidth="1" />
    <rect x="210" y="204" width="80"  height="6.5" rx="3" fill={SIG} fillOpacity="0.75" />

    {/* Chip: Nav component */}
    <g className="anim-float-slow" style={{ animationDelay: "0s" }}>
      <rect x="15" y="35" width="110" height="24" rx="7" style={{ fill: INK3 }} stroke={SIG} strokeOpacity="0.5" strokeWidth="0.9" />
      <rect x="24" y="43" width="22" height="4"   rx="2" fill={SIG}    fillOpacity="0.8" />
      <rect x="52" y="43" width="15" height="4"   rx="2" fill="#ffffff" fillOpacity="0.28" />
      <rect x="73" y="43" width="15" height="4"   rx="2" fill="#ffffff" fillOpacity="0.22" />
      <rect x="94" y="43" width="15" height="4"   rx="2" fill="#ffffff" fillOpacity="0.18" />
    </g>

    {/* Chip: Hero component */}
    <g className="anim-float-mid" style={{ animationDelay: "0.7s" }}>
      <rect x="15" y="82" width="110" height="58" rx="7" style={{ fill: INK3 }} stroke={SIG} strokeOpacity="0.44" strokeWidth="0.9" />
      <rect x="24" y="93"  width="58" height="6"   rx="2.5" fill={SIG}    fillOpacity="0.85" />
      <rect x="24" y="104" width="42" height="4"   rx="2"   fill="#ffffff" fillOpacity="0.24" />
      <rect x="24" y="113" width="35" height="4"   rx="2"   fill="#ffffff" fillOpacity="0.18" />
      <rect x="24" y="124" width="32" height="9"   rx="4.5" fill={SIG}    fillOpacity="0.75" />
    </g>

    {/* Chip: Card component */}
    <g className="anim-float-slow" style={{ animationDelay: "1.3s" }}>
      <rect x="15" y="160" width="110" height="58" rx="7" style={{ fill: INK3 }} stroke={SIG} strokeOpacity="0.38" strokeWidth="0.9" />
      <rect x="24" y="172" width="90"  height="18"  rx="3"   fill={SIG}    fillOpacity="0.13" />
      <rect x="24" y="196" width="58"  height="4.5" rx="2"   fill={SIG}    fillOpacity="0.7" />
      <rect x="24" y="205" width="42"  height="3.5" rx="2"   fill="#ffffff" fillOpacity="0.22" />
    </g>

    {/* Flow connectors */}
    <path d="M125,47 C138,47 140,55 150,55"   stroke={SIG} strokeOpacity="0.4" strokeWidth="1" fill="none" strokeDasharray="3 4" className="anim-dash-flow" />
    <path d="M125,111 C140,111 142,97 150,95"  stroke={SIG} strokeOpacity="0.4" strokeWidth="1" fill="none" strokeDasharray="3 4" className="anim-dash-flow" style={{ animationDelay: "0.5s" }} />
    <path d="M125,189 C140,189 142,162 150,160" stroke={SIG} strokeOpacity="0.4" strokeWidth="1" fill="none" strokeDasharray="3 4" className="anim-dash-flow" style={{ animationDelay: "1s" }} />
  </svg>
);

/* =========================================================
   STEP 3 — LAUNCH & SCALE
   KPI card row + area chart with upward trend line.
========================================================= */
const ScaleSVG = () => (
  <svg viewBox="0 0 400 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="s-area" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%"   stopColor="#FF5A1F" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0.02" />
      </linearGradient>
    </defs>

    {/* KPI cards */}
    <rect x="20"  y="15" width="100" height="52" rx="7" style={{ fill: INK3 }} stroke={SIG} strokeOpacity="0.32" strokeWidth="0.9" />
    <rect x="150" y="15" width="100" height="52" rx="7" style={{ fill: INK3 }} stroke={SIG} strokeOpacity="0.24" strokeWidth="0.9" />
    <rect x="280" y="15" width="100" height="52" rx="7" style={{ fill: INK3 }} stroke={SIG} strokeOpacity="0.18" strokeWidth="0.9" />

    <rect x="30"  y="26" width="38" height="4"   rx="2" fill={SIG}    fillOpacity="0.5" />
    <rect x="30"  y="35" width="58" height="8"   rx="3" fill={SIG}    fillOpacity="0.85" />
    <rect x="30"  y="49" width="28" height="3.5" rx="2" fill="#ffffff" fillOpacity="0.18" />
    <rect x="62"  y="49" width="20" height="3.5" rx="2" fill={SIG}    fillOpacity="0.55" />

    <rect x="160" y="26" width="32" height="4"   rx="2" fill={SIG}    fillOpacity="0.5" />
    <rect x="160" y="35" width="50" height="8"   rx="3" fill={SIG}    fillOpacity="0.68" />
    <rect x="160" y="49" width="55" height="3.5" rx="2" fill="#ffffff" fillOpacity="0.18" />

    <rect x="290" y="26" width="25" height="4"   rx="2" fill={SIG}    fillOpacity="0.5" />
    <rect x="290" y="35" width="52" height="8"   rx="3" fill={SIG}    fillOpacity="0.55" />
    <rect x="290" y="49" width="42" height="3.5" rx="2" fill="#ffffff" fillOpacity="0.18" />

    {/* Chart grid */}
    <line x1="35" y1="108" x2="380" y2="108" style={{ stroke: FG }} strokeOpacity="0.07" strokeWidth="0.8" strokeDasharray="3 5" />
    <line x1="35" y1="143" x2="380" y2="143" style={{ stroke: FG }} strokeOpacity="0.07" strokeWidth="0.8" strokeDasharray="3 5" />
    <line x1="35" y1="178" x2="380" y2="178" style={{ stroke: FG }} strokeOpacity="0.07" strokeWidth="0.8" strokeDasharray="3 5" />
    <line x1="35" y1="213" x2="380" y2="213" style={{ stroke: FG }} strokeOpacity="0.07" strokeWidth="0.8" strokeDasharray="3 5" />

    {/* Area fill */}
    <path
      d="M35,215 C65,212 78,203 100,200 C122,197 135,182 158,178 C181,174 194,158 218,153 C242,148 258,130 282,124 C306,118 322,108 348,100 C362,96 372,90 385,88 L385,228 L35,228 Z"
      fill="url(#s-area)"
    />

    {/* Trend line */}
    <path
      d="M35,215 C65,212 78,203 100,200 C122,197 135,182 158,178 C181,174 194,158 218,153 C242,148 258,130 282,124 C306,118 322,108 348,100 C362,96 372,90 385,88"
      stroke={SIG} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
    />

    {/* Data dots */}
    <circle cx="100" cy="200" r="2.5" fill={SIG} fillOpacity="0.75" />
    <circle cx="158" cy="178" r="2.5" fill={SIG} fillOpacity="0.75" />
    <circle cx="218" cy="153" r="2.5" fill={SIG} fillOpacity="0.75" />
    <circle cx="282" cy="124" r="2.5" fill={SIG} fillOpacity="0.75" />
    <circle cx="348" cy="100" r="2.5" fill={SIG} fillOpacity="0.75" />

    {/* Live / current point */}
    <circle cx="385" cy="88" r="12"  fill={SIG} fillOpacity="0.12" className="anim-pulse-glow" />
    <circle cx="385" cy="88" r="5.5" fill={SIG} fillOpacity="0.9" />
    <circle cx="385" cy="88" r="2.5" fill={SIGL} />

    {/* Tooltip above last point */}
    <rect x="325" y="66" width="52" height="17" rx="4" style={{ fill: INK3 }} stroke={SIG} strokeOpacity="0.42" strokeWidth="0.8" />
    <rect x="331" y="71" width="30" height="4"  rx="2" fill={SIG}    fillOpacity="0.8" />
    <rect x="331" y="78" width="20" height="3"  rx="1.5" fill="#ffffff" fillOpacity="0.22" />

    {/* X axis */}
    <line x1="35" y1="228" x2="385" y2="228" style={{ stroke: FG }} strokeOpacity="0.15" strokeWidth="0.8" />
  </svg>
);

/* =========================================================
   Dispatcher
========================================================= */
interface StepIllustrationProps {
  id: number;
}

const StepIllustration = ({ id }: StepIllustrationProps) => {
  const map: Record<number, React.ReactElement> = {
    1: <DiscoverSVG />,
    2: <BuildSVG />,
    3: <ScaleSVG />,
  };
  return map[id] ?? null;
};

export default StepIllustration;