import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const WORDS = [
  { text: "Driven",        italic: false },
  { text: "by",            italic: false },
  { text: "Strategy,",     italic: true  },
  { text: "fueled",        italic: false },
  { text: "by",            italic: false },
  { text: "imagination.",  italic: false },
  { text: "We",            italic: false },
  { text: "craft",         italic: false },
  { text: "design-first",  italic: false },
  { text: "solutions",     italic: false },
  { text: "that",          italic: false },
  { text: "help",          italic: false },
  { text: "Brands",        italic: true  },
  { text: "stand",         italic: false },
  { text: "out",           italic: false },
  { text: "and",           italic: false },
  { text: "thrive",        italic: false },
  { text: "in",            italic: false },
  { text: "the",           italic: false },
  { text: "digital",       italic: false },
  { text: "age.",          italic: false },
];

export const About = () => {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef   = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const words = textRef.current?.querySelectorAll<HTMLElement>(".word");
      if (!words?.length) return;

      if (prefersReduced) {
        gsap.set(words, { color: "rgba(255,255,255,0.95)" });
        return;
      }

      gsap.set(words, { color: "rgba(255,255,255,0.16)" });

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile:  "(max-width: 1023px)",
        },
        (ctx) => {
          const { isDesktop } = ctx.conditions as { isDesktop: boolean };
          // Mobile/tablet: pin 80vh, reveal completes at 60% (48vh) — leaves
          // a short held beat before unpin. Desktop: pin 140vh, reveal at 75%.
          const pinEnd    = isDesktop ? "+=140%" : "+=80%";
          const revealEnd = isDesktop ? "+=105%" : "+=48%";

          gsap.to(words, {
            color: "rgba(255,255,255,1)",
            stagger: { each: 0.16, ease: "none" },
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: revealEnd,
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          });

          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: pinEnd,
            pin: panelRef.current,
            pinSpacing: true,
            invalidateOnRefresh: true,
          });
        }
      );
    },
    { scope: sectionRef, dependencies: [prefersReduced] }
  );

  return (
    <section id="about" ref={sectionRef} className="relative">
      {/* GSAP ScrollTrigger pins this panel; pinSpacing handles layout */}
      <div
        ref={panelRef}
        className="h-[100svh] min-h-[560px] flex flex-col items-center justify-center overflow-hidden px-5 sm:px-8 md:px-16"
        style={{ backgroundColor: "hsl(var(--background))" }}
      >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-white/30 uppercase mb-6 sm:mb-8 md:mb-12 select-none">
            About
          </p>

          <h3
            ref={textRef}
            className="max-w-[20ch] sm:max-w-[24ch] md:max-w-[28ch] mx-auto text-center font-medium text-[30px] xs:text-[34px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] leading-[1.18] md:leading-[1.12] tracking-[-0.02em]"
          >
            {WORDS.map((w, i) => (
              <span
                key={i}
                className={`word inline-block mr-[0.28em] last:mr-0 ${
                  w.italic ? "font-display italic-display" : ""
                }`}
              >
                {w.text}
              </span>
            ))}
          </h3>
      </div>
    </section>
  );
};
