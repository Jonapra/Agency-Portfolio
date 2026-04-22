import React from "react";

// hsl(var(--...)) via inline style — the only way CSS vars resolve in SVG fill/stroke attrs
const INK      = "hsl(var(--ink))";
const INK3     = "hsl(var(--ink-3))";
const FG       = "hsl(var(--foreground))";

/* =========================================================
   STEP 1 — DISCOVER / Strategy
   Centered strategy map: signal hub + 5 connected nodes.
========================================================= */
const DiscoverSVG = () => (
  <svg viewBox="0 0 400 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="d-bg" cx="50%" cy="50%" r="55%">
        <stop offset="0%"   stopColor="#FF5A1F" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Central glow */}
    <circle cx="200" cy="130" r="100" fill="url(#d-bg)" className="anim-pulse-glow" />

    {/* Solid guide ring */}
    <circle cx="200" cy="130" r="86" fill="none" stroke="#FF5A1F" strokeOpacity="0.1" strokeWidth="1" />

    {/* Rotating dashed orbit */}
    <g className="anim-rotate-slow" style={{ transformOrigin: "200px 130px" }}>
      <circle cx="200" cy="130" r="86" fill="none"
        stroke="#FF5A1F" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="3 7" />
    </g>

    {/* Dashed spokes from center to each node — purely signal orange, no white */}
    <g stroke="#FF5A1F" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 5" fill="none">
      <line x1="200" y1="130" x2="200" y2="48" />
      <line x1="200" y1="130" x2="276" y2="106" />
      <line x1="200" y1="130" x2="247" y2="193" />
      <line x1="200" y1="130" x2="153" y2="193" />
      <line x1="200" y1="130" x2="124" y2="106" />
    </g>

    {/* Five satellite nodes (pentagon, r=86 from center) */}
    <circle cx="200" cy="44"  r="7" fill="#FF5A1F"  className="anim-pulse-glow"  style={{ animationDelay: "0s" }} />
    <circle cx="276" cy="106" r="6" fill="#ff9d7a"  className="anim-float-slow"  style={{ animationDelay: "0.5s" }} />
    <circle cx="247" cy="193" r="6" fill="#FF5A1F"  className="anim-pulse-glow"  style={{ animationDelay: "1.1s" }} />
    <circle cx="153" cy="193" r="6" fill="#ff9d7a"  className="anim-float-mid"   style={{ animationDelay: "0.3s" }} />
    <circle cx="124" cy="106" r="7" fill="#FF5A1F"  className="anim-float-slow"  style={{ animationDelay: "0.8s" }} />

    {/* Center hub */}
    <circle cx="200" cy="130" r="18" fill="#FF5A1F" fillOpacity="0.12" />
    <circle cx="200" cy="130" r="9"  fill="#FF5A1F" className="anim-pulse-glow" />
    <circle cx="200" cy="130" r="3.5" fill="#ffcfbe" />
  </svg>
);

/* =========================================================
   STEP 2 — DESIGN & BUILD
========================================================= */
const BuildSVG = () => (
  <svg viewBox="0 0 400 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="b-accent" x1="0" x2="1">
        <stop offset="0%"   stopColor="#FF5A1F" />
        <stop offset="100%" stopColor="#ffaa88" />
      </linearGradient>
    </defs>

    <g className="anim-float-slow">
      {/* desktop window — dark ink panel, looks intentional in both modes */}
      <rect x="70" y="50" width="220" height="140" rx="10"
        style={{ fill: INK3 }}
        stroke="#FF5A1F" strokeOpacity="0.55" strokeWidth="1.2" />
      <circle cx="85"  cy="65" r="3" fill="#FF5A1F" />
      <circle cx="96"  cy="65" r="3" fill="#FF5A1F" opacity="0.6" />
      <circle cx="107" cy="65" r="3" fill="#FF5A1F" opacity="0.3" />
      <rect x="85" y="85"  width="90"  height="6" rx="3" fill="#FF5A1F" opacity="0.85" />
      <rect x="85" y="100" width="140" height="6" rx="3" fill="#ffffff" opacity="0.22" />
      <rect x="85" y="115" width="110" height="6" rx="3" fill="#ffffff" opacity="0.22" />
      <rect x="85" y="130" width="70"  height="6" rx="3" fill="#FF5A1F" opacity="0.55" />
      <rect x="85" y="145" width="130" height="6" rx="3" fill="#ffffff" opacity="0.18" />
      <rect x="85" y="160" width="60"  height="6" rx="3" fill="#ffffff" opacity="0.18" />
    </g>

    <g className="anim-float-mid">
      <rect x="230" y="90" width="110" height="150" rx="14"
        style={{ fill: INK }}
        stroke="url(#b-accent)" strokeWidth="1.5" />
      <rect x="245" y="108" width="80" height="40" rx="6" fill="#FF5A1F" opacity="0.9" />
      <rect x="245" y="158" width="80" height="8"  rx="4" fill="#ffffff" opacity="0.28" />
      <rect x="245" y="174" width="60" height="8"  rx="4" fill="#ffffff" opacity="0.22" />
      <rect x="245" y="200" width="80" height="22" rx="6"
        fill="#ffffff" fillOpacity="0.08"
        stroke="#FF5A1F" strokeOpacity="0.6" strokeWidth="1" />
    </g>

    <path d="M180 120 C 210 120, 210 160, 250 160"
      stroke="#FF5A1F" strokeWidth="1.5" fill="none"
      strokeDasharray="4 6" className="anim-dash-flow" />
  </svg>
);

