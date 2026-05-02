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
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      const buildStickyAnim = (startY: () => number, extraSplit: () => number = () => 40) => {
        const left = leftRef.current;
        const right = rightRef.current;
        const stack = stackRef.current;
        const trigger = desktopRef.current;
        if (!left || !right || !stack || !trigger) return;

        const splitPx = () => {
          const card = stack.firstElementChild as HTMLElement | null;
          return (card?.offsetWidth ?? 480) / 2 + extraSplit();
        };
        const cardH = () => {
          const card = stack.firstElementChild as HTMLElement | null;
          return card?.offsetHeight ?? 487;
        };
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
      };

      // ── Desktop (lg–4K): original start ──
      mm.add("(min-width: 1024px) and (max-width: 2559px)", () => {
        buildStickyAnim(() => window.innerHeight / 2 + (stackRef.current?.offsetHeight ?? 0) / 2);
      });

      // ── 4K / ultra-wide (2560px+): reduced startY, shorter section ──
      mm.add("(min-width: 2560px)", () => {
        buildStickyAnim(() => window.innerHeight * 0.18);
      });

      // ── Tablet (md–lg): reduced startY so cards appear without huge gap ──
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        buildStickyAnim(() => window.innerHeight * 0.25);
      });

      // ── Mobile (<md): same sticky scroll ──
      mm.add("(max-width: 767px)", () => {
        buildStickyAnim(
          () => window.innerHeight * 0.6 + (stackRef.current?.offsetHeight ?? 0) * 0.5,
          () => window.innerWidth * 0.6,
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  );

  return (
    <div ref={sectionRef} className="w-full">

      {/* ── Desktop + Tablet (md+): sticky scroll ── */}
      <div ref={desktopRef} className="block relative w-full h-[220vh] md:h-[260vh] lg:h-[380vh] min-[2560px]:h-[220vh]">
        <div className="sticky top-0 w-full h-screen overflow-hidden bg-white">

          <p className="absolute top-10 md:top-[7%] left-1/2 -translate-x-1/2 z-0 font-sans text-sm min-[2560px]:text-xl tracking-[0.2em] text-black/45 flex items-center gap-2 select-none whitespace-nowrap">
            <span aria-hidden>+</span>
            From concept to launch
          </p>

          <div className="absolute inset-0 flex items-center justify-center translate-y-[8vh] md:translate-y-0 select-none pointer-events-none z-10">
            <div ref={leftRef} className="text-right shrink-0" style={{ paddingRight: "0.35em" }}>
              <p
                className="font-serif font-semibold leading-[1.05] text-black whitespace-nowrap"
                style={{ fontSize: "clamp(1.4rem, 3.8vw, 10rem)" }}
              >
                Your ideas
              </p>
              <p
                className="font-serif font-semibold leading-[1.05] text-black whitespace-nowrap"
                style={{ fontSize: "clamp(1.4rem, 3.8vw, 10rem)" }}
              >
                into <em>Brand</em>
              </p>
            </div>
            <div ref={rightRef} className="text-left shrink-0" style={{ paddingLeft: "0.35em" }}>
              <p
                className="font-serif font-semibold leading-[1.05] text-black whitespace-nowrap"
                style={{ fontSize: "clamp(1.4rem, 3.8vw, 10rem)" }}
              >
                transform
              </p>
              <p
                className="font-serif font-semibold leading-[1.05] text-black whitespace-nowrap"
                style={{ fontSize: "clamp(1.4rem, 3.8vw, 10rem)" }}
              >
                stories
              </p>
            </div>
          </div>

          <div
            ref={stackRef}
            className="absolute top-1/2 left-1/2 z-20 flex flex-col gap-12 lg:gap-16 min-[2560px]:gap-24 opacity-0"
          >
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-black/[0.08] rounded-2xl shadow-md flex flex-col p-6 lg:p-8 min-[2560px]:p-12 w-[300px] md:w-[320px] lg:w-[480px] min-[2560px]:w-[720px] h-[360px] md:h-[380px] lg:h-[487px] min-[2560px]:h-[730px]"
              >
                <div className="flex items-center justify-between mb-5 lg:mb-8 min-[2560px]:mb-12">
                  <span className="font-sans text-base lg:text-xl min-[2560px]:text-3xl font-bold text-black">{card.title}</span>
                  <span className="font-sans text-black/25 tracking-widest text-sm lg:text-base min-[2560px]:text-xl select-none" aria-hidden>
                    + + +
                  </span>
                </div>
                <div className="w-full rounded-xl bg-black/[0.04] mb-5 lg:mb-8 min-[2560px]:mb-12 flex-1 min-h-[140px] lg:min-h-[200px] min-[2560px]:min-h-[300px]" />
                <p className="font-sans text-xs lg:text-base min-[2560px]:text-2xl font-semibold text-black/80 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}