"use client";

import { useRef, useEffect, useState } from "react";
import { Phone, Lightbulb, PenTool, Image, Music, Video, Users, TrendingUp, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const STEPS: ProcessStep[] = [
  {
    title: "Discovery and consultation",
    description: "We dive deep into your brand, audience, and goals to understand what makes you unique and map out the optimal path forward.",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    title: "Strategy development",
    description: "Based on our findings, we craft a tailored social media strategy with content pillars, posting schedules, and growth tactics.",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    title: "Content creation",
    description: "Our team produces scroll-stopping visuals, videos, and copy that align with your brand voice and resonate with your audience.",
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    title: "Implementation and management",
    description: "We execute the strategy across all platforms, engage with your community, and continuously optimize for maximum impact.",
    icon: <Image className="w-5 h-5" />,
  },
  {
    title: "Analytics and reporting",
    description: "Transparent dashboards and detailed reports show exactly what's working, what's not, and how we can improve results.",
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

interface ProcessRowProps {
  step: ProcessStep;
  index: number;
  total: number;
  progress: number;
}

const ProcessRow = ({ step, index, total, progress }: ProcessRowProps) => {
  const stepThreshold = (index + 0.5) / total;
  const active = progress >= stepThreshold;
  const isEven = index % 2 === 0;

  return (
    <div className="relative">
      {/* Mobile dot on rail */}
      <div className="absolute md:hidden left-[14px] top-6 -translate-x-1/2 z-20">
        <div
          className={cn(
            "w-2.5 h-2.5 rounded-full transition-all duration-500",
            active
              ? "bg-[hsl(var(--process-accent))] scale-110"
              : "bg-[hsl(var(--process-line))] scale-100"
          )}
          style={
            active
              ? { boxShadow: "0 0 8px hsl(var(--process-accent) / 0.6), 0 0 16px hsl(var(--process-accent) / 0.3)" }
              : undefined
          }
        />
      </div>

      {/* Desktop: alternating layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-16 md:items-center md:py-8">
        {/* Text block - left on even, right on odd */}
        <div className={cn("pr-8", !isEven && "md:order-2 md:pl-8 md:pr-0")}>
          <div
            className={cn(
              "transition-all duration-700",
              active ? "opacity-100 translate-y-0" : "opacity-60 translate-y-2"
            )}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className="font-mono text-xs tracking-[0.18em]"
                style={{ color: "hsl(var(--process-muted) / 0.5)" }}
              >
                0{index + 1}
              </span>
              <div
                className="h-px flex-1"
                style={{ background: "hsl(var(--process-muted) / 0.15)" }}
              />
            </div>
            <h3
              className="text-lg sm:text-xl font-semibold mb-3 leading-tight"
              style={{ color: "hsl(var(--cream))" }}
            >
              {step.title}
            </h3>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "hsl(var(--process-muted))" }}
            >
              {step.description}
            </p>
            {/* Decorative icon card */}
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg border transition-all duration-500"
              style={{
                background: "hsl(var(--process-icon-bg))",
                borderColor: "hsl(var(--process-card-border))",
                color: "hsl(var(--process-icon-fg))",
                boxShadow: active
                  ? "0 0 12px hsl(var(--process-accent) / 0.2)"
                  : "none",
              }}
            >
              {step.icon}
            </div>
          </div>
        </div>

        {/* Visual placeholder block */}
        <div className={cn("pl-8", !isEven && "md:order-1 md:pl-0 md:pr-8")}>
          <div
            className={cn(
              "rounded-lg border p-5 transition-all duration-700",
              active ? "opacity-100 translate-y-0" : "opacity-60 translate-y-2"
            )}
            style={{
              background: "hsl(var(--process-card-bg))",
              borderColor: "hsl(var(--process-card-border))",
            }}
          >
            <div className="flex items-center justify-center gap-3">
              {/* Decorative icons for visual appeal */}
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center"
                style={{
                  background: "hsl(var(--process-icon-bg))",
                  color: "hsl(var(--process-icon-fg) / 0.7)",
                }}
              >
                <Video className="w-4 h-4" />
              </div>
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center"
                style={{
                  background: "hsl(var(--process-icon-bg))",
                  color: "hsl(var(--process-icon-fg) / 0.5)",
                }}
              >
                <Music className="w-4 h-4" />
              </div>
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center"
                style={{
                  background: "hsl(var(--process-icon-bg))",
                  color: "hsl(var(--process-icon-fg) / 0.3)",
                }}
              >
                <Users className="w-4 h-4" />
              </div>
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center"
                style={{
                  background: "hsl(var(--process-icon-bg))",
                  color: "hsl(var(--process-icon-fg) / 0.8)",
                }}
              >
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="md:hidden pl-10 py-6">
        <div
          className={cn(
            "transition-all duration-700",
            active ? "opacity-100 translate-y-0" : "opacity-60 translate-y-2"
          )}
        >
          <div className="flex items-center gap-3 mb-3">
            <span
              className="font-mono text-xs tracking-[0.18em]"
              style={{ color: "hsl(var(--process-muted) / 0.5)" }}
            >
              0{index + 1}
            </span>
            <div
              className="h-px flex-1"
              style={{ background: "hsl(var(--process-muted) / 0.15)" }}
            />
          </div>
          <h3
            className="text-base font-semibold mb-3 leading-tight"
            style={{ color: "hsl(var(--cream))" }}
          >
            {step.title}
          </h3>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "hsl(var(--process-muted))" }}
          >
            {step.description}
          </p>
          {/* Decorative icon card */}
          <div
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg border transition-all duration-500"
            style={{
              background: "hsl(var(--process-icon-bg))",
              borderColor: "hsl(var(--process-card-border))",
              color: "hsl(var(--process-icon-fg))",
              boxShadow: active
                ? "0 0 12px hsl(var(--process-accent) / 0.2)"
                : "none",
            }}
          >
            {step.icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProcessTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.6;
      const end = vh * 0.4;
      const total = rect.height + (start - end);
      const traveled = start - rect.top;
      setProgress(Math.max(0, Math.min(1, traveled / total)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      className="py-20 sm:py-28 md:py-32"
      style={{ background: "hsl(var(--process-bg))" }}
    >
      <div className="mx-auto w-full max-w-[1044px] px-5 sm:px-8">
        {/* Header */}
        <header className="mb-14 md:mb-20 text-center">
          <p
            className="h-eyebrow mb-4 tracking-[0.25em]"
            style={{ color: "hsl(var(--process-accent))" }}
          >
            Our Process
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight"
            style={{ color: "hsl(var(--cream))" }}
          >
            How We Drive Your Social Media Success
          </h2>
          <p
            className="max-w-3xl mx-auto text-base leading-relaxed"
            style={{ color: "hsl(var(--process-muted))" }}
          >
            A proven five-step approach that transforms your social presence from
            average to extraordinary. Every phase is designed to deliver measurable
            results.
          </p>
        </header>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical rail */}
          <div
            className="pointer-events-none absolute inset-y-0 md:left-1/2 w-px md:-translate-x-1/2"
            style={{ left: "14px" }}
            aria-hidden
          >
            {/* Static track */}
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: "hsl(var(--process-line))" }}
            />
            {/* Accent fill */}
            <div
              className="absolute top-0 left-0 right-0 rounded-full"
              style={{
                background: "hsl(var(--process-accent))",
                height: `${progress * 100}%`,
                transition: "height 0.15s ease-out",
                boxShadow:
                  progress > 0
                    ? "0 0 8px hsl(var(--process-accent) / 0.5)"
                    : "none",
              }}
            />
            {/* Traveling dot */}
            {progress > 0.01 && progress < 0.99 && (
              <div
                className="absolute w-3.5 h-3.5 rounded-full"
                style={{
                  background: "hsl(var(--process-accent))",
                  top: `${progress * 100}%`,
                  transform: "translateX(-50%) translateY(-50%)",
                  transition: "top 0.15s ease-out",
                  boxShadow:
                    "0 0 12px hsl(var(--process-accent) / 0.9), 0 0 24px hsl(var(--process-accent) / 0.5)",
                }}
              />
            )}
          </div>

          {/* Desktop: center dots on rail */}
          <div className="hidden md:block absolute inset-y-0 md:left-1/2 w-3.5 md:-translate-x-1/2 pointer-events-none" aria-hidden>
            {STEPS.map((_, i) => {
              const threshold = (i + 0.5) / STEPS.length;
              const active = progress >= threshold;
              return (
                <div
                  key={i}
                  className="absolute w-3.5 h-3.5 rounded-full transition-all duration-500"
                  style={{
                    top: `${threshold * 100}%`,
                    transform: "translateY(-50%)",
                    background: active
                      ? "hsl(var(--process-accent))"
                      : "hsl(var(--process-line))",
                    boxShadow: active
                      ? "0 0 10px hsl(var(--process-accent) / 0.7), 0 0 20px hsl(var(--process-accent) / 0.3)"
                      : "none",
                    scale: active ? 1.25 : 1,
                  }}
                />
              );
            })}
          </div>

          {/* Steps */}
          {STEPS.map((step, i) => (
            <ProcessRow
              key={i}
              step={step}
              index={i}
              total={STEPS.length}
              progress={progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;