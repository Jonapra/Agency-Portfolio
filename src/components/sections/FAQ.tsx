import { Reveal } from "../Reveal";
import { FAQ_ITEMS } from "@/constants/site";

export const FAQ = () => (
  <section id="faq" className="relative px-6 md:px-10 py-12 md:py-20">
    <div className="mx-auto max-w-[1600px] grid md:grid-cols-12 gap-10">
      <aside className="md:col-span-4 md:sticky md:top-28 self-start">
        <div className="h-eyebrow text-mute mb-3">§ 08 · FAQ</div>
        <Reveal><h2 className="h-section font-display">Questions we <span className="italic-display text-signal">hear a lot.</span></h2></Reveal>
        <Reveal delay={0.16}><p className="text-mute-2 mt-6">Didn't answer yours? <a href="#contact" className="u-link">Ask directly →</a></p></Reveal>
      </aside>

      <div className="md:col-span-8">
        <div className="divide-y divide-foreground/10 border-y border-foreground/10">
          {FAQ_ITEMS.map(([q, a], i) => (
            <details key={q} className="group py-6" open={i === 0}>
              <summary className="flex items-start justify-between gap-6 cursor-pointer">
                <div className="flex items-start gap-6">
                  <span className="h-eyebrow text-mute mt-2 num">0{i + 1}</span>
                  <span className="font-display text-2xl md:text-3xl leading-tight">{q}</span>
                </div>
                <span className="faq-icon mt-2 shrink-0">
                  <svg width="22" height="22" viewBox="0 0 22 22"><path d="M11 3 V19 M3 11 H19" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
                </span>
              </summary>
              <div className="faq-body"><div className="faq-inner">
                <p className="pt-4 md:pl-16 text-mute-2 max-w-2xl leading-relaxed">{a}</p>
              </div></div>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>
);
