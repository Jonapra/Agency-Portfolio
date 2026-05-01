import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

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

// image is 320px wide at 16:9 → 180px tall
const IMG_H = 180;
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
      {/* ── DESKTOP (lg+): all inline, one row ─────────────────────── */}
      <div className="hidden lg:flex items-center gap-8">
        {/* Number */}
        <span
          className={cn(
            "w-[52px] flex-shrink-0 font-mono text-xs font-medium tabular-nums transition-colors duration-300",
            isActive ? "text-signal" : "text-foreground/40"
          )}
        >
          ({service.num})
        </span>

        {/* Name + description */}
        <div className="flex-1 min-h-[72px] flex flex-col justify-center py-4">
          <h3
            className={cn(
              "font-sans font-bold text-[40px] leading-none tracking-[-0.02em] transition-colors duration-300",
              isActive ? "text-signal" : "text-foreground"
            )}
          >
            {service.name}
          </h3>
          <AnimatePresence>
            {isActive && (
              <motion.p
                key="desc"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease }}
                className="mt-2 text-sm leading-relaxed text-foreground/55 max-w-xs"
              >
                {service.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Image — height animates 0 → IMG_H */}
        <motion.div
          className="w-[320px] flex-shrink-0 rounded-sm overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isActive ? IMG_H : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.4, ease }}
        >
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            decoding="async"
            style={{ height: IMG_H }}
            className="w-full object-cover"
          />
        </motion.div>

        {/* Features — fade in/out */}
        <motion.div
          className="w-[200px] flex-shrink-0 flex flex-col gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.35, ease }}
        >
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-2.5">
              <CheckCircle2 size={14} className="text-signal flex-shrink-0" aria-hidden />
              <span className="text-sm font-medium text-foreground/80">{f}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── MOBILE / TABLET (< lg): accordion below ─────────────────── */}
      <div className="lg:hidden">
        {/* Header */}
        <div className="flex items-center gap-4 py-5">
          <span
            className={cn(
              "font-mono text-[11px] md:text-xs font-medium tabular-nums flex-shrink-0 transition-colors duration-300",
              isActive ? "text-signal" : "text-foreground/40"
            )}
          >
            ({service.num})
          </span>
          <h3
            className={cn(
              "font-sans font-bold text-2xl md:text-3xl leading-none tracking-[-0.02em] transition-colors duration-300",
              isActive ? "text-signal" : "text-foreground"
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
              <div className="flex flex-col md:flex-row gap-5 pb-6">
                {/* Image */}
                <div className="w-full md:w-[300px] flex-shrink-0 aspect-[16/9] rounded-sm overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description + features */}
                <div className="flex flex-col gap-4">
                  <p className="text-sm leading-relaxed text-foreground/55">
                    {service.description}
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5">
                        <CheckCircle2 size={13} className="text-signal flex-shrink-0" aria-hidden />
                        <span className="text-sm font-medium text-foreground/80">{f}</span>
                      </div>
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
          Services
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
