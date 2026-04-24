"use client";
import React from "react";
import { cn } from "@/lib/utils";

// 17 paths sampled every 3rd from original set — balanced density
const BEAMS = [
  "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
  "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
  "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
  "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
  "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
  "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
  "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
  "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
  "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
  "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659",
  "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
  "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
  "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
  "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
  "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539",
  "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
  "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
];

export const BackgroundBeams = React.memo(({ className }: { className?: string }) => (
  <div
    className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
    aria-hidden
  >
    {/* Single keyframe on SVG wrapper — 1 animation instance, GPU opacity only */}
    <style>{`
      @keyframes bb-breathe { 0%,100%{opacity:.45} 50%{opacity:.85} }
      .bb-svg { animation: bb-breathe 12s ease-in-out infinite; }
    `}</style>

    {/* ── Layer 1: Signal orange anchor blob — bottom-left ── */}
    <div
      className="halo animate-halo-drift-a"
      style={{
        width: 820, height: 820,
        left: -260, bottom: -280,
        background: "hsl(17 100% 56% / 0.22)",
      }}
    />

    {/* ── Layer 2: Indigo depth blob — top-right ── */}
    <div
      className="halo animate-halo-drift-b"
      style={{
        width: 720, height: 720,
        right: -220, top: -260,
        background: "hsl(245 60% 55% / 0.13)",
      }}
    />

    {/* ── Layer 3: Warm focal point — center ── */}
    <div
      className="halo animate-halo-drift-c"
      style={{
        width: 380, height: 380,
        left: "42%", top: "16%",
        background: "hsl(38 70% 70% / 0.07)",
      }}
    />

    {/* ── Layer 4: Spotlight cone from top-center — static, free ── */}
    <div
      className="absolute inset-x-0 top-0 h-[65%]"
      style={{
        background:
          "radial-gradient(ellipse 55% 45% at 50% 0%, hsl(17 100% 56% / 0.07) 0%, transparent 100%)",
      }}
    />

    {/* ── Layer 5: Diagonal beams — static SVG, single breathe ── */}
    <svg
      className="bb-svg absolute inset-0 w-full h-full"
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Cream/bone gradient — matches site palette, reads as light not colour */}
        <linearGradient id="bb-g" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%"   stopColor="#F2EDE4" stopOpacity="0" />
          <stop offset="38%"  stopColor="#F2EDE4" stopOpacity="0.28" />
          <stop offset="65%"  stopColor="#E8E1D3" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#F2EDE4" stopOpacity="0" />
        </linearGradient>
        {/* Radial mask: bright centre, fades to edges */}
        <radialGradient id="bb-msk" cx="46%" cy="32%" r="52%">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="70%"  stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="bb-m">
          <rect width="696" height="316" fill="url(#bb-msk)" />
        </mask>
      </defs>

      {BEAMS.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="url(#bb-g)"
          strokeOpacity={0.55 - i * 0.018}
          strokeWidth="0.5"
          mask="url(#bb-m)"
        />
      ))}
    </svg>

    {/* ── Layer 6: Film grain — SVG feTurbulence, static, zero JS ── */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.035]" aria-hidden>
      <filter id="bb-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.68"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#bb-noise)" />
    </svg>

    {/* ── Layer 7: Bottom vignette → clean content transition ── */}
    <div
      className="absolute inset-x-0 bottom-0 h-2/5"
      style={{
        background:
          "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background)/0.6) 40%, transparent 100%)",
      }}
    />
  </div>
));

BackgroundBeams.displayName = "BackgroundBeams";
