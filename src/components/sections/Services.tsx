import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Service = {
  num: string;
  name: string;
  tags: string;
  description: string;
  image: string;
  imageAlt: string;
  poster?: string;
};

const SERVICES: Service[] = [
  {
    num: "01",
    name: "UI/UX Design",
    tags: "Wireframes, Prototypes, Design Systems",
    description:
      "We craft intuitive interfaces grounded in user research — from early wireframes to production-ready design systems that scale.",
    image: "/assets/UIUX-video.mp4",
    imageAlt: "UI/UX design elements pack — typography, components, color palette, grid system",
    poster: "/assets/UIUX-alt.png",
  },
  {
    num: "02",
    name: "Website Development",
    tags: "React, Next.js, Vite",
    description:
      "We build fast, accessible, and visually precise websites — pixel-perfect implementations that load quick and convert.",
    image: "/assets/Webite-main.mp4",
    imageAlt: "Website development — code editor and live browser preview side by side",
    poster: "/assets/website-Alt.png",
  },
  {
    num: "03",
    name: "SaaS Development",
    tags: "Product, Auth, Dashboards",
    description:
      "End-to-end SaaS builds: onboarding flows, auth, billing, and dashboards — everything needed to ship and grow a product.",
    image: "/assets/SaaS-video.mp4",
    imageAlt: "SaaS dashboard interface with metrics, revenue chart, and user analytics",
    poster: "/assets/SaaS-alt.png",
  },
  {
    num: "04",
    name: "Full Stack Development",
    tags: "Node, APIs, Databases",
    description:
      "Full-stack systems from API design to database architecture — robust backends that power ambitious frontends.",
    image: "/assets/FullStack.mp4",
    imageAlt: "Full stack system architecture diagram — client, frontend, API gateway, backend, database",
    poster: "/assets/fullstack-alt.png",
  },
];

export const Services = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const videos = Array.from(root.querySelectorAll<HTMLVideoElement>("video"));
    if (!videos.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const v = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            v.currentTime = 0;
            v.play().catch(() => { });
          } else {
            v.pause();
          }
        }
      },
      { threshold: 0.25 }
    );

    videos.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

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
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              stagger: 0.05,
              scrollTrigger: {
                trigger: row,
                start: "top 90%",
                end: "top 60%",
                scrub: 1,
              },
            }
          );
        }

        if (image) {
          gsap.fromTo(
            image,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 90%",
                end: "top 60%",
                scrub: 1,
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
      className="relative bg-background text-foreground py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        {/* Section title */}
        <h2 className="mb-10 md:mb-14 font-sans font-black uppercase leading-[0.85] tracking-[-0.04em] text-foreground text-6xl md:text-8xl lg:text-[140px]">
          Services
        </h2>

        {/* Rows */}
        <div className="border-t border-foreground/10">
          {SERVICES.map((service) => (
            <div
              key={service.num}
              data-services-row
              className="group grid grid-cols-1 md:grid-cols-[40px_1fr_140px] lg:grid-cols-[40px_0.9fr_140px_1fr_360px] items-start md:items-center gap-y-3 md:gap-x-6 lg:gap-x-8 border-b border-foreground/10 py-5 md:py-5 lg:py-2 transition-colors duration-300 hover:bg-foreground/[0.02] overflow-hidden"
            >
              {/* Number */}
              <div
                data-services-text
                className="font-mono text-xs md:text-sm font-semibold text-foreground/55 md:self-start md:pt-2"
              >
                {service.num}
              </div>

              {/* Name */}
              <div data-services-text className="md:self-start md:pt-0">
                <h3 className="font-sans font-bold text-3xl md:text-4xl lg:text-[44px] leading-[1.02] tracking-[-0.02em] text-foreground">
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
                <p className="text-sm md:text-[15px] leading-snug font-medium text-foreground/85 max-w-prose">
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <div
                data-services-image
                className="block aspect-[3/2] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/10] w-full md:col-span-3 lg:col-span-1 bg-ink border border-foreground/10 rounded-sm overflow-hidden mt-3 md:mt-4 lg:mt-0"
              >
                {service.image.toLowerCase().endsWith(".mp4") ? (
                  <video
                    src={encodeURI(service.image)}
                    poster={service.poster ? encodeURI(service.poster) : undefined}
                    aria-label={service.imageAlt}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={encodeURI(service.image)}
                    alt={service.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
