import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { TextRise } from "../TextRise";
import { PROJECTS, type Project } from "@/constants/site";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { SectionContainer } from "@/components/ui/section-container";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectArt = ({ p }: { p: Project }) => {
  if (p.title === "Veldt")
    return (
      <div className="italic-display text-white" style={{ fontSize: "clamp(56px,7vw,140px)", lineHeight: 0.9 }}>
        Veldt<span className="not-italic font-display text-white/60">◐</span>
      </div>
    );
  if (p.title === "Flint OS")
    return (
      <div className="grid grid-cols-4 gap-2 w-[55%] h-[55%]">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className={`rounded-sm ${i % 5 === 0 ? "bg-signal" : "bg-white/10"}`} />
        ))}
      </div>
    );
  if (p.title === "Paperbound")
    return (
      <div className="text-ink text-center">
        <div className="italic-display" style={{ fontSize: "clamp(40px,5.5vw,100px)", lineHeight: 0.9 }}>
          Paperbound<span className="text-signal">.</span>
        </div>
        <div className="h-eyebrow mt-3 opacity-60 text-[10px]">Issue 07 · Noise</div>
      </div>
    );
  return (
    <div className="relative">
      <svg viewBox="0 0 420 220" className="w-[70%] max-w-[520px]">
        <g stroke="hsl(var(--signal))" fill="none" strokeWidth="1.2">
          <circle cx="100" cy="160" r="48" /><circle cx="320" cy="160" r="48" />
          <path d="M100 160 L180 80 L270 80 L320 160" />
          <path d="M180 80 L220 160" />
        </g>
        <text x="210" y="40" fill="#fff" fontFamily="Instrument Serif" fontStyle="italic" fontSize="40" textAnchor="middle">Aero / 90</text>
      </svg>
    </div>
  );
};

