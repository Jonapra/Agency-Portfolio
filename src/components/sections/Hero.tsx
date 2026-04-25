import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SplitText, SplitLine } from "../SplitHeading";
import { useMagnetic } from "@/hooks/useMagnetic";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { BookACallButton } from "@/components/ui/book-a-call-button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SectionContainer } from "@/components/ui/section-container";

export const Hero = () => {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0);
  const ctaRef2 = useMagnetic<HTMLAnchorElement>(0);
  const [theme, setTheme] = useState<"dark" | "light">(() => (localStorage.getItem("agiton-theme") as "dark" | "light") || "dark");

  useEffect(() => {
    const interval = setInterval(() => {
      setTheme((localStorage.getItem("agiton-theme") as "dark" | "light") || "dark");
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Fade-in animation for non-text elements to appear with the headline
  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] md:min-h-0 pt-16 md:pt-20 lg:pt-24 2xl:pt-28 md:pb-16 lg:pb-20 2xl:pb-24 overflow-hidden hero-section-text flex flex-col"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-background" />
      {theme === "dark" && <BackgroundBeams className="opacity-50" />}

      <SectionContainer className="relative w-full flex-1 flex flex-col">
        {/* Top meta row */}
        <motion.div 
          className="flex items-center justify-between mb-4 md:mb-5 lg:mb-6"
          {...fadeIn}
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            <span className="h-eyebrow">Booking  · Available</span>
          </div>
          <div className="h-eyebrow hidden md:block">Studio · Remote</div>
        </motion.div>

        {/* Headline — synchronized timing */}
        <h1
          className="font-display mb-5 md:mb-6 flex flex-col items-start text-[36px] md:text-[70px] lg:text-[clamp(36px,6.5vw,96px)] 2xl:text-[110px]"
          style={{
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
          }}
        >
          <SplitLine><SplitText text="We Build" /></SplitLine>
          <div className="flex items-center gap-3 md:gap-5">
            <div className="relative">
              <GooeyText
                texts={["Modern", "Stunning", "Beautiful", "Awesome"]}
                morphTime={1}
                cooldownTime={1.5}
                className="relative"
                textClassName="text-signal italic-display whitespace-nowrap"
              />
            </div>
            <SplitLine><SplitText text="Websites" delay={0.15} /></SplitLine>
          </div>
          <div className="mt-2 md:mt-3">
            <SplitLine><SplitText text="that shape your brand." delay={0.3} /></SplitLine>
          </div>
        </h1>

        {/* Sub row: copy + CTAs */}
        <div className=" grid md:grid-cols-12 gap-6 md:gap-6 lg:gap-8 items-start md:items-center">
          <motion.div 
            className="md:col-span-6"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <p className="text-base md:text-base lg:text-lg text-mute-2 max-w-xl">
              We build identity systems, interfaces and websites for founders who refuse to blend in — and the teams that back them.
            </p>
          </motion.div>

          <motion.div 
            className="md:col-span-6 md:flex md:justify-end"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
          >
            <div className="flex flex-nowrap items-center gap-3">
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
            </div>
          </motion.div>
        </div>

        {/* Bottom row: inline social proof */}
        <div className="mt-auto md:mt-8 lg:mt-12 2xl:mt-16 pt-5 md:pt-6 lg:pt-8 2xl:pt-10">
          <motion.div 
            className="border-t border-current/15 pt-5 md:pt-6 lg:pt-8 2xl:pt-6 grid md:grid-cols-12 gap-6 items-end"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
          >
            <div className="md:col-span-6 flex items-end gap-6 md:gap-8 lg:gap-10 2xl:gap-12">
              <div>
                <div className="num font-display text-3xl md:text-4xl leading-none">10<span className="text-signal font-bold ">+</span></div>
                <div className="h-eyebrow text-mute mt-2">Websites shipped</div>
              </div>
              <div>
                <div className="num font-display text-3xl md:text-4xl leading-none">2<span className="text-signal italic-display">y</span></div>
                <div className="h-eyebrow text-mute mt-2">In practice</div>
              </div>
              <div>
                <div className="num font-display text-3xl md:text-4xl leading-none">96<span className="italic-display text-signal font-bold">%</span></div>
                <div className="h-eyebrow text-mute mt-2">Retain · re‑hire</div>
              </div>
            </div>

            <div className="md:col-span-6 md:text-right">
              <div className="h-eyebrow text-mute mb-1">Achivements</div>
              <div className="italic-display text-lg md:text-xl lg:text-2xl">We are proud to say we have <span className="text-signal italic-display font-bold">100%</span> client Satisfaction rate.</div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
};