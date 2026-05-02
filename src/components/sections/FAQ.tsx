import { useState } from "react";
import { Reveal } from "../Reveal";
import { FAQ_ITEMS } from "@/constants/site";
import { SectionContainer } from "@/components/ui/section-container";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-10 md:py-16">
      <SectionContainer className="grid md:grid-cols-12 gap-10">
        <aside className="md:col-span-4 md:sticky md:top-28 self-start">
          <div className="h-eyebrow text-mute mb-3">§ 08 · FAQ</div>
          <Reveal><h2 className="h-section font-sans font-semibold">Questions we <span className="italic text-signal">hear a lot.</span></h2></Reveal>
          <Reveal delay={0.16}><p className="text-mute-2 mt-6">Didn't answer yours? <a href="#contact" className="u-link">Ask directly →</a></p></Reveal>
        </aside>

        <div className="md:col-span-8">
          <div className="divide-y divide-foreground/10 border-y border-foreground/10">
            {FAQ_ITEMS.map(([q, a], i) => (
              <details 
                key={q} 
                className="group py-6" 
                open={activeIndex === i}
              >
                <summary 
                  className="flex items-start justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex(activeIndex === i ? null : i);
                  }}
                >
                  <div className="flex items-start gap-6">
                    <span className="h-eyebrow text-mute mt-2 num">0{i + 1}</span>
                    <span className="font-display text-xl md:text-2xl leading-tight">{q}</span>
                  </div>
                  <span className="faq-icon mt-2 shrink-0">
                    <svg width="22" height="22" viewBox="0 0 22 22"><path d="M11 3 V19 M3 11 H19" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
                  </span>
                </summary>
                <div className="faq-body">
                  <div className="faq-inner">
                    <p className="pt-4 md:pl-16 text-mute-2 max-w-2xl leading-relaxed">{a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
