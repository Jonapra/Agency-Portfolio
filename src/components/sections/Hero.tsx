import { Reveal } from "../Reveal";
import { SplitText, SplitLine } from "../SplitHeading";
import { useMagnetic } from "@/hooks/useMagnetic";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export const Hero = () => {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.2);
  const ctaRef2 = useMagnetic<HTMLAnchorElement>(0.18);

  return (
    <section id="top" className="relative min-h-screen px-6 md:px-10 pt-28 pb-10 overflow-hidden hero-section-text flex flex-col">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-background" />

      <div className="mx-auto max-w-[1600px] relative w-full flex-1 flex flex-col">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <Reveal className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            <span className="h-eyebrow">Booking Q3 · 2 slots</span>
          </Reveal>
          <Reveal delay={0.16} className="h-eyebrow hidden md:block">Studio · Remote</Reveal>
        </div>

        {/* Headline — compact */}
        <h1 className="font-display mb-8 flex flex-col items-start" style={{ fontSize: "clamp(40px, 8vw, 132px)", lineHeight: 0.95, letterSpacing: "-0.035em" }}>
          <SplitLine><SplitText text="We Build" /></SplitLine>
          <div className="flex items-center gap-3 md:gap-5">
            <Reveal delay={0.45}>
              <GooeyText
                texts={["Modern", "Stunning", "Beautiful", "Awesome"]}
                morphTime={1}
                cooldownTime={1.5}
                className="relative"
                textClassName="text-signal italic-display whitespace-nowrap"
              />
            </Reveal>
            <SplitLine><SplitText text="Websites" delay={0.45} /></SplitLine>
          </div>
          <div className="mt-2 md:mt-3">
            <SplitLine><SplitText text="that shape your brand." delay={0.7} /></SplitLine>
          </div>
        </h1>

        {/* Sub row: copy + CTAs */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <Reveal delay={0.16} className="md:col-span-6">
            <p className="text-base md:text-lg text-mute-2 max-w-xl">
              We build identity systems, interfaces and websites for founders who refuse to blend in — and the teams that back them.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="md:col-span-6 md:flex md:justify-end">
            <div className="flex flex-wrap items-center gap-3">
              <a
                ref={ctaRef}
                href="#work"
                className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 bg-signal text-ink text-sm font-medium hover:bg-signal-2 transition-colors"
              >
                See selected work
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 12 L12 2 M5 2 H12 V9" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
              </a>
              <a
                ref={ctaRef2}
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 border border-current/30 text-sm font-medium hover:bg-current/5 transition-colors"
              >
                Write to us
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 12 L12 2 M5 2 H12 V9" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Bottom row: inline social proof */}
        <div className="mt-auto pt-16 md:pt-20">
          <div className="border-t border-current/15 pt-6 grid md:grid-cols-12 gap-6 items-end">
            <Reveal delay={0.1} className="md:col-span-6 flex items-end gap-8 md:gap-12">
              <div>
                <div className="num font-display text-3xl md:text-4xl leading-none">10+</div>
                <div className="h-eyebrow text-mute mt-2">Websites shipped</div>
              </div>
              <div>
                <div className="num font-display text-3xl md:text-4xl leading-none">4<span className="text-signal italic-display">y</span></div>
                <div className="h-eyebrow text-mute mt-2">In practice</div>
              </div>
              <div>
                <div className="num font-display text-3xl md:text-4xl leading-none">96<span className="italic-display text-signal">%</span></div>
                <div className="h-eyebrow text-mute mt-2">Retain · re‑hire</div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="md:col-span-6 md:text-right">
              <div className="h-eyebrow text-mute mb-1">Currently</div>
              <div className="italic-display text-xl md:text-2xl">Crafting Veldt, a new dining identity.</div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
