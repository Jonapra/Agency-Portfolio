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

/* ---------- 01 · Brand Identity — Orbiting system ---------- */
const BrandIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full overflow-visible">
    {/* outer orbit */}
    <circle
      cx="20"
      cy="20"
      r="15"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="2 3"
      className="origin-center transition-transform duration-[1200ms] ease-out group-hover:rotate-[360deg]"
    />
    {/* inner ring */}
    <circle
      cx="20"
      cy="20"
      r="8"
      stroke="currentColor"
      strokeWidth="1.2"
      className="origin-center transition-transform duration-700 ease-out group-hover:scale-110"
    />
    {/* satellite dot */}
    <circle
      cx="35"
      cy="20"
      r="1.6"
      fill="currentColor"
      className="origin-[20px_20px] transition-transform duration-[1200ms] ease-out group-hover:rotate-[360deg]"
      style={{ transformBox: "fill-box" as any }}
    />
    {/* core */}
    <circle
      cx="20"
      cy="20"
      r="2"
      fill="currentColor"
      className="transition-transform duration-500 ease-out group-hover:scale-[1.4] origin-center"
    />
  </svg>
);

/* ---------- 02 · Product Design — Layered frames ---------- */
const ProductIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
    <rect
      x="6"
      y="6"
      width="22"
      height="22"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.2"
      className="transition-transform duration-500 ease-out group-hover:-translate-x-[3px] group-hover:-translate-y-[3px]"
    />
    <rect
      x="12"
      y="12"
      width="22"
      height="22"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.2"
      className="transition-transform duration-500 ease-out group-hover:translate-x-[3px] group-hover:translate-y-[3px]"
    />
    {/* focus dot on second frame */}
    <circle
      cx="23"
      cy="23"
      r="1.4"
      fill="currentColor"
      className="transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:translate-x-[3px] group-hover:translate-y-[3px]"
      style={{ transformBox: "fill-box" as any }}
    />
  </svg>
);

/* ---------- 03 · Website — Browser with moving cursor ---------- */
const WebIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
    {/* window */}
    <rect
      x="5"
      y="8"
      width="30"
      height="24"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    {/* top bar */}
    <line x1="5" y1="14" x2="35" y2="14" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="8" cy="11" r="0.9" fill="currentColor" />
    <circle cx="11" cy="11" r="0.9" fill="currentColor" />
    <circle cx="14" cy="11" r="0.9" fill="currentColor" />

    {/* content lines */}
    <line
      x1="9"
      y1="19"
      x2="22"
      y2="19"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.5"
      className="transition-all duration-500 group-hover:opacity-100"
    />
    <line
      x1="9"
      y1="23"
      x2="27"
      y2="23"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.5"
      className="transition-all duration-500 delay-75 group-hover:opacity-100"
    />
    <line
      x1="9"
      y1="27"
      x2="18"
      y2="27"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.5"
      className="transition-all duration-500 delay-150 group-hover:opacity-100"
    />

    {/* cursor */}
    <path
      d="M24 22 L30 25 L27 26 L28.5 29 L27 29.7 L25.5 26.7 L23.5 27.5 Z"
      fill="currentColor"
      className="transition-transform duration-700 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[3px]"
    />
  </svg>
);

/* ---------- 04 · Performance — Vitals pulse ---------- */
const PerfIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
    {/* baseline */}
    <line
      x1="4"
      y1="20"
      x2="36"
      y2="20"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.25"
    />
    {/* pulse */}
    <path
      d="M4 20 H12 L15 12 L20 28 L24 16 L27 20 H36"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={1}
      className="perf-pulse"
      style={{
        strokeDasharray: 1,
        strokeDashoffset: 1,
      }}
    />
    {/* leading dot */}
    <circle
      cx="36"
      cy="20"
      r="1.6"
      fill="currentColor"
      className="transition-transform duration-500 ease-out group-hover:scale-[1.6] origin-center"
      style={{ transformBox: "fill-box" as any }}
    />
  </svg>
);