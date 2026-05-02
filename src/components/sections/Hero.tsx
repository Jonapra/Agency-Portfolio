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
      className="relative pt-16 md:pt-24 lg:pt-32 pb-4 md:pb-8 lg:pb-20 hero-section-text flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-signal/15 via-background to-background z-10"
    >
      <SectionContainer className="relative w-full flex-1 flex flex-col items-center justify-center text-center mt-6 md:mt-8 lg:mt-0 2xl:mt-2">
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
          className="font-display mb-6 md:mb-8 flex flex-col items-center text-[40px] md:text-[80px] lg:text-[clamp(48px,7vw,110px)] 2xl:text-[130px] leading-[0.95] max-w-[90vw] md:max-w-[80vw] lg:max-w-4xl xl:max-w-5xl"
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
          className="max-w-2xl 2xl:max-w-3xl mb-10 md:mb-12"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          <p className="text-sm md:text-base lg:text-lg 2xl:text-xl text-mute-2 px-4 md:px-0">
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
    </section>
  );
};