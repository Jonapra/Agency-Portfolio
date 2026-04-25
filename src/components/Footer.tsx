import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { SectionContainer } from "@/components/ui/section-container";

export const Footer = () => (
  <footer className="relative pt-12 pb-8">
    <SectionContainer>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-10 border-b border-foreground/10">
        <Reveal className="md:col-span-6">
          <div className="flex items-center gap-2 mb-6">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2 L26 14 L14 26 L2 14 Z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="14" cy="14" r="4" fill="hsl(var(--signal))" />
            </svg>
            <span className="font-display text-2xl">Agiton</span>
          </div>
          <p className="font-display text-3xl md:text-4xl leading-tight max-w-md">
            A design studio for founders who refuse to <span className="italic-display text-signal">blend in.</span>
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:contents gap-8">
          <Reveal delay={0.1} className="md:col-span-3">
            <div className="h-eyebrow text-mute mb-4">Studio</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="u-link">About</a></li>
              <li><a href="/#work" className="u-link">Projects</a></li>
              <li><a href="/#process" className="u-link">Process</a></li>
              <li><a href="#" className="u-link">Careers</a></li>
            </ul>
          </Reveal>
          <Reveal delay={0.18} className="md:col-span-3">
            <div className="h-eyebrow text-mute mb-4">Work</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/#work" className="u-link">Selected</a></li>
              <li><a href="#" className="u-link">Archive</a></li>
              <li><Link to="/projects/veldt" className="u-link">Case: Veldt</Link></li>
              <li><Link to="/projects/flint-os" className="u-link">Case: Flint OS</Link></li>
            </ul>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} y={40} className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="italic-display leading-[0.9]" style={{ fontSize: "clamp(48px, 10vw, 180px)" }}>
          Agiton<span className="text-signal">.</span>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-6 flex flex-col md:flex-row gap-6 md:items-center justify-between h-eyebrow text-mute">
        <div>© 2019 — 2026 Agiton Studio · Lisbon · Brooklyn</div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-signal">Instagram</a>
          <a href="#" className="hover:text-signal">Read.cv</a>
          <a href="#" className="hover:text-signal">Are.na</a>
          <a href="#" className="hover:text-signal">LinkedIn</a>
        </div>
        <div>Built in‑house · v4.2</div>
      </Reveal>
    </SectionContainer>
  </footer>
);
