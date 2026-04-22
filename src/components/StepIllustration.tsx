import React from "react";

/* =========================================================
   STEP 1 — DISCOVER / Strategy
   Magnifying glass scanning over a target with orbiting ideas.
========================================================= */
const DiscoverSVG = () => (
  <svg
    viewBox="0 0 400 260"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="d-bg" cx="50%" cy="50%" r="60%">
        <stop offset="0%"   stopColor="#FF5A1F" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="d-stroke" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%"   stopColor="#FF5A1F" />
        <stop offset="100%" stopColor="#ff9d7a" />
      </linearGradient>
    </defs>

    {/* glow */}
    <circle cx="200" cy="130" r="110" fill="url(#d-bg)" className="anim-pulse-glow" />

    {/* target rings */}
    <g stroke="url(#d-stroke)" fill="none" strokeWidth="1.5" opacity="0.7">
      <circle cx="200" cy="130" r="80" />
      <circle cx="200" cy="130" r="55" />
      <circle cx="200" cy="130" r="30" />
      <circle cx="200" cy="130" r="8" fill="#FF5A1F" stroke="none" />
    </g>

    {/* rotating dashed ring */}
    <g className="anim-rotate-slow" style={{ transformOrigin: "200px 130px" }}>
      <circle
        cx="200" cy="130" r="95"
        fill="none"
        stroke="#FF5A1F" strokeOpacity="0.5" strokeWidth="1.2"
        strokeDasharray="4 8"
      />
    </g>

    {/* orbiting idea dots */}
    <g className="anim-rotate-slow" style={{ transformOrigin: "200px 130px" }}>
      <circle cx="295" cy="130" r="4" fill="#ff9d7a" />
      <circle cx="105" cy="130" r="3" fill="#FF5A1F" />
      <circle cx="200" cy="35"  r="3" fill="#ffcfbe" />
    </g>

    {/* magnifying glass */}
    <g className="anim-float-mid">
      <circle
        cx="240" cy="100" r="34"
        fill="rgba(255,255,255,0.04)"
        stroke="url(#d-stroke)" strokeWidth="3"
      />
      <line
        x1="265" y1="125" x2="295" y2="155"
        stroke="url(#d-stroke)" strokeWidth="5" strokeLinecap="round"
      />
      {/* lens highlight */}
      <path
        d="M220 90 Q230 82 240 90"
        stroke="white" strokeOpacity="0.5" strokeWidth="2"
        fill="none" strokeLinecap="round"
      />
    </g>
  </svg>
);

/* =========================================================
   STEP 2 — DESIGN & BUILD
   Browser window + mobile card being assembled with code lines.
========================================================= */
const BuildSVG = () => (
  <svg
    viewBox="0 0 400 260"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="b-panel" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%"   stopColor="#1e1010" />
        <stop offset="100%" stopColor="#110808" />
      </linearGradient>
      <linearGradient id="b-accent" x1="0" x2="1">
        <stop offset="0%"   stopColor="#FF5A1F" />
        <stop offset="100%" stopColor="#ffaa88" />
      </linearGradient>
    </defs>

    {/* back panel — desktop window */}
    <g className="anim-float-slow">
      <rect
        x="70" y="50" width="220" height="140" rx="10"
        fill="url(#b-panel)" stroke="#FF5A1F" strokeOpacity="0.4" strokeWidth="1.2"
      />
      {/* traffic dots */}
      <circle cx="85"  cy="65" r="3" fill="#FF5A1F" />
      <circle cx="96"  cy="65" r="3" fill="#FF5A1F" opacity="0.6" />
      <circle cx="107" cy="65" r="3" fill="#FF5A1F" opacity="0.3" />
      {/* code-ish lines */}
      <rect x="85" y="85"  width="90"  height="6" rx="3" fill="#FF5A1F" opacity="0.75" />
      <rect x="85" y="100" width="140" height="6" rx="3" fill="#fff" opacity="0.15" />
      <rect x="85" y="115" width="110" height="6" rx="3" fill="#fff" opacity="0.15" />
      <rect x="85" y="130" width="70"  height="6" rx="3" fill="#FF5A1F" opacity="0.5" />
      <rect x="85" y="145" width="130" height="6" rx="3" fill="#fff" opacity="0.12" />
      <rect x="85" y="160" width="60"  height="6" rx="3" fill="#fff" opacity="0.12" />
    </g>

    {/* front panel — mobile card */}
    <g className="anim-float-mid">
      <rect
        x="230" y="90" width="110" height="150" rx="14"
        fill="url(#b-panel)"
        stroke="url(#b-accent)" strokeWidth="1.5"
      />
      <rect x="245" y="108" width="80" height="40" rx="6"  fill="#FF5A1F" opacity="0.85" />
      <rect x="245" y="158" width="80" height="8"  rx="4"  fill="#fff" opacity="0.2" />
      <rect x="245" y="174" width="60" height="8"  rx="4"  fill="#fff" opacity="0.15" />
      <rect
        x="245" y="200" width="80" height="22" rx="6"
        fill="#fff" fillOpacity="0.06"
        stroke="#FF5A1F" strokeOpacity="0.5" strokeWidth="1"
      />
    </g>

    {/* connecting dashed line design → build */}
    <path
      d="M180 120 C 210 120, 210 160, 250 160"
      stroke="#FF5A1F" strokeWidth="1.5" fill="none"
      strokeDasharray="4 6" className="anim-dash-flow"
    />
  </svg>
);

