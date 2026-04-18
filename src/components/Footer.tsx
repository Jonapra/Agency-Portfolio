import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

export const Footer = () => (
  <footer className="relative px-6 md:px-10 pt-20 pb-10">
    <div className="mx-auto max-w-[1600px]">
      <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-foreground/10">
        <Reveal className="md:col-span-5">
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
        <Reveal delay={0.1} className="md:col-span-2">
          <div className="h-eyebrow text-mute mb-4">Studio</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="u-link">About</a></li>
            <li><a href="/#process" className="u-link">Process</a></li>
            <li><a href="/#journal" className="u-link">Journal</a></li>
            <li><a href="#" className="u-link">Careers</a></li>
          </ul>
        </Reveal>
        <Reveal delay={0.18} className="md:col-span-2">
          <div className="h-eyebrow text-mute mb-4">Work</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/#work" className="u-link">Selected</a></li>
            <li><a href="#" className="u-link">Archive</a></li>
            <li><Link to="/projects/veldt" className="u-link">Case: Veldt</Link></li>
            <li><Link to="/projects/flint-os" className="u-link">Case: Flint OS</Link></li>
          </ul>
        </Reveal>
        <Reveal delay={0.26} className="md:col-span-3">
          <div className="h-eyebrow text-mute mb-4">Dispatch</div>
          <p className="text-sm text-mute-2 mb-4">Short essays from the studio. Once a month, no tracking pixel.</p>
          <form
            className="flex items-center gap-2 border-b border-current pb-2"
            onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).reset(); alert("Subscribed — 👋"); }}
          >
            <input type="email" required placeholder="you@studio.co" className="bg-transparent outline-none text-sm flex-1 placeholder:text-mute" />
            <button className="h-eyebrow text-signal">Subscribe →</button>
          </form>
        </Reveal>
      </div>

      <Reveal delay={0.1} y={40} className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="italic-display leading-[0.9]" style={{ fontSize: "clamp(48px, 10vw, 180px)" }}>
          Agiton<span className="text-signal">.</span>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-10 flex flex-col md:flex-row gap-6 md:items-center justify-between h-eyebrow text-mute">
        <div>© 2019 — 2026 Agiton Studio · Lisbon · Brooklyn</div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-signal">Instagram</a>
          <a href="#" className="hover:text-signal">Read.cv</a>
          <a href="#" className="hover:text-signal">Are.na</a>
          <a href="#" className="hover:text-signal">LinkedIn</a>
        </div>
        <div>Built in‑house · v4.2</div>
      </Reveal>
    </div>
  </footer>
);
