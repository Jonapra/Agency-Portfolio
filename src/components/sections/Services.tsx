import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Service = {
  num: string;
  name: string;
  tags: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    num: "01",
    name: "UI/UX Design",
    tags: "Wireframes, Prototypes, Design Systems",
    description:
      "We craft intuitive interfaces grounded in user research — from early wireframes to production-ready design systems that scale.",
  },
  {
    num: "02",
    name: "Website Development",
    tags: "React, Next.js, Vite",
    description:
      "We build fast, accessible, and visually precise websites — pixel-perfect implementations that load quick and convert.",
  },
  {
    num: "03",
    name: "SaaS Development",
    tags: "Product, Auth, Dashboards",
    description:
      "End-to-end SaaS builds: onboarding flows, auth, billing, and dashboards — everything needed to ship and grow a product.",
  },
  {
    num: "04",
    name: "Full Stack Development",
    tags: "Node, APIs, Databases",
    description:
      "Full-stack systems from API design to database architecture — robust backends that power ambitious frontends.",
  },
];

export const Services = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const rows = gsap.utils.toArray<HTMLElement>("[data-services-row]");

      rows.forEach((row) => {
        const items = row.querySelectorAll<HTMLElement>("[data-services-text]");
        const image = row.querySelector<HTMLElement>("[data-services-image]");

        if (items.length) {
          gsap.fromTo(
            items,
            { y: -110, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              stagger: 0.05,
              scrollTrigger: {
                trigger: row,
                start: "top bottom",
                end: "top 45%",
                scrub: 1,
              },
            }
          );
        }

        if (image) {
          gsap.fromTo(
            image,
            { y: -60 },
            {
              y: 50,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative bg-white text-ink py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        {/* Overline */}
        <div className="mb-10 md:mb-14 flex items-center gap-3">
          <span className="h-px w-8 bg-ink/30" />
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.18em] text-ink/60">
            What We Build
          </span>
        </div>

        {/* Rows */}
        <div className="border-t border-ink/10">
          {SERVICES.map((service) => (
            <div
              key={service.num}
              data-services-row
              className="group grid grid-cols-1 md:grid-cols-[40px_1fr_140px] lg:grid-cols-[40px_1.1fr_160px_1.4fr_180px] items-start md:items-center gap-y-3 md:gap-x-6 lg:gap-x-8 border-b border-ink/10 py-5 md:py-5 lg:py-6 transition-colors duration-300 hover:bg-ink/[0.02]"
            >
              {/* Number */}
              <div
                data-services-text
                className="font-mono text-xs md:text-sm font-semibold text-ink/55 md:self-start md:pt-2"
              >
                {service.num}
              </div>

              {/* Name */}
              <div data-services-text className="md:self-start md:pt-0">
                <h3 className="font-sans font-bold text-3xl md:text-4xl lg:text-[44px] leading-[1.02] tracking-[-0.02em] text-ink">
                  {service.name}
                </h3>
              </div>

              {/* Tags */}
              <div
                data-services-text
                className="font-mono text-[10px] md:text-xs uppercase font-semibold tracking-[0.12em] text-signal leading-relaxed md:self-start md:pt-2"
              >
                {service.tags}
              </div>

              {/* Description */}
              <div data-services-text className="md:col-span-2 lg:col-span-1 md:self-start md:pt-1">
                <p className="text-sm md:text-[15px] leading-snug font-medium text-ink/85 max-w-prose">
                  {service.description}
                </p>
              </div>

              {/* Image placeholder */}
              <div
                data-services-image
                className="hidden lg:block aspect-[4/3] w-full bg-bone border border-ink/10 rounded-sm overflow-hidden"
                aria-hidden="true"
              >
                {/* Replace with <img src="..." alt="..." className="w-full h-full object-cover" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
