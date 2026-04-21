import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../Reveal";
import { PROCESS_STEPS } from "@/constants/site";

export const Process = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalHeight = rect.height;
      const start = windowH * 0.5;
      const scrolled = start - rect.top;
      const raw = scrolled / totalHeight;
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="process" className="relative px-6 md:px-10 py-16 md:py-28">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="h-eyebrow text-mute mb-6">§ 04 · Process</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section font-display leading-[1.05]">
              Built To Move,{" "}
              <span className="italic-display text-signal">Ship High-Quality</span>{" "}
              Designs Faster
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-sm md:text-base text-mute-2 leading-relaxed max-w-2xl mx-auto">
              Most founders waste months juggling freelancers or waiting on agencies. We move at startup speed. Here's exactly how we work together to get you investor-ready and launch-ready fast.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">

          {/* Vertical line — desktop only, aligned to dot column (col 3 of 12) */}
          <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 right-0">
            <div className="relative h-full grid grid-cols-12 gap-x-8">
              <div className="col-start-3 flex justify-center relative">
                {/* Base line */}
                <div className="absolute top-6 bottom-6 w-[2px] bg-foreground/15 rounded-full" />
                {/* Progress fill */}
                <div
                  className="absolute top-6 w-[2px] bg-signal rounded-full shadow-[0_0_12px_hsl(var(--signal)/0.6)] transition-[height] duration-150 ease-out"
                  style={{ height: `calc(${progress * 100}% - 48px * ${progress})` }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-20 md:space-y-28 relative">
            {PROCESS_STEPS.map(([step, label, title, desc], i) => (
              <StepRow
                key={step}
                index={i}
                step={step}
                label={label}
                title={title}
                desc={desc}
                isLast={i === PROCESS_STEPS.length - 1}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

interface StepRowProps {
  index: number;
  step: string;
  label: string;
  title: string;
  desc: string;
  isLast: boolean;
}

const StepRow = ({ index, step, label, title, desc, isLast }: StepRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const check = () => {
      if (!rowRef.current) return;
      const rect = rowRef.current.getBoundingClientRect();
      const viewportMid = window.innerHeight * 0.55;
      setReached(rect.top < viewportMid);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  const dotActive = !isLast && reached;

  return (
    <Reveal delay={index * 0.08}>
      <div
        ref={rowRef}
        className="grid grid-cols-[40px_1fr] md:grid-cols-12 gap-x-5 md:gap-x-8 items-center group"
      >
        {/* Left label — desktop only */}
        <div className="hidden md:block md:col-span-2 text-right pr-2">
          <div className="font-display italic-display text-2xl md:text-[28px] lg:text-[32px] text-foreground/85 leading-tight whitespace-nowrap">
            {label}
          </div>
        </div>

        {/* Dot column */}
        <div className="md:col-span-1 flex justify-center relative">
          <div
            className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
              dotActive
                ? "bg-signal shadow-[0_0_0_6px_hsl(var(--signal)/0.15),0_0_24px_hsl(var(--signal)/0.5)]"
                : "bg-background border-2 border-signal/30"
            }`}
          >
            <ChevronDown
              className={`w-4 h-4 transition-colors duration-500 ${
                dotActive ? "text-ink" : "text-signal/50"
              }`}
              strokeWidth={3}
            />
          </div>
        </div>

        {/* Text content */}
        <div className="md:col-span-4 flex flex-col min-w-0">
          <span className="inline-flex items-center w-fit px-3 py-1 rounded-full bg-foreground/[0.06] border border-foreground/10 text-[11px] font-medium tracking-wide text-foreground/70 mb-3">
            {step}
          </span>
          <h3 className="font-display text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] mb-3 leading-[1.15] transition-colors duration-300 group-hover:text-signal">
            {title}
          </h3>
          <p className="text-sm md:text-[14px] text-mute-2 leading-relaxed max-w-md">
            {desc}
          </p>

          {/* Mobile: phase label */}
          <div className="md:hidden mt-4 font-display italic-display text-lg text-foreground/60">
            {label}
          </div>
        </div>

        {/* Image — right side */}
        <div className="hidden md:flex md:col-span-5 justify-end">
          <div className="w-full max-w-[220px] lg:max-w-[260px] aspect-[16/10] rounded-2xl overflow-hidden border border-foreground/10 bg-gradient-to-br from-foreground/[0.06] via-signal/[0.08] to-foreground/[0.03] shadow-[0_18px_50px_-20px_rgba(0,0,0,0.55),0_6px_20px_-10px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_26px_60px_-20px_rgba(0,0,0,0.7)] flex items-center justify-center relative">
            <span className="h-eyebrow text-mute/50 tracking-[0.2em]">0{index + 1}</span>
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Mobile image */}
        <div className="md:hidden col-start-2 mt-5 max-w-[180px]">
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-foreground/10 bg-gradient-to-br from-foreground/[0.06] via-signal/[0.08] to-foreground/[0.03] shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] flex items-center justify-center">
            <span className="h-eyebrow text-mute/50 tracking-[0.2em]">0{index + 1}</span>
          </div>
        </div>

      </div>
    </Reveal>
  );
};
