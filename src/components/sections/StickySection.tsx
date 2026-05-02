"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const CARDS = [
  {
    title: "Discover & Define",
    desc: "We dive deep into your goals, audience, and brand to uncover insights and define a clear direction.",
  },
  {
    title: "Design & Build",
    desc: "With strategy in place, we craft stunning visuals and high-performing digital solutions tailored to your needs.",
  },
  {
    title: "Launch & Grow",
    desc: "We deploy, optimize, and support — ensuring your site performs and scales after it goes live.",
  },
] as const;

export function StickySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // ── Desktop (lg+): sticky scroll split animation ──────────────
      mm.add("(min-width: 1024px)", () => {
        const left = leftRef.current;
        const right = rightRef.current;
        const stack = stackRef.current;
        const trigger = desktopRef.current;
        if (!left || !right || !stack || !trigger) return;

        const splitPx = () => {
          const card = stack.firstElementChild as HTMLElement | null;
          return (card?.offsetWidth ?? 480) / 2 + 40;
        };
        const cardH = () => {
          const card = stack.firstElementChild as HTMLElement | null;
          return card?.offsetHeight ?? 487;
        };
        const startY = () => window.innerHeight / 2 + stack.offsetHeight / 2;
        const endY = () => -(stack.offsetHeight - cardH()) / 2;

        const applyInitial = () => {
          gsap.set(stack, { xPercent: -50, yPercent: -50, y: startY(), opacity: 1 });
        };

        if (reducedMotion) {
          gsap.set(stack, { xPercent: -50, yPercent: -50, y: 0, opacity: 1 });
          gsap.set(left, { x: -splitPx() });
          gsap.set(right, { x: splitPx() });
          return;
        }

        applyInitial();

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
            onRefreshInit: applyInitial,
          },
        });

        tl.to(left, { x: () => -splitPx(), ease: "power2.out", duration: 1 }, 0)
          .to(right, { x: () => splitPx(), ease: "power2.out", duration: 1 }, 0);
        tl.to(stack, { y: () => endY(), ease: "none", duration: 9 }, 0.5);
      });

      // ── Mobile/Tablet (<lg): staggered fade-up per card ──────────
      mm.add("(max-width: 1023px)", () => {
        if (reducedMotion) {
          mobileCardRefs.current.forEach((card) => {
            if (card) gsap.set(card, { opacity: 1, y: 0 });
          });
          return;
        }
        mobileCardRefs.current.forEach((card) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  );

  return (
    <div ref={sectionRef} className="w-full">

      {/* ── Desktop (lg+): sticky scroll ── */}
      <div ref={desktopRef} className="hidden lg:block relative w-full" style={{ height: "380vh" }}>
        <div className="sticky top-0 w-full h-screen overflow-hidden bg-white">

          <p className="absolute top-[7%] left-1/2 -translate-x-1/2 z-0 font-sans text-sm tracking-[0.2em] text-black/45 flex items-center gap-2 select-none whitespace-nowrap">
            <span aria-hidden>+</span>
            From concept to launch
          </p>

          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-10">
            <div ref={leftRef} className="text-right shrink-0" style={{ paddingRight: "0.35em" }}>
              <p
                className="font-serif font-semibold leading-[1.05] text-black whitespace-nowrap"
                style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}
              >
                Your ideas
              </p>
              <p
                className="font-serif font-semibold leading-[1.05] text-black whitespace-nowrap"
                style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}
              >
                into <em>Brand</em>
              </p>
            </div>
            <div ref={rightRef} className="text-left shrink-0" style={{ paddingLeft: "0.35em" }}>
              <p
                className="font-serif font-semibold leading-[1.05] text-black whitespace-nowrap"
                style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}
              >
                transform
              </p>
              <p
                className="font-serif font-semibold leading-[1.05] text-black whitespace-nowrap"
                style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}
              >
                stories
              </p>
            </div>
          </div>

          <div
            ref={stackRef}
            className="absolute top-1/2 left-1/2 z-20 flex flex-col gap-16 opacity-0"
          >
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-black/[0.08] rounded-2xl shadow-md flex flex-col p-8 w-[480px]"
                style={{ height: "487px" }}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-sans text-xl font-bold text-black">{card.title}</span>
                  <span className="font-sans text-black/25 tracking-widest text-base select-none" aria-hidden>
                    + + +
                  </span>
                </div>
                <div className="w-full rounded-xl bg-black/[0.04] mb-8 flex-1 min-h-[200px]" />
                <p className="font-sans text-base font-semibold text-black/80 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile + Tablet (<lg): stacked layout ── */}
      <div className="lg:hidden bg-white px-5 sm:px-10 py-16 sm:py-20">
        <p className="text-center font-sans text-xs tracking-[0.2em] text-black/45 flex items-center justify-center gap-2 select-none mb-8">
          <span aria-hidden>+</span>
          From concept to launch
        </p>

        <h2
          className="font-serif font-semibold text-center text-black leading-[1.1] mb-12 sm:mb-16"
          style={{ fontSize: "clamp(1.75rem, 6vw, 2.75rem)" }}
        >
          Your ideas transform
          <br />
          into <em>Brand stories</em>
        </h2>

        <div className="flex flex-col gap-5 sm:gap-6 max-w-xl mx-auto">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              ref={(el) => { mobileCardRefs.current[i] = el; }}
              className="bg-white border border-black/[0.08] rounded-2xl shadow-md flex flex-col p-6 sm:p-7 opacity-0"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-sans text-base font-bold text-black">{card.title}</span>
                <span className="font-sans text-black/25 tracking-widest text-sm select-none" aria-hidden>
                  + + +
                </span>
              </div>
              <div className="w-full rounded-xl bg-black/[0.04] mb-5 h-36 sm:h-44" />
              <p className="font-sans text-sm font-semibold text-black/80 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
