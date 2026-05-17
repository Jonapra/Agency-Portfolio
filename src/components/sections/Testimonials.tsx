import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { TESTIMONIALS } from "@/constants/site";
import { SectionContainer } from "@/components/ui/section-container";

const AUTOPLAY_MS = 7000;
const EASE = [0.2, 0.8, 0.2, 1] as const;

export const Testimonials = () => {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;
  const sectionRef = useRef<HTMLElement>(null);

  const goTo = useCallback(
    (i: number) => setActive(((i % total) + total) % total),
    [total],
  );
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setTimeout(next, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, reduced, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.7 &&
        rect.bottom > window.innerHeight * 0.3;
      if (!inView) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const t = TESTIMONIALS[active];
  const words = useMemo(() => t.q.split(" "), [t.q]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-14 md:py-20 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <SectionContainer className="relative">
        <div className="grid md:grid-cols-12 gap-10 mb-10 md:mb-14">
          <div className="md:col-span-3 flex items-start">
            <div className="h-eyebrow text-mute flex items-center gap-3">
              <span aria-hidden="true" className="inline-block w-6 h-px bg-mute/50" />
              <span>Testimonials</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="h-section font-sans font-semibold">
                Kind words from{" "}
                <span className="italic-display text-signal">
                  founders who loved
                </span>{" "}
                our work.
              </h2>
            </Reveal>
          </div>
        </div>

        <FeaturedStage
          active={active}
          total={total}
          t={t}
          words={words}
          reduced={!!reduced}
          paused={paused}
          onPrev={prev}
          onNext={next}
        />
      </SectionContainer>
    </section>
  );
};

interface StageProps {
  active: number;
  total: number;
  t: (typeof TESTIMONIALS)[number];
  words: string[];
  reduced: boolean;
  paused: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const FeaturedStage = ({
  active,
  total,
  t,
  words,
  reduced,
  paused,
  onPrev,
  onNext,
}: StageProps) => (
  <div className="relative">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-12 -left-2 md:-top-20 md:-left-6 font-display text-signal/10 leading-none select-none"
      style={{ fontSize: "clamp(180px, 22vw, 360px)" }}
    >
      &ldquo;
    </div>

    <div className="relative plate rounded-3xl bg-ink-2/40 backdrop-blur-sm p-6 md:p-10 lg:p-12 overflow-hidden">
      <div className="flex items-center justify-between mb-5 md:mb-7">
        <div className="font-mono text-xs tracking-[0.2em] uppercase tabular-nums">
          <span className="text-cream">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="mx-2 text-mute/40">/</span>
          <span className="text-mute">
            {String(total).padStart(2, "0")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ArrowButton label="Previous testimonial" onClick={onPrev}>
            <ArrowLeft className="w-4 h-4" />
          </ArrowButton>
          <ArrowButton label="Next testimonial" onClick={onNext}>
            <ArrowRight className="w-4 h-4" />
          </ArrowButton>
        </div>
      </div>

      <div className="min-h-[140px] md:min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: EASE }}
            className="font-display text-2xl md:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-cream max-w-[28ch]"
          >
            {reduced ? (
              <>&ldquo;{t.q}&rdquo;</>
            ) : (
              <>
                <span className="text-signal">&ldquo;</span>
                {words.map((w, i) => (
                  <span
                    key={`${active}-${i}`}
                    className="inline-block overflow-hidden align-baseline"
                  >
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.05 + i * 0.022,
                        ease: EASE,
                      }}
                      className="inline-block whitespace-pre"
                    >
                      {w + " "}
                    </motion.span>
                  </span>
                ))}
                <span className="text-signal">&rdquo;</span>
              </>
            )}
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`meta-${active}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: reduced ? 0 : 0.45, ease: EASE }}
            className="flex items-center gap-4"
          >
            <div className="relative">
              <img
                src={t.avatar}
                alt={t.n}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-contain bg-ink-2 p-1 ring-1 ring-cream/15"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full ring-2 ring-signal/30"
              />
            </div>
            <div>
              <div className="font-sans font-medium text-base md:text-lg text-cream">
                {t.n}
              </div>
              <div className="text-sm text-mute">{t.r}</div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-3 md:min-w-[220px]">
          <div className="font-mono text-[10px] tracking-[0.22em] text-mute/70 uppercase">
            {paused ? "Paused" : "Auto"}
          </div>
          <div className="relative flex-1 h-px bg-cream/10 overflow-hidden">
            <motion.div
              key={`bar-${active}-${paused ? "p" : "r"}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: reduced || paused ? 0 : 1 }}
              transition={{
                duration: reduced || paused ? 0 : AUTOPLAY_MS / 1000,
                ease: "linear",
              }}
              style={{ originX: 0 }}
              className="absolute inset-0 bg-signal"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface ArrowButtonProps {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}

const ArrowButton = ({ onClick, label, children }: ArrowButtonProps) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="inline-flex items-center justify-center w-10 h-10 rounded-full plate bg-ink-2/60 text-cream cursor-pointer transition-all duration-300 ease-smooth hover:bg-signal hover:text-ink hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
  >
    {children}
  </button>
);
