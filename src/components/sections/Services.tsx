import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TextRise } from "../TextRise";

type Service = {
  num: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  features: [string, string, string, string];
};

const SERVICES: Service[] = [
  {
    num: "01",
    name: "UI/UX Design",
    description:
      "Intuitive interfaces grounded in user research — from early wireframes to production-ready design systems that scale.",
    image: "/assets/service-poster/UIUX-image.webp",
    imageAlt: "UI/UX design elements — typography, components, color palette",
    features: ["User Research", "Wireframes & Prototypes", "Design Systems", "Usability Testing"],
  },
  {
    num: "02",
    name: "Website Development",
    description:
      "Fast, accessible, visually precise websites — pixel-perfect implementations that load quick and convert.",
    image: "/assets/service-poster/website-image.webp",
    imageAlt: "Website development — code editor and live browser preview",
    features: ["React / Next.js", "Pixel-Perfect UI", "Fast & Accessible", "SEO Optimized"],
  },
  {
    num: "03",
    name: "SaaS Development",
    description:
      "End-to-end SaaS builds: onboarding, auth, billing, dashboards — everything needed to ship and grow a product.",
    image: "/assets/service-poster/SaaS-image.webp",
    imageAlt: "SaaS dashboard with metrics, revenue chart, and user analytics",
    features: ["Auth & Onboarding", "Billing Integration", "Analytics Dashboard", "Scalable Architecture"],
  },
  {
    num: "04",
    name: "Full Stack Development",
    description:
      "Full-stack systems from API design to database architecture — robust backends that power ambitious frontends.",
    image: "/assets/service-poster/fullstack-image.webp",
    imageAlt: "Full stack architecture — client, API gateway, backend, database",
    features: ["REST / GraphQL APIs", "Database Design", "Cloud Infrastructure", "CI/CD Pipelines"],
  },
];

// expanded image: 440 wide × 330 tall (4:3) on desktop
const IMG_W = 440;
const ease = [0.25, 0, 0, 1] as const;

const ServiceRow = ({
  service,
  isActive,
  onActivate,
  onDeactivate,
  isTouch,
}: {
  service: Service;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  isTouch: boolean;
}) => {
  return (
    <div
      className="border-b border-foreground/10 cursor-default"
      onMouseEnter={!isTouch ? onActivate : undefined}
      onClick={isTouch ? (isActive ? onDeactivate : onActivate) : undefined}
    >
      {/* ── DESKTOP (lg+) ──────────────────────────────────────────── */}
      <div className="hidden lg:flex items-start py-8">
        {/* Number */}
        <div className="w-[140px] flex-shrink-0 pr-6">
          <span
            className={cn(
              "font-sans font-bold text-[72px] leading-none tracking-[-0.04em] tabular-nums transition-colors duration-300",
              isActive ? "text-foreground/45" : "text-foreground/25"
            )}
          >
            {service.num}
            <span
              className={cn(
                "transition-colors duration-300",
                isActive ? "text-signal" : "text-foreground/25"
              )}
            >
              .
            </span>
          </span>
        </div>

        {/* Image — width animates 0 → IMG_W */}
        <motion.div
          className="flex-shrink-0 rounded-md overflow-hidden bg-foreground/5"
          style={{ aspectRatio: "4 / 3" }}
          initial={false}
          animate={{
            width: isActive ? IMG_W : 0,
            opacity: isActive ? 1 : 0,
            marginRight: isActive ? 56 : 0,
          }}
          transition={{ duration: 0.5, ease }}
        >
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-center min-h-[120px]">
          <h3
            className={cn(
              "font-sans font-bold text-[44px] leading-[1.05] tracking-[-0.02em] transition-colors duration-300",
              isActive ? "text-foreground" : "text-foreground/85"
            )}
          >
            {service.name}
          </h3>
          <AnimatePresence initial={false}>
            {isActive && (
              <motion.div
                key="desk-body"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease }}
                className="flex flex-col gap-6 mt-4"
              >
                <p className="text-base leading-relaxed text-foreground/55 max-w-md">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-foreground/20 px-4 py-1.5 text-sm font-medium text-foreground/80"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── MOBILE / TABLET (< lg): accordion below ─────────────────── */}
      <div className="lg:hidden">
        {/* Header */}
        <div className="flex items-center gap-4 py-5">
          <span
            className={cn(
              "font-sans font-bold text-2xl md:text-3xl leading-none tracking-[-0.04em] tabular-nums flex-shrink-0 transition-colors duration-300",
              isActive ? "text-foreground/50" : "text-foreground/30"
            )}
          >
            {service.num}
            <span
              className={cn(
                "transition-colors duration-300",
                isActive ? "text-signal" : "text-foreground/30"
              )}
            >
              .
            </span>
          </span>
          <h3
            className={cn(
              "font-sans font-bold text-2xl md:text-3xl leading-none tracking-[-0.02em] transition-colors duration-300 flex-1",
              isActive ? "text-foreground" : "text-foreground/85"
            )}
          >
            {service.name}
          </h3>
        </div>

        {/* Accordion body */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              key="mobile-body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease }}
              className="overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-6 pb-6">
                {/* Image */}
                <div className="w-full md:w-[340px] flex-shrink-0 aspect-[4/3] rounded-md overflow-hidden bg-foreground/5">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description + tag pills */}
                <div className="flex flex-col gap-4">
                  <p className="text-sm leading-relaxed text-foreground/55">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-foreground/20 px-3.5 py-1.5 text-xs md:text-sm font-medium text-foreground/80"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const Services = () => {
  const isTouchRef = useRef(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(pointer: coarse)");
    isTouchRef.current = mql.matches;
    setActive(0);
  }, []);

  return (
    <section
      id="services"
      className="relative bg-background text-foreground py-10 md:py-14 lg:py-16 overflow-hidden"
      onMouseLeave={!isTouchRef.current ? () => setActive(0) : undefined}
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <h2 className="mb-6 md:mb-10 font-sans font-black uppercase leading-[0.85] tracking-[-0.04em] text-foreground text-5xl md:text-7xl lg:text-[110px]">
          <TextRise>Services</TextRise>
        </h2>

        <div className="border-t border-foreground/10">
          {SERVICES.map((service, i) => (
            <ServiceRow
              key={service.num}
              service={service}
              isActive={active === i}
              onActivate={() => setActive(i)}
              onDeactivate={() => setActive(null)}
              isTouch={isTouchRef.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
