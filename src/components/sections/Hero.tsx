import { motion, useReducedMotion } from "framer-motion";
import { SplitText, SplitLine } from "../SplitHeading";
import { useMagnetic } from "@/hooks/useMagnetic";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { BookACallButton } from "@/components/ui/book-a-call-button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SectionContainer } from "@/components/ui/section-container";
import { useTheme } from "@/components/theme-provider";

export const Hero = () => {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0);
  const { theme } = useTheme();
  const prefersReduced = useReducedMotion();

  const fadeIn = {
    initial: { opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReduced ? 0 : 0.8, ease: [0.2, 0.8, 0.2, 1] }
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] md:min-h-0 pt-16 md:pt-20 lg:pt-20 2xl:pt-24 md:pb-16 lg:pb-20 2xl:pb-24 overflow-hidden hero-section-text flex flex-col"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-background" />
      {theme === "dark" && <BackgroundBeams className="opacity-50" />}

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
          className="font-display mb-6 md:mb-8 flex flex-col items-center text-[40px] md:text-[80px] lg:text-[clamp(48px,7vw,110px)] 2xl:text-[130px] leading-[0.95]"
          style={{ letterSpacing: "-0.03em" }}
        >
          <div className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-4 lg:gap-x-5">
            <SplitLine><SplitText text="We Build" /></SplitLine>
            <div className="relative inline-flex justify-center min-w-[3em]">
              <GooeyText
                texts={["Modern", "Stunning", "Beautiful", "Awesome"]}
                morphTime={1}
                cooldownTime={1.5}
                className="relative"
                textClassName="font-display italic-display text-signal whitespace-nowrap"
              />
            </div>
            <SplitLine><SplitText text="Websites" delay={0.15} /></SplitLine>
          </div>
          <div className="mt-2 md:mt-3 lg:mt-4">
            <SplitLine>
              <span className="italic-display text-signal font-normal tracking-tight block">
                <SplitText text="that shape your brand." delay={0.3} />
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
          className="flex flex-wrap justify-center items-center gap-4 mb-16 md:mb-24 lg:mb-32"
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
              className="bg-signal text-bold"
            />
          </a>
          <BookACallButton href="#contact" />
        </motion.div>

        {/* Bottom row: inline social proof */}
        <motion.div 
          className="w-full max-w-5xl border-t border-current/10 pt-8 md:pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center items-start mt-auto md:mt-0"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.4 }}
        >
          <div>
            <div className="num font-display text-4xl md:text-5xl lg:text-6xl leading-none">15<span className="text-signal font-bold">+</span></div>
            <div className="h-eyebrow text-mute mt-3 md:mt-4 text-[10px] md:text-xs">Websites shipped</div>
          </div>
          <div>
            <div className="num font-display text-4xl md:text-5xl lg:text-6xl leading-none">10<span className="text-signal font-bold">+</span></div>
            <div className="h-eyebrow text-mute mt-3 md:mt-4 text-[10px] md:text-xs">INDUSTRIES SERVED</div>
          </div>
          
          <div>
            <div className="num font-display text-4xl md:text-5xl lg:text-6xl leading-none">4<span className="">.9</span></div>
            <div className="h-eyebrow text-mute mt-3 md:mt-4 text-[10px] md:text-xs">Avg project rating</div>
          </div>
          <div>
            <div className="num font-display text-4xl md:text-5xl lg:text-6xl leading-none">100<span className="italic-display text-signal font-bold">%</span></div>
            <div className="h-eyebrow text-mute mt-3 md:mt-4 text-[10px] md:text-xs">CLIENT Satisfaction</div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
};