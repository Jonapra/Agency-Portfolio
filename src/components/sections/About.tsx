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
  const num4Ref = useRef<HTMLSpanElement>(null);

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

    // Reviews fade in
    const reviews = containerRef.current?.querySelectorAll(".review-pill");
    if (reviews) {
      gsap.fromTo(
        reviews,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 90%",
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

    // Number count-up animation
    const animateNum = (ref: React.RefObject<HTMLSpanElement>, endValue: number, isFloat: boolean = false) => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: endValue,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-card",
          start: "top 95%",
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.innerText = isFloat ? obj.val.toFixed(1) : Math.floor(obj.val).toString();
          }
        }
      });
    };

    animateNum(num4Ref, 100);

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
            {/* Review Pills */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12 md:mb-20 lg:mb-24 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 hidden sm:block"></div>
              
              {/* Clutch Review */}
              <div className="review-pill flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 pr-6 backdrop-blur-sm shadow-xl">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-black text-xl">
                  C
                </div>
                <div className="text-left">
                  <div className="flex text-white/90 text-[10px] mb-1">
                    ★ ★ ★ ★ ★
                  </div>
                  <div className="text-xs font-medium text-white">4.9/5 <span className="text-white/50 font-normal">Based on 250 reviews</span></div>
                </div>
              </div>

              {/* Other Review */}
              <div className="review-pill flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 pr-6 backdrop-blur-sm shadow-xl">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="flex text-white/90 text-[10px] mb-1">
                    ★ ★ ★ ★ <span className="opacity-50">★</span>
                  </div>
                  <div className="text-xs font-medium text-white">4.0/5 <span className="text-white/50 font-normal">Based on 186 reviews</span></div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-card w-full rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl py-8 px-4 md:py-10 md:px-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group shadow-[0_16px_48px_-12px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-r from-signal/0 via-signal/5 to-signal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

              <div className="w-full grid grid-cols-2 md:flex md:flex-row md:justify-around gap-x-2 gap-y-10 md:gap-y-0 md:gap-x-0 md:divide-x divide-white/10">
                <div className="flex flex-col items-center justify-center w-full group/stat hover:scale-105 transition-transform duration-500 ease-out px-2">
                  <div className="num font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 flex items-start drop-shadow-sm">
                    15<span className="text-signal font-sans font-light ml-1">+</span>
                  </div>
                  <div className="h-eyebrow whitespace-normal text-mute mt-3 md:mt-4 text-[10px] sm:text-xs text-center group-hover/stat:text-white/80 transition-colors duration-300">Websites shipped</div>
                </div>
                
                <div className="flex flex-col items-center justify-center w-full group/stat hover:scale-105 transition-transform duration-500 ease-out px-2">
                  <div className="num font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 flex items-start drop-shadow-sm">
                    10<span className="text-signal font-sans font-light ml-1">+</span>
                  </div>
                  <div className="h-eyebrow whitespace-normal text-mute mt-3 md:mt-4 text-[10px] sm:text-xs text-center group-hover/stat:text-white/80 transition-colors duration-300">Industries Served</div>
                </div>
                
                <div className="flex flex-col items-center justify-center w-full group/stat hover:scale-105 transition-transform duration-500 ease-out px-2">
                  <div className="num font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 flex items-start drop-shadow-sm">
                    4<span className="text-signal font-sans font-light">.9</span>
                  </div>
                  <div className="h-eyebrow whitespace-normal text-mute mt-3 md:mt-4 text-[10px] sm:text-xs text-center group-hover/stat:text-white/80 transition-colors duration-300">Avg project rating</div>
                </div>
                
                <div className="flex flex-col items-center justify-center w-full group/stat hover:scale-105 transition-transform duration-500 ease-out px-2">
                  <div className="num font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 flex items-start drop-shadow-sm">
                    <span ref={num4Ref}>0</span><span className="text-signal font-sans font-light ml-1">%</span>
                  </div>
                  <div className="h-eyebrow whitespace-normal text-mute mt-3 md:mt-4 text-[10px] sm:text-xs text-center group-hover/stat:text-white/80 transition-colors duration-300">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
};
