import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionContainer } from "@/components/ui/section-container";
import { useReducedMotion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReduced) return;

    // Standard fade-up text reveal (No pinning)
    const words = textRef.current?.querySelectorAll(".word");
    if (words) {
      gsap.fromTo(
        words,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%", 
          },
        }
      );
    }


    // Stats card subtle fade in
    gsap.fromTo(
      ".stats-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
      }
    );



  }, { scope: containerRef });

  const renderWords = (text: string) => {
    return text.split(" ").map((w, i) => (
      <span key={i} className="word inline-block mr-1.5 md:mr-2.5">{w}</span>
    ));
  };

  return (
    <section id="about" className="relative w-full bg-background" ref={containerRef}>
      <SectionContainer className="pt-2 pb-16 md:pt-8 md:pb-24 lg:pt-20 lg:pb-32">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">

          {/* Main Text Content */}
          <div className="w-full flex items-center justify-center relative px-2 sm:px-4 md:px-8 mb-16 md:mb-24 lg:mb-28">
            <h2 
              ref={textRef}
              className="max-w-4xl mx-auto text-center text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.25] md:leading-[1.15] tracking-tight text-white/90"
            >
              {renderWords("Driven by")}
              <span className="word inline-block mr-1.5 md:mr-2.5 font-display italic-display text-white">Strategy,</span>
              {renderWords("fueled by imagination. We craft design-first solutions that help")}
              <span className="word inline-block mr-1.5 md:mr-2.5 font-display italic-display text-white">Brands</span>
              {renderWords("stand out and thrive in the digital age.")}
            </h2>
          </div>

          <div ref={statsRef} className="w-full">
            {/* Stats */}
            <div className="stats-card w-full max-w-5xl mx-auto flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 lg:gap-6 mt-8 md:mt-12">
              {/* Stat 1 */}
              <div className="flex w-[260px] sm:w-auto items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 pr-6 backdrop-blur-sm shadow-xl">
                <div className="w-12 h-12 shrink-0 bg-white rounded-lg flex items-center justify-center font-display font-bold text-black text-xl">
                  15<span className="text-signal font-sans font-light ml-[1px]">+</span>
                </div>
                <div className="text-left flex flex-col justify-center">
                  <div className="text-xs font-bold text-white tracking-widest uppercase">Websites</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">Shipped</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex w-[260px] sm:w-auto items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 pr-6 backdrop-blur-sm shadow-xl">
                <div className="w-12 h-12 shrink-0 bg-white rounded-lg flex items-center justify-center font-display font-bold text-black text-xl">
                  4.9
                </div>
                <div className="text-left flex flex-col justify-center">
                  <div className="text-xs font-bold text-white tracking-widest uppercase">Avg Project</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">Rating</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex w-[260px] sm:w-auto items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 pr-6 backdrop-blur-sm shadow-xl">
                <div className="w-12 h-12 shrink-0 bg-white rounded-lg flex items-center justify-center font-display font-bold text-black text-lg">
                  100<span className="text-signal font-sans font-light ml-[1px]">%</span>
                </div>
                <div className="text-left flex flex-col justify-center">
                  <div className="text-xs font-bold text-white tracking-widest uppercase">Client</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
};
