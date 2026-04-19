import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { SplitText, SplitLine } from "../SplitHeading";
import { useMagnetic } from "@/hooks/useMagnetic";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export const Hero = () => {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.2);

  return (
    <section id="top" className="relative min-h-screen px-6 md:px-10 pt-28 pb-16 overflow-hidden">
      {/* Ambient gradient field */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-ink">
        {/* Mesh gradient — orange bottom-left, indigo top-right */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 70% at 0% 100%,  rgba(255,90,31,0.70)  0%, transparent 55%),
              radial-gradient(ellipse 65% 60% at 100% 0%,  rgba(42,31,138,0.80)  0%, transparent 58%),
              radial-gradient(ellipse 55% 45% at 25% 75%,  rgba(200,55,15,0.35)  0%, transparent 50%),
              radial-gradient(ellipse 40% 35% at 80% 20%,  rgba(60,40,160,0.30)  0%, transparent 45%)
            `,
          }}
        />
        {/* Soft drifting halos for depth */}
        <div className="halo animate-halo-drift-a motion-reduce:animate-none" style={{ width: 760, height: 760, background: "#FF5A1F", left: -280, top: "42%", opacity: 0.32 }} />
        <div className="halo animate-halo-drift-b motion-reduce:animate-none" style={{ width: 620, height: 620, background: "#2A1F8A", right: -200, top: "-5%", opacity: 0.48 }} />
        {/* Edge-only vignette — keeps gradient visible, darkens corners */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 85% 80% at 50% 50%, transparent 45%, hsl(var(--ink) / 0.55) 100%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="mx-auto max-w-[1600px] relative">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <Reveal className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            <span className="h-eyebrow">Booking Q3 · 2 slots</span>
          </Reveal>
          <Reveal delay={0.16} className="h-eyebrow hidden md:block">Studio · Remote</Reveal>
        </div>

        {/* Big headline */}
        <h1 className="h-display font-display mb-10 flex flex-col items-start">
          <SplitLine><SplitText text="We Build" /></SplitLine>
          <div className="flex items-center gap-6 md:gap-10">
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
          <div className="mt-3 md:mt-5">
            <SplitLine><SplitText text="that works." delay={0.7} /></SplitLine>
          </div>
        </h1>

        {/* Sub grid */}
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <Reveal delay={0.16} className="md:col-span-5">
            <p className="text-lg md:text-xl text-mute-2 max-w-md">
               We build identity systems, interfaces and websites for founders who refuse to blend in — and the teams that back them.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="md:col-span-4 md:col-start-7">
            <div className="flex items-center gap-4">
              <a ref={ctaRef} href="#work" className="inline-flex items-center gap-3 rounded-full px-6 py-3.5 bg-signal text-ink text-sm font-medium hover:bg-signal-2 transition-colors">
                See selected work
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 12 L12 2 M5 2 H12 V9" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
              </a>
              <a href="#contact" className="u-link text-sm">Or write to us →</a>
            </div>
          </Reveal>

          <Reveal delay={0.32} className="md:col-span-3 md:col-start-10 flex md:justify-end items-end">
            <div className="text-right">
              <div className="h-eyebrow text-mute mb-2">Currently</div>
              <div className="italic-display text-2xl">Crafting Veldt, a <br />new dining identity.</div>
            </div>
          </Reveal>
        </div>

        {/* Featured strip */}
        <div className="mt-24 md:mt-32 grid md:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="md:col-span-7 relative overflow-hidden rounded-lg plate aspect-[16/10] group"
            data-cursor="view"
          >
            <div
              className="absolute inset-0 proj-img"
              style={{
                background: `radial-gradient(1000px 400px at 30% 80%, rgba(255,90,31,.75), transparent 60%),
                             radial-gradient(600px 400px at 80% 20%, rgba(42,31,138,.7), transparent 55%),
                             linear-gradient(135deg,#141417,#0A0A0B)`,
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="italic-display text-white/90" style={{ fontSize: "clamp(60px, 9vw, 140px)", lineHeight: 0.9 }}>
                  Veldt&nbsp;<span className="not-italic font-display">◐</span>
                </div>
                <div className="h-eyebrow text-white/60 mt-4">Identity · Menu · Site</div>
              </div>
            </div>
            <div className="absolute left-6 top-6"><span className="pill text-white/80">01 / Featured</span></div>
            <div className="absolute right-6 bottom-6 proj-arrow">
              <svg width="48" height="48" viewBox="0 0 48 48" className="text-white">
                <circle cx="24" cy="24" r="23" fill="none" stroke="currentColor" strokeOpacity=".4" />
                <path d="M18 30 L30 18 M22 18 H30 V26" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
            </div>
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <Reveal className="plate rounded-lg p-6 flex-1">
              <div>
                <div className="h-eyebrow text-mute mb-3">A word from Anya at Flint</div>
                <p className="font-display text-2xl md:text-3xl leading-tight">
                  "They rebuilt our brand in six weeks and pre‑empted questions our board hadn't thought to ask."
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-mute-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-signal to-signal-2" />
                Anya Beaumont · CEO, Flint Capital
              </div>
            </Reveal>

            <div className="grid grid-cols-3 gap-6">
              <Reveal delay={0.05} className="plate rounded-lg p-5">
                <div className="num font-display text-5xl">47</div>
                <div className="h-eyebrow text-mute mt-2">Brands shipped</div>
              </Reveal>
              <Reveal delay={0.1} className="plate rounded-lg p-5">
                <div className="num font-display text-5xl">8<span className="text-signal italic-display">y</span></div>
                <div className="h-eyebrow text-mute mt-2">In practice</div>
              </Reveal>
              <Reveal delay={0.15} className="plate rounded-lg p-5">
                <div className="num font-display text-5xl">96<span className="italic-display text-signal">%</span></div>
                <div className="h-eyebrow text-mute mt-2">Retain · re‑hire</div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex items-center justify-between">
          <div className="h-eyebrow text-mute flex items-center gap-3">
            <span className="inline-block w-10 h-px bg-current" />
            Scroll to wander
          </div>
          <div className="h-eyebrow text-mute">01 / 12</div>
        </div>
      </div>
    </section>
  );
};
