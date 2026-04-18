import { Reveal } from "../Reveal";
import { PROCESS_STEPS } from "@/constants/site";

export const Process = () => (
  <section id="process" className="relative px-6 md:px-10 py-28 md:py-40">
    <div className="mx-auto max-w-[1600px]">
      <div className="grid md:grid-cols-12 gap-10 mb-14">
        <div className="md:col-span-3"><div className="h-eyebrow text-mute mb-3">§ 04 · Process</div></div>
        <div className="md:col-span-9">
          <Reveal><h2 className="h-section font-display">How we <span className="italic-display text-signal">actually</span> work.</h2></Reveal>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {PROCESS_STEPS.map(([w, t, d], i) => (
          <Reveal key={w} delay={i * 0.08} className="plate rounded-lg p-7 relative">
            <div className="flex items-start justify-between mb-8">
              <div className="h-eyebrow text-signal">{w}</div>
              <div className="num font-display text-3xl text-mute">0{i + 1}</div>
            </div>
            <div className="font-display text-3xl mb-3">{t}</div>
            <p className="text-sm text-mute-2 leading-relaxed">{d}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
