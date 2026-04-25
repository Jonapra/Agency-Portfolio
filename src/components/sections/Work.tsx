import { Link } from "react-router-dom";
import { Reveal } from "../Reveal";
import { PROJECTS, type Project } from "@/constants/site";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { SectionContainer } from "@/components/ui/section-container";

const ProjectArt = ({ p }: { p: Project }) => {
  if (p.title === "Veldt")
    return (
      <div className="italic-display text-white" style={{ fontSize: "clamp(80px,10vw,160px)", lineHeight: 0.9 }}>
        Veldt<span className="not-italic font-display text-white/60">◐</span>
      </div>
    );
  if (p.title === "Flint OS")
    return (
      <div className="grid grid-cols-4 gap-2 w-[60%] h-[60%]">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className={`rounded-sm ${i % 5 === 0 ? "bg-signal" : "bg-white/10"}`} />
        ))}
      </div>
    );
  if (p.title === "Paperbound")
    return (
      <div className="text-ink text-center">
        <div className="italic-display" style={{ fontSize: "clamp(60px,8vw,120px)", lineHeight: 0.9 }}>
          Paperbound<span className="text-signal">.</span>
        </div>
        <div className="h-eyebrow mt-4 opacity-60">Issue 07 · Noise</div>
      </div>
    );
  // Aero/90
  return (
    <div className="relative">
      <svg width="420" height="220" viewBox="0 0 420 220" className="max-w-[70vw]">
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

const sizes = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];
const offsets = ["", "", "md:mt-10", "md:-mt-5"];

export const Work = () => (
  <section id="work" className="relative py-10 md:py-16">
    <SectionContainer>
      <div className="grid md:grid-cols-12 gap-8 mb-8">
        <div className="md:col-span-3"><div className="h-eyebrow text-mute mb-3">§ 03 · Selected</div></div>
        <div className="md:col-span-9 flex items-end justify-between">
          <Reveal><h2 className="h-section font-display">The <span className="italic-display text-signal">receipts.</span></h2></Reveal>
          {/* Archive link removed */}
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-5 md:gap-7">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05} className={`${sizes[i]} ${offsets[i]}`}>
            <Link to={`/projects/${p.slug}`} className="proj-card group block" data-cursor="view">
              <div
                className={`relative overflow-hidden rounded-lg plate ${p.invert ? "bg-cream" : ""}`}
                style={!p.invert ? { background: `linear-gradient(135deg, ${p.c2}, #06060a)` } : undefined}
              >
                <div
                  className="proj-img grid place-items-center aspect-[4/3] px-6"
                  style={{
                    background: p.invert
                      ? `linear-gradient(135deg, ${p.c1}, ${p.c2})`
                      : `radial-gradient(700px 300px at 30% 80%, ${p.c1}88, transparent 60%)`,
                  }}
                >
                  <ProjectArt p={p} />
                </div>
                <div className="absolute left-5 top-5">
                  <span className={`pill ${p.invert ? "text-ink" : "text-white/80"}`}>{p.tag}</span>
                </div>
                <div className="absolute right-5 bottom-5 proj-arrow">
                  <svg width="42" height="42" viewBox="0 0 42 42" className={p.invert ? "text-ink" : "text-white"}>
                    <circle cx="21" cy="21" r="20" fill="none" stroke="currentColor" strokeOpacity=".4" />
                    <path d="M15 27 L27 15 M19 15 H27 V23" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              </div>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="font-display text-2xl md:text-3xl">{p.title}</div>
                  <div className="text-mute-2 text-sm mt-1">{p.sub}</div>
                </div>
                <div className="text-right h-eyebrow text-mute">
                  <div>{p.meta}</div>
                  <div className="mt-1">{p.year}</div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
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