const CardVisual = ({ p }: { p: Project }) => (
  <div
    className="relative w-full h-full grid place-items-center overflow-hidden"
    style={{
      background: p.invert
        ? `linear-gradient(135deg, ${p.c1}, ${p.c2})`
        : `linear-gradient(135deg, ${p.c2}, #06060a)`,
    }}
  >
    {!p.invert && (
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(700px 320px at 50% 60%, ${p.c1}55, transparent 65%)` }}
        aria-hidden
      />
    )}
    <div className="relative z-10 w-full h-full grid place-items-center px-6">
      <ProjectArt p={p} />
    </div>
  </div>
);

export const Work = () => {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const N = PROJECTS.length;
  const eyebrow = `(${String(N).padStart(2, "0")})`;

  useGSAP(
    () => {
      if (reduced) return;
      const root = sectionRef.current;
      if (!root) return;

      const stacks = root.querySelectorAll<HTMLElement>(".lw-stack");
      const cards = root.querySelectorAll<HTMLElement>(".lw-card");
      const progress = root.querySelector<HTMLElement>(".lw-progress");
      const scrollEl = root.querySelector<HTMLElement>(".lw-scroll");
      if (!scrollEl) return;

      // Odometer translate — each stack moves -(N-1) rows over scroll length.
      stacks.forEach((stack) => {
        const rows = stack.children.length;
        if (rows < 2) return;
        gsap.to(stack, {
          y: () => -(stack.scrollHeight - stack.children[0].clientHeight),
          ease: "none",
          scrollTrigger: {
            trigger: scrollEl,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });

      // Progress bar
      if (progress) {
        gsap.fromTo(
          progress,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: scrollEl,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
            },
          }
        );
      }

      // Card scale-to-center: smooth distance-from-viewport-center mapping.
      const ctxCards: ScrollTrigger[] = [];
      cards.forEach((card) => {
        const inner = card.querySelector<HTMLElement>(".lw-card-inner");
        const img = card.querySelector<HTMLElement>(".lw-img");
        const st = ScrollTrigger.create({
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: () => {
            const rect = card.getBoundingClientRect();
            const vh = window.innerHeight;
            const cardCenter = rect.top + rect.height / 2;
            const viewCenter = vh / 2;
            const dist = Math.abs(cardCenter - viewCenter);
            const max = vh / 2 + rect.height / 2;
            const t = Math.min(1, dist / max);
            // Eased: 1 at center, 0.72 at edges
            const ease = 1 - Math.pow(t, 1.4);
            const scale = 0.72 + 0.28 * ease;
            if (inner) inner.style.transform = `scale(${scale})`;
            if (img) {
              const py = (cardCenter - viewCenter) / vh; // -0.5..0.5
              img.style.transform = `translateY(${py * 8}%)`;
            }
          },
        });
        ctxCards.push(st);
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef, dependencies: [reduced] }
  );

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-background text-foreground overflow-hidden"
    >
      <SectionContainer className="pt-12 md:pt-20">
        <div className="flex items-end justify-between gap-6">
          <h2
            aria-label="Our Work"
            className="font-sans font-black text-foreground leading-[0.82] tracking-[-0.045em] whitespace-nowrap select-none"
            style={{ fontSize: "clamp(56px, 14vw, 220px)" }}
          >
            <TextRise>OUR WORK</TextRise>
          </h2>
          <span className="hidden md:inline-block font-mono text-xs md:text-sm text-mute mb-4 md:mb-8">
            {eyebrow}
          </span>
        </div>
      </SectionContainer>

      {/* Desktop: 2-col scroll-driven block */}
      <div className="hidden md:block">
        <div
          className="lw-scroll relative"
          style={{ minHeight: `${N * 110}vh` }}
        >
          <div className="sticky top-0 h-screen w-full">
            <div className="grid grid-cols-[40%_60%] h-full">
              {/* Left column */}
              <div className="relative flex flex-col justify-center gap-8 pl-[6vw] pr-6">
                {/* Number odometer */}
                <div
                  className="overflow-hidden"
                  style={{ height: "1em", lineHeight: 1, fontSize: "clamp(96px,12vw,200px)" }}
                >
                  <div className="lw-stack font-sans font-black text-mute/30 tracking-[-0.04em] leading-none">
                    {PROJECTS.map((p, i) => (
                      <div key={p.slug} style={{ height: "1em", lineHeight: 1 }}>
                        {String(i + 1).padStart(2, "0")}.
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mini-list odometer */}
                <div
                  className="overflow-hidden"
                  style={{ height: `${N * 1.8}em`, fontSize: "0.95rem", lineHeight: 1.8 }}
                >
                  <div className="lw-stack font-mono uppercase tracking-[0.18em] text-mute/40">
                    {PROJECTS.map((p) => (
                      <div
                        key={p.slug}
                        className="flex items-center gap-3"
                        style={{ height: "1.8em" }}
                      >
                        <span className="w-4 h-px bg-current opacity-60" />
                        <span>{p.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Title + desc + tags odometer */}
                <div
                  className="overflow-hidden"
                  style={{ height: "9.5em" }}
                >
                  <div className="lw-stack">
                    {PROJECTS.map((p) => (
                      <div
                        key={p.slug}
                        className="flex flex-col justify-start"
                        style={{ height: "9.5em" }}
                      >
                        <h3 className="font-display font-semibold tracking-[-0.01em] text-2xl lg:text-3xl text-foreground">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-mute text-sm lg:text-base max-w-md leading-relaxed">
                          {p.sub}
                        </p>
                        <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-mute/70">
                          {p.meta}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress */}
                <div className="absolute bottom-10 left-[6vw] right-6 h-px bg-mute/20 overflow-hidden">
                  <div className="lw-progress h-full bg-signal origin-left" style={{ transform: "scaleX(0)" }} />
                </div>
              </div>

              {/* Right column — empty placeholder; cards live in absolute layer below */}
              <div />
            </div>
          </div>

          {/* Cards scroll layer — sits over the right column via grid offset */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="grid grid-cols-[40%_60%] h-full">
              <div />
              <div className="flex flex-col items-center justify-start gap-[18vh] py-[30vh] pr-[6vw] pl-6">
                {PROJECTS.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/projects/${p.slug}`}
                    data-cursor="view"
                    className="lw-card pointer-events-auto block w-[80%] max-w-[860px] aspect-[5/3]"
                  >
                    <div
                      className="lw-card-inner relative w-full h-full overflow-hidden rounded-2xl will-change-transform"
                      style={{ transform: "scale(0.72)", transformOrigin: "center center" }}
                    >
                      <div className="lw-img absolute inset-[-6%] will-change-transform">
                        <CardVisual p={p} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stacked column */}
      <div className="md:hidden">
        <SectionContainer className="pb-8">
          <div className="flex flex-col gap-10 mt-6">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Link
                  to={`/projects/${p.slug}`}
                  className="block"
                  data-cursor="view"
                >
                  <div className="font-mono text-xs uppercase tracking-[0.22em] text-mute/60 mb-3">
                    {String(i + 1).padStart(2, "0")} — {p.title}
                  </div>
                  <div className="relative w-full aspect-[5/3] overflow-hidden rounded-xl">
                    <CardVisual p={p} />
                  </div>
                  <h3 className="mt-4 font-display font-semibold tracking-[-0.01em] text-xl text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-mute leading-relaxed">{p.sub}</p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-mute/70">{p.meta}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center pb-16 md:pb-24 pt-6">
        <a href="#">
          <ButtonWithIcon text="See the full archive" className="bg-signal text-ink" />
        </a>
      </div>
    </section>
  );
};