/* =========================================================
   STEP 3 — LAUNCH & SCALE
   Rocket + trailing particles + growing analytics bars.
========================================================= */
const ScaleSVG = () => (
  <svg
    viewBox="0 0 400 260"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
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

    {/* analytics bars */}
    <g transform="translate(240, 120)">
      <rect x="0"  y="40" width="18" height="80"  rx="3" fill="#FF5A1F" opacity="0.4"  className="anim-bar-grow" style={{ animationDelay: "0s" }}   />
      <rect x="28" y="20" width="18" height="100" rx="3" fill="#FF5A1F" opacity="0.65" className="anim-bar-grow" style={{ animationDelay: "0.3s" }}  />
      <rect x="56" y="0"  width="18" height="120" rx="3" fill="#FF5A1F"                className="anim-bar-grow" style={{ animationDelay: "0.6s" }}  />
      <rect x="84" y="30" width="18" height="90"  rx="3" fill="#ff9d7a"                className="anim-bar-grow" style={{ animationDelay: "0.9s" }}  />
      {/* trend line */}
      <path
        d="M5 65 L33 45 L61 20 L89 45"
        stroke="#fff" strokeOpacity="0.7" strokeWidth="2"
        fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="89" cy="45" r="4" fill="#fff" className="anim-pulse-glow" />
    </g>

    {/* rocket */}
    <g className="anim-float-mid" style={{ transformOrigin: "120px 130px" }}>
      {/* flame */}
      <path
        d="M110 185 Q120 220 130 185 Q125 205 120 210 Q115 205 110 185 Z"
        fill="url(#s-flame)" className="anim-pulse-glow"
      />
      {/* body */}
      <path
        d="M120 60
           C 145 85, 145 145, 130 185
           L 110 185
           C 95 145, 95 85, 120 60 Z"
        fill="url(#s-rocket)"
        stroke="#fff" strokeOpacity="0.2" strokeWidth="1"
      />
      {/* window */}
      <circle cx="120" cy="105" r="10" fill="#110808" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="117" cy="102" r="3"  fill="#fff" opacity="0.6" />
      {/* fins */}
      <path d="M100 165 L85  185 L105 180 Z" fill="#FF5A1F" opacity="0.9" />
      <path d="M140 165 L155 185 L135 180 Z" fill="#FF5A1F" opacity="0.9" />
      {/* seam */}
      <line x1="120" y1="75" x2="120" y2="170" stroke="#fff" strokeOpacity="0.15" strokeWidth="1" />
    </g>

    {/* floating particles */}
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
