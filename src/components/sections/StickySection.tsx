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
  const triggerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const left = leftRef.current;
      const right = rightRef.current;
      const stack = stackRef.current;
      const trigger = triggerRef.current;
      if (!left || !right || !stack || !trigger) return;

      const splitPx = () => {
        const card = stack.firstElementChild as HTMLElement | null;
        return (card?.offsetWidth ?? 480) / 2 + 40;
      };
      const startY = () => window.innerHeight / 2 + stack.offsetHeight / 2;
      const endY = () => -(window.innerHeight / 2 + stack.offsetHeight / 2);

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
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
          onRefreshInit: applyInitial,
        },
      });

      // Phase 1: text splits open (early, fast) — just enough to clear card width
      tl.to(left, { x: () => -splitPx(), ease: "power2.out", duration: 1 }, 0)
        .to(right, { x: () => splitPx(), ease: "power2.out", duration: 1 }, 0);

      // Phase 2: card stack scrolls continuously up through gap
      tl.to(stack, { y: () => endY(), ease: "none", duration: 9 }, 0.5);
    },
    { scope: triggerRef, dependencies: [reducedMotion] }
  );

  return (
    <div ref={triggerRef} className="relative w-full" style={{ height: "380vh" }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-white">

        {/* Label — fixed at top of section */}
        <p className="absolute top-[7%] left-1/2 -translate-x-1/2 z-0 font-sans text-xs md:text-sm tracking-[0.2em] text-black/45 flex items-center gap-2 select-none whitespace-nowrap">
          <span aria-hidden>+</span>
          From concept to launch
        </p>

        {/* Split headline — vertically centered, sticky in place. Hidden on mobile (no room beside card). */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center select-none pointer-events-none z-10">
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

        {/* Card stack — scrolls vertically through center gap. opacity:0 prevents flash before GSAP positions it. */}
        <div
          ref={stackRef}
          className="absolute top-1/2 left-1/2 z-20 flex flex-col gap-12 md:gap-16 opacity-0"
        >
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-black/[0.08] rounded-2xl shadow-md flex flex-col p-6 md:p-8 w-[86vw] sm:w-[55vw] md:w-[480px] max-w-[90vw]"
              style={{ height: "487px" }}
            >
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <span className="font-sans text-lg md:text-xl font-bold text-black">
                  {card.title}
                </span>
                <span
                  className="font-sans text-black/25 tracking-widest text-sm md:text-base select-none"
                  aria-hidden
                >
                  + + +
                </span>
              </div>

              <div className="w-full rounded-xl bg-black/[0.04] mb-6 md:mb-8 flex-1 min-h-[200px]" />

              <p className="font-sans text-base font-semibold text-black/80 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
