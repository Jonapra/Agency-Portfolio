import { motion, useReducedMotion } from "framer-motion";
import { SplitText, SplitLine } from "../SplitHeading";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { BookACallButton } from "@/components/ui/book-a-call-button";
import { SectionContainer } from "@/components/ui/section-container";
export const Hero = () => {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0);
  const prefersReduced = useReducedMotion();

  const fadeIn = {
    initial: { opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReduced ? 0 : 0.8, ease: [0.2, 0.8, 0.2, 1] }
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] md:min-h-0 pt-16 md:pt-20 lg:pt-20 2xl:pt-24 md:pb-16 lg:pb-20 2xl:pb-24 overflow-hidden hero-section-text flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-signal/15 via-background to-background"
    >
      <SectionContainer className="relative w-full flex-1 flex flex-col items-center justify-center text-center mt-12 md:mt-16 lg:mt-4 2xl:mt-6">
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
          className="flex flex-wrap justify-center items-center gap-4 mb-16 md:mb-20 lg:mb-24"
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

        {/* Bottom row: premium glassmorphic social proof */}
        <motion.div 
          className="w-full max-w-5xl mx-auto rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] mt-auto md:mt-0"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.4 }}
        >
          {/* Subtle animated gradient background inside the pill */}
          <div className="absolute inset-0 bg-gradient-to-r from-signal/0 via-signal/5 to-signal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

          {/* Wrapper for mobile grid, flex on desktop */}
          <div className="w-full grid grid-cols-2 md:flex md:flex-row md:justify-around gap-y-10 md:gap-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center justify-center w-full group/stat hover:scale-105 transition-transform duration-500 ease-out">
              <div className="num font-display text-5xl md:text-6xl lg:text-7xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 flex items-start drop-shadow-sm">
                15<span className="text-signal font-sans text-3xl md:text-4xl font-light mt-1 md:mt-2 ml-1">+</span>
              </div>
              <div className="h-eyebrow text-mute mt-4 md:mt-5 text-[10px] md:text-xs group-hover/stat:text-white/80 transition-colors duration-300">Websites shipped</div>
            </div>
            
            <div className="flex flex-col items-center justify-center w-full group/stat hover:scale-105 transition-transform duration-500 ease-out">
              <div className="num font-display text-5xl md:text-6xl lg:text-7xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 flex items-start drop-shadow-sm">
                10<span className="text-signal font-sans text-3xl md:text-4xl font-light mt-1 md:mt-2 ml-1">+</span>
              </div>
              <div className="h-eyebrow text-mute mt-4 md:mt-5 text-[10px] md:text-xs group-hover/stat:text-white/80 transition-colors duration-300">Industries Served</div>
            </div>
            
            <div className="flex flex-col items-center justify-center w-full group/stat hover:scale-105 transition-transform duration-500 ease-out">
              <div className="num font-display text-5xl md:text-6xl lg:text-7xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 flex items-start drop-shadow-sm">
                4<span className="text-signal font-sans text-3xl md:text-4xl font-light mt-1 md:mt-2">.9</span>
              </div>
              <div className="h-eyebrow text-mute mt-4 md:mt-5 text-[10px] md:text-xs group-hover/stat:text-white/80 transition-colors duration-300">Avg project rating</div>
            </div>
            
            <div className="flex flex-col items-center justify-center w-full group/stat hover:scale-105 transition-transform duration-500 ease-out">
              <div className="num font-display text-5xl md:text-6xl lg:text-7xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 flex items-start drop-shadow-sm">
                100<span className="text-signal font-sans text-3xl md:text-4xl font-light mt-1 md:mt-2 ml-1">%</span>
              </div>
              <div className="h-eyebrow text-mute mt-4 md:mt-5 text-[10px] md:text-xs group-hover/stat:text-white/80 transition-colors duration-300">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
};