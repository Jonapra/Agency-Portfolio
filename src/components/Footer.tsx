import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { SectionContainer } from "@/components/ui/section-container";
import { NAV_LINKS, PROJECTS } from "@/constants/site";

export const Footer = () => (
  <footer className="relative pt-12">
    <SectionContainer>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-10">
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
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <a href={l.href.startsWith("#") ? `/${l.href}` : l.href} className="u-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.18} className="md:col-span-3">
            <div className="h-eyebrow text-mute mb-4">Work</div>
            <ul className="space-y-2 text-sm">
              {PROJECTS.map(p => (
                <li key={p.slug}>
                  <Link to={`/projects/${p.slug}`} className="u-link">{p.title}</Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

    </SectionContainer>

    {/* New Brand Bar Section */}
    <div className="mt-4 bg-[#FF4925] text-black w-full overflow-hidden">
      <SectionContainer className="py-2 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-4">
        <div className="font-sans font-black leading-none text-[clamp(40px,10vw,180px)] uppercase select-none" style={{ letterSpacing: "-0.09em" }}>
          Agiton
        </div>
        
        <div className="flex flex-col items-center md:items-end text-center md:text-right font-sans font-bold text-lg md:text-[clamp(14px,1.8vw,28px)] leading-[1.1] uppercase" style={{ letterSpacing: "-0.03em" }}>
          <span>Beyond Visuals</span>
          <span>Built With Vision</span>
        </div>
      </SectionContainer>
    </div>
  </footer>
);
