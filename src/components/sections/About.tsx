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
  const scrollRef  = useRef<HTMLDivElement>(null);
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

      gsap.to(words, {
        color: "rgba(255,255,255,1)",
        stagger: { each: 0.16, ease: "none" },
        ease: "none",
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top top",
          // Finish reveal at 75% of scroll travel — leaves a held "fully lit"
          // beat before the pin releases, so the section feels resolved.
          end: "75% bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [prefersReduced] }
  );

  return (
    <section id="about" ref={sectionRef} className="relative">
      {/* Tall scroll container drives the pin + scrub */}
      <div
        ref={scrollRef}
        className="lg:h-[240vh]"
      >
        {/* Sticky panel — uses svh so mobile browser chrome doesn't cause jumps */}
        <div
          className="lg:sticky lg:top-0 lg:h-[100svh] min-h-[560px] flex flex-col items-center justify-center overflow-hidden px-5 sm:px-8 md:px-16 py-16 lg:py-0"
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
      </div>
    </section>
  );
};
