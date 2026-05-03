import { Link } from "react-router-dom";
import { Reveal } from "../Reveal";
import { TextRise } from "../TextRise";
import { PROJECTS, type Project } from "@/constants/site";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { SectionContainer } from "@/components/ui/section-container";
import { cn } from "@/lib/utils";

const ProjectArt = ({ p }: { p: Project }) => {
  if (p.title === "Veldt")
    return (
      <div className="italic-display text-white" style={{ fontSize: "clamp(56px,7vw,110px)", lineHeight: 0.9 }}>
        Veldt<span className="not-italic font-display text-white/60">◐</span>
      </div>
    );
  if (p.title === "Flint OS")
    return (
      <div className="grid grid-cols-4 gap-2 w-[55%] h-[55%]">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className={`rounded-sm ${i % 5 === 0 ? "bg-signal" : "bg-white/10"}`} />
        ))}
      </div>
    );
  if (p.title === "Paperbound")
    return (
      <div className="text-ink text-center">
        <div className="italic-display" style={{ fontSize: "clamp(40px,5.5vw,80px)", lineHeight: 0.9 }}>
          Paperbound<span className="text-signal">.</span>
        </div>
        <div className="h-eyebrow mt-3 opacity-60 text-[10px]">Issue 07 · Noise</div>
      </div>
    );
  return (
    <div className="relative">
      <svg width="320" height="170" viewBox="0 0 420 220" className="max-w-[80%]">
        <g stroke="hsl(var(--signal))" fill="none" strokeWidth="1.2">
          <circle cx="100" cy="160" r="48" /><circle cx="320" cy="160" r="48" />
          <path d="M100 160 L180 80 L270 80 L320 160" />
          <path d="M180 80 L220 160" />
        </g>
        <text x="210" y="40" fill="#fff" fontFamily="Instrument Serif" fontStyle="italic" fontSize="40" textAnchor="middle">Aero / 90</text>
      </svg>
    </div>
  );
};

const ProjectCard = ({ p }: { p: Project }) => {
  const tags = p.meta.split(" · ");

  return (
    <Link to={`/projects/${p.slug}`} className="proj-card group block" data-cursor="view">
      {/* Visual frame */}
      <div
        className={cn(
          "relative overflow-hidden rounded-xl plate",
          p.invert ? "bg-cream" : ""
        )}
        style={
          !p.invert
            ? { background: `linear-gradient(135deg, ${p.c2}, #06060a)` }
            : undefined
        }
      >
        <div
          className="proj-img grid place-items-center aspect-[4/3] px-6"
          style={{
            background: p.invert
              ? `linear-gradient(135deg, ${p.c1}, ${p.c2})`
              : `radial-gradient(600px 260px at 50% 65%, ${p.c1}88, transparent 65%)`,
          }}
        >
          <ProjectArt p={p} />
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-mute">
        {tags.map((t, i) => (
          <span key={t} className="flex items-center gap-3">
            {i > 0 && <span className="w-1 h-1 rounded-full bg-foreground/20" />}
            <span>{t}</span>
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="mt-2 font-display font-semibold tracking-[-0.01em] text-[1.4rem] md:text-[1.65rem] lg:text-[1.85rem] leading-tight group-hover:text-signal transition-colors duration-300">
        {p.title}
      </h3>
    </Link>
  );
};

export const Work = () => (
  <section id="work" className="relative py-10 md:py-16">
    <SectionContainer>


      <h2
        aria-label="Our Work"
        className="font-sans font-black text-foreground leading-[0.82] tracking-[-0.045em] text-center whitespace-nowrap mb-12 md:mb-16 select-none"
        style={{ fontSize: "clamp(56px, 16.5vw, 240px)" }}
      >
        <TextRise>OUR WORK</TextRise>
      </h2>

      {/* Zigzag two-column grid — odd items offset down on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-12 md:gap-y-20">
        {PROJECTS.map((p, i) => (
          <Reveal
            key={p.slug}
            delay={i * 0.08}
            className={cn(i % 2 === 1 && "md:mt-24 lg:mt-40")}
          >
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>

      <div className="mt-16 md:mt-24 flex justify-center">
        <a href="#">
          <ButtonWithIcon
            text="See the full archive"
            className="bg-signal text-ink"
          />
        </a>
      </div>
    </SectionContainer>
  </section>
);
