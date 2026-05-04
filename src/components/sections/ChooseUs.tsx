"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type Stat = {
  target: number;
  suffix: string;
  accent: string;
  label: string;
};

const STATS: Stat[] = [
  { target: 300, suffix: "", accent: "+", label: "Successful projects completed" },
  { target: 10,  suffix: "", accent: "+", label: "Years of experience in creative industry" },
  { target: 99,  suffix: "", accent: "%", label: "Customer satisfaction rate" },
  { target: 25,  suffix: "", accent: "M", label: "In Client revenue growth" },
];

export const ChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced) {
        STATS.forEach((s, i) => {
          const el = numRefs.current[i];
          if (el) el.textContent = s.target.toString() + s.suffix;
        });
        return;
      }

      const trigger = cardRef.current;
      if (!trigger) return;

      const obj = { val: 0 };
      const tw = gsap.to(obj, {
        val: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger, start: "top 80%", once: true },
        onUpdate: () => {
          STATS.forEach((s, i) => {
            const el = numRefs.current[i];
            if (!el) return;
            const v = Math.floor(obj.val * s.target);
            el.textContent = v.toString() + s.suffix;
          });
        },
        onComplete: () => {
          STATS.forEach((s, i) => {
            const el = numRefs.current[i];
            if (el) el.textContent = s.target.toString() + s.suffix;
          });
        },
      });

      return () => {
        tw.scrollTrigger?.kill();
        tw.kill();
      };
    },
    { scope: sectionRef, dependencies: [reduced] }
  );

  const initialText = (s: Stat) =>
    reduced ? s.target.toString() + s.suffix : "0" + s.suffix;

  return (
    <section ref={sectionRef} id="choose-us" className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">

        <div className="mb-10 md:mb-14 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="h-eyebrow text-mute mb-4">(WHY US)</div>
            <h2 className="font-sans font-black leading-[0.85] text-[clamp(3rem,11vw,9rem)] uppercase tracking-tight text-mute-2">
              Numbers<br />don't lie
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 text-base md:text-lg text-mute-2 leading-snug md:text-right">
            With a decade of expertise, we craft bold brands and high-impact digital experiences that get results.
          </p>
        </div>

        <div
          aria-hidden
          className="h-3 w-full bg-[length:8px_100%] bg-repeat-x"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--foreground) / 0.35) 1px, transparent 1px)",
          }}
        />

        <div
          ref={cardRef}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "py-10 md:py-14 px-4 md:px-8 flex flex-col items-start border-foreground/10",
                i % 2 === 0 && "border-r md:border-r-0",
                i < STATS.length - 1 && "md:border-r",
                i < 2 && "border-b md:border-b-0"
              )}
            >
              <div className="font-sans font-semibold text-mute-2 leading-none text-[clamp(3rem,7vw,5.5rem)] tabular-nums">
                <span ref={(el) => (numRefs.current[i] = el)}>{initialText(s)}</span>
                <span className="text-signal">{s.accent}</span>
              </div>
              <div className="font-sans text-sm md:text-base text-mute-2 mt-6 leading-snug max-w-[14rem]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChooseUs;
