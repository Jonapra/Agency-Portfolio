"use client";

type Props = { index: number };

/**
 * Animated service icons (replaces arrow buttons).
 * 0 → Brand Identity
 * 1 → Product Design
 * 2 → Website
 * 3 → Performance
 */
export const ServiceIcon = ({ index }: Props) => {
  const icons = [BrandIcon, ProductIcon, WebIcon, PerfIcon];
  const Icon = icons[index % icons.length];
  return (
    <div className="w-10 h-10 text-foreground/50 group-hover:text-signal transition-colors duration-500">
      <Icon />
    </div>
  );
};

/* ---------- 01 · Brand Identity — Asterisk / Spark ---------- */
const BrandIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
    <g
      className="origin-center transition-transform duration-700 ease-out group-hover:rotate-[90deg]"
      style={{ transformOrigin: "20px 20px" }}
    >
      {/* 8-point asterisk — feels like a mark/monogram */}
      <line x1="20" y1="5" x2="20" y2="35" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="5" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="9.4" y1="9.4" x2="30.6" y2="30.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="30.6" y1="9.4" x2="9.4" y2="30.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </g>
    {/* center core that scales up */}
    <circle
      cx="20"
      cy="20"
      r="3"
      fill="currentColor"
      className="origin-center transition-transform duration-500 ease-out scale-75 group-hover:scale-110"
      style={{ transformBox: "fill-box" as any, transformOrigin: "center" }}
    />
  </svg>
);

/* ---------- 02 · Product Design — Grid building up ---------- */
const ProductIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
    {/* 2x2 grid of squares, each scales in on hover with stagger */}
    <rect
      x="6"
      y="6"
      width="12"
      height="12"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.2"
      className="origin-center transition-transform duration-500 ease-out group-hover:scale-90"
      style={{ transformOrigin: "12px 12px" }}
    />
    <rect
      x="22"
      y="6"
      width="12"
      height="12"
      rx="1.5"
      fill="currentColor"
      className="origin-center transition-transform duration-500 ease-out scale-[0.6] group-hover:scale-100"
      style={{ transformOrigin: "28px 12px" }}
    />
    <rect
      x="6"
      y="22"
      width="12"
      height="12"
      rx="1.5"
      fill="currentColor"
      className="origin-center transition-transform duration-500 delay-75 ease-out scale-[0.6] group-hover:scale-100"
      style={{ transformOrigin: "12px 28px" }}
    />
    <rect
      x="22"
      y="22"
      width="12"
      height="12"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.2"
      className="origin-center transition-transform duration-500 delay-150 ease-out group-hover:scale-90"
      style={{ transformOrigin: "28px 28px" }}
    />
  </svg>
);

/* ---------- 03 · Website — (unchanged) ---------- */
const WebIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
    <rect x="5" y="8" width="30" height="24" rx="2" stroke="currentColor" strokeWidth="1.2" />
    <line x1="5" y1="14" x2="35" y2="14" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="8" cy="11" r="0.9" fill="currentColor" />
    <circle cx="11" cy="11" r="0.9" fill="currentColor" />
    <circle cx="14" cy="11" r="0.9" fill="currentColor" />
    <line x1="9" y1="19" x2="22" y2="19" stroke="currentColor" strokeWidth="1" opacity="0.5" className="transition-all duration-500 group-hover:opacity-100" />
    <line x1="9" y1="23" x2="27" y2="23" stroke="currentColor" strokeWidth="1" opacity="0.5" className="transition-all duration-500 delay-75 group-hover:opacity-100" />
    <line x1="9" y1="27" x2="18" y2="27" stroke="currentColor" strokeWidth="1" opacity="0.5" className="transition-all duration-500 delay-150 group-hover:opacity-100" />
    <path
      d="M24 22 L30 25 L27 26 L28.5 29 L27 29.7 L25.5 26.7 L23.5 27.5 Z"
      fill="currentColor"
      className="transition-transform duration-700 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[3px]"
    />
  </svg>
);

/* ---------- 04 · Performance — Rising bars + arrow ---------- */
const PerfIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
    {/* baseline */}
    <line x1="5" y1="32" x2="35" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.3" />

    {/* three bars that grow on hover (staggered) */}
    <rect
      x="9"
      y="24"
      width="5"
      height="8"
      fill="currentColor"
      className="origin-bottom transition-transform duration-500 ease-out scale-y-[0.4] group-hover:scale-y-100"
      style={{ transformOrigin: "center bottom" }}
    />
    <rect
      x="17.5"
      y="18"
      width="5"
      height="14"
      fill="currentColor"
      className="origin-bottom transition-transform duration-500 delay-75 ease-out scale-y-[0.4] group-hover:scale-y-100"
      style={{ transformOrigin: "center bottom" }}
    />
    <rect
      x="26"
      y="12"
      width="5"
      height="20"
      fill="currentColor"
      className="origin-bottom transition-transform duration-500 delay-150 ease-out scale-y-[0.4] group-hover:scale-y-100"
      style={{ transformOrigin: "center bottom" }}
    />

    {/* trend arrow going up-right */}
    <path
      d="M8 22 L20 14 L28 8 M22 8 H28 V14"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-0 transition-opacity duration-500 delay-200 group-hover:opacity-100"
    />
  </svg>
);