/* =========================================================
   STEP 3 — LAUNCH & SCALE
========================================================= */
const ScaleSVG = () => (
  <svg viewBox="0 0 400 260" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="s-rocket" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%"   stopColor="#ffcfbe" />
        <stop offset="100%" stopColor="#FF5A1F" />
      </linearGradient>
      <linearGradient id="s-flame" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%"   stopColor="#FF5A1F" />
        <stop offset="100%" stopColor="#ffdd55" stopOpacity="0" />
      </linearGradient>
    </defs>

    <g transform="translate(240, 120)">
      <rect x="0"  y="40" width="18" height="80"  rx="3" fill="#FF5A1F" opacity="0.45" className="anim-bar-grow" style={{ animationDelay: "0s" }} />
      <rect x="28" y="20" width="18" height="100" rx="3" fill="#FF5A1F" opacity="0.7"  className="anim-bar-grow" style={{ animationDelay: "0.3s" }} />
      <rect x="56" y="0"  width="18" height="120" rx="3" fill="#FF5A1F"                className="anim-bar-grow" style={{ animationDelay: "0.6s" }} />
      <rect x="84" y="30" width="18" height="90"  rx="3" fill="#ff9d7a"                className="anim-bar-grow" style={{ animationDelay: "0.9s" }} />
      {/* trend line + dot — theme-aware so visible in light mode */}
      <path d="M5 65 L33 45 L61 20 L89 45"
        style={{ stroke: FG }} strokeOpacity="0.8" strokeWidth="2.5"
        fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="89" cy="45" r="5" style={{ fill: FG }} className="anim-pulse-glow" />
    </g>

    <g className="anim-float-mid" style={{ transformOrigin: "120px 130px" }}>
      <path d="M110 185 Q120 220 130 185 Q125 205 120 210 Q115 205 110 185 Z"
        fill="url(#s-flame)" className="anim-pulse-glow" />
      <path d="M120 60 C 145 85, 145 145, 130 185 L 110 185 C 95 145, 95 85, 120 60 Z"
        fill="url(#s-rocket)"
        style={{ stroke: FG }} strokeOpacity="0.25" strokeWidth="1" />
      {/* window — dark ink porthole */}
      <circle cx="120" cy="105" r="10"
        style={{ fill: INK, stroke: FG }} strokeOpacity="0.65" strokeWidth="1.5" />
      <circle cx="117" cy="102" r="3" fill="#ffffff" opacity="0.75" />
      <path d="M100 165 L85  185 L105 180 Z" fill="#FF5A1F" opacity="0.95" />
      <path d="M140 165 L155 185 L135 180 Z" fill="#FF5A1F" opacity="0.95" />
      <line x1="120" y1="75" x2="120" y2="170"
        style={{ stroke: FG }} strokeOpacity="0.2" strokeWidth="1" />
    </g>

    <circle cx="70"  cy="90"  r="2"   fill="#FF5A1F" className="anim-float-slow" />
    <circle cx="60"  cy="140" r="1.5" fill="#ff9d7a" className="anim-float-mid" />
    <circle cx="180" cy="70"  r="2"   fill="#ffcfbe" className="anim-float-slow" />
    <circle cx="190" cy="150" r="1.5" fill="#FF5A1F" className="anim-float-mid" />
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
