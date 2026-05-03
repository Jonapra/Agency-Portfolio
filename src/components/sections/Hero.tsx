import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText, SplitLine } from "../SplitHeading";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { BookACallButton } from "@/components/ui/book-a-call-button";
import { SectionContainer } from "@/components/ui/section-container";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0);
  const prefersReduced = useReducedMotion();
  
  useGSAP(() => {
    if (prefersReduced) return;
  }, {});
  const fadeIn = {
    initial: { opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReduced ? 0 : 0.8, ease: [0.2, 0.8, 0.2, 1] }
  };

  return (
    <section
      id="top"
      className="relative min-h-fit lg:min-h-screen pt-20 md:pt-28 lg:pt-32 pb-0 md:pb-0 hero-section-text flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-signal/15 via-background to-background z-10"
    >
      <SectionContainer className="px-[2px] md:px-10 max-w-none md:max-w-[1400px] relative w-full flex flex-col items-center justify-center text-center mt-2 md:mt-8 lg:mt-0 2xl:mt-2 lg:flex-1 pb-12 md:pb-16 lg:pb-0">
        {/* Top Pill */}
        <motion.div 
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-current/10 bg-current/5 mb-6 md:mb-8 backdrop-blur-sm"
          {...fadeIn}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
          </span>
          <span className="h-eyebrow text-[10px] md:text-xs tracking-widest uppercase">Booking Available <span className="mx-2 opacity-50">·</span> Agiton Studio</span>
        </motion.div>

        {/* Headline */}
        <h1
          className="font-display mb-6 md:mb-8 flex flex-col items-center text-[40px] md:text-[80px] lg:text-[clamp(48px,7vw,110px)] 2xl:text-[130px] leading-[0.95] max-w-full md:max-w-[80vw] lg:max-w-4xl xl:max-w-5xl"
          style={{ letterSpacing: "-0.03em" }}
        >
          <div className="flex flex-wrap justify-center items-center">
            <SplitLine>
              <SplitText text="We Transform Ideas" className="text-transparent bg-clip-text bg-gradient-to-r from-signal to-signal-2 font-bold pb-1 md:pb-2" />
            </SplitLine>
          </div>
          <div className="mt-2 md:mt-3 lg:mt-4">
            <SplitLine>
              <span className="italic-display font-normal tracking-tight block text-white/90">
                <SplitText text="into digital experience" delay={0.3} />
              </span>
            </SplitLine>
          </div>
        </h1>

        {/* Subheadline */}
        <motion.div 
          className="max-w-full md:max-w-2xl 2xl:max-w-3xl mb-10 md:mb-12"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          <p className="text-sm md:text-base lg:text-lg 2xl:text-xl text-mute-2 px-0 md:px-0">
            Digital product design agency crafting UI/UX, Websites and SaaS that help business grow. We focus on user-friendly designs that look great and work smoothly.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 mb-0"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
        >
          <a
            ref={ctaRef}
            href="#work"
            className="inline-block"
          >
            <ButtonWithIcon 
              text="Projects"
              className="bg-signal hover:bg-signal-2 text-bold transition-colors duration-300"
            />
          </a>
          <BookACallButton href="#contact" />
        </motion.div>


      </SectionContainer>

      {/* AGITON brand band — fills mobile gap, anchors Hero, signals scroll */}
      <div
        aria-hidden="true"
        className="relative mx-auto w-full max-w-[1400px] lg:px-10 overflow-hidden h-20 md:h-24 lg:h-28 mt-10 md:mt-12 xl:mt-16 flex items-center select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max marquee-track [animation-duration:8s] md:[animation-duration:18s] lg:[animation-duration:25s]">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center shrink-0">
              {["UI/UX", "Design", "SaaS", "Web Development", "Full-Stack", "SEO"].map((word, i) => {
                const isItalic = i % 2 === 1;
                return (
                  <span
                    key={i}
                    className="flex items-center font-sans font-medium text-white text-[44px] md:text-[72px] lg:text-[104px] leading-none tracking-tight px-2 md:px-5 lg:px-8"
                  >
                    <span className="font-medium">
                      {word}
                    </span>
                    <span className="mx-2 md:mx-5 lg:mx-8 text-white text-[24px] md:text-[36px] lg:text-[48px] opacity-90">●</span>
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};