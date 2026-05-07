import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import { TextRise } from "../TextRise";
import { PROJECTS } from "@/constants/site";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { SectionContainer } from "@/components/ui/section-container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { WorkCard } from "./WorkCard";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SWAP_TRANSITION = { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] as const };

export const Work = () => {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      if (reduced) return;
      const update = () => {
        const vc = window.innerHeight / 2;
        let best = 0;
        let bestDist = Infinity;
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const dist = Math.abs(rect.top + rect.height / 2 - vc);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });
        setActive((prev) => (prev === best ? prev : best));
      };
      const st = ScrollTrigger.create({
        trigger: sectionRef.current!,
        start: "top bottom",
        end: "bottom top",
        onUpdate: update,
      });
      update();

      const cardScaleTriggers: ScrollTrigger[] = [];
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, { transformOrigin: "50% 50%", willChange: "transform" });
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });
        tl.fromTo(
          card,
          { scale: 0.86 },
          { scale: 1.04, ease: "power2.out", duration: 0.5 }
        ).to(card, { scale: 0.86, ease: "power2.in", duration: 0.5 });
        if (tl.scrollTrigger) cardScaleTriggers.push(tl.scrollTrigger);
      });

      ScrollTrigger.refresh();
      return () => {
        st.kill();
        cardScaleTriggers.forEach((t) => t.kill());
      };
    },
    { scope: sectionRef, dependencies: [reduced] }
  );

  const current = PROJECTS[active];
  const showStacked = reduced;

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-background text-foreground overflow-x-clip"
    >
      <SectionContainer className="pt-12 md:pt-20">
        <h2
          aria-label="Our Work"
          className="font-sans font-black uppercase leading-[0.85] tracking-[-0.04em] text-foreground text-6xl md:text-8xl lg:text-[140px] text-center select-none"
        >
          <TextRise>OUR WORK</TextRise>
        </h2>
      </SectionContainer>

      {/* Desktop ≥ lg (skipped when reduced motion) */}
      {!showStacked && (
        <SectionContainer className="hidden lg:block mt-16 lg:mt-24">
          <div className="grid grid-cols-[34%_66%] gap-x-[6vw] items-start">
            {/* LEFT — sticky single panel */}
            <div className="sticky top-[100px] self-start flex flex-col h-[calc(100vh-140px)] pb-6">
              {/* Big ghost number */}
              <div
                className="overflow-hidden"
                style={{ fontSize: "clamp(110px,11.5vw,190px)", lineHeight: 1 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`num-${active}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={SWAP_TRANSITION}
                    className="font-sans font-black tracking-[-0.045em] leading-none text-cream/15"
                  >
                    {String(active + 1).padStart(2, "0")}.
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mini-list — sits just below the number */}
              <ul className="mt-10 flex flex-col gap-3 text-base">
                {PROJECTS.map((p, i) => {
                  const isActive = i === active;
                  return (
                    <li key={p.slug} className="flex items-center gap-4">
                      <span
                        className={cn(
                          "h-px transition-all duration-500 ease-smooth",
                          isActive ? "w-10 bg-cream" : "w-6 bg-mute/35"
                        )}
                      />
                      <span
                        className={cn(
                          "font-display transition-colors duration-300 ease-smooth",
                          isActive ? "text-cream" : "text-mute/45"
                        )}
                      >
                        {p.title}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Active project info — pushed to bottom */}
              <div className="mt-auto overflow-hidden" style={{ minHeight: "8em" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`info-${active}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={SWAP_TRANSITION}
                  >
                    <h3
                      className="font-display tracking-[-0.01em] text-cream"
                      style={{ fontSize: "clamp(40px,4.2vw,68px)", lineHeight: 1.02 }}
                    >
                      {current.title}
                    </h3>
                    <p className="mt-4 text-mute text-base max-w-[320px] leading-relaxed">
                      {current.sub}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT — stacked cards in normal flow, capped width on huge screens */}
            <div className="flex flex-col gap-[14vh] py-[8vh] items-start">
              {PROJECTS.map((p, i) => (
                <div
                  key={p.slug}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  data-index={i}
                  className="w-full max-w-[680px]"
                >
                  <WorkCard p={p} />
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      )}

      {/* Mobile + tablet (< lg) OR reduced-motion at any width */}
      <div className={cn(showStacked ? "block" : "lg:hidden")}>
        <SectionContainer className="pb-8 mt-10 md:mt-16">
          <div className="flex flex-col gap-14">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={reduced ? false : { opacity: 0, y: 30 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                className="flex flex-col"
              >
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-mute/60 mb-4">
                  {String(i + 1).padStart(2, "0")} — {p.title}
                </div>
                <WorkCard p={p} />
                <h3 className="mt-6 font-display font-semibold tracking-[-0.01em] text-2xl md:text-3xl text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-base text-mute leading-relaxed max-w-md">
                  {p.sub}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-mute/70">
                  {p.meta} <span className="text-mute/40">·</span> {p.year}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center pb-20 md:pb-28 pt-10">
        <a href="#contact">
          <ButtonWithIcon text="More Projects" className="bg-signal text-ink" />
        </a>
      </div>
    </section>
  );
};
