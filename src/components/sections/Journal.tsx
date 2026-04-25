import { Reveal } from "../Reveal";
import { JOURNAL } from "@/constants/site";

export const Journal = () => (
  <section id="journal" className="relative px-6 md:px-10 py-10 md:py-16">
    <div className="mx-auto max-w-[1400px]">
      <div className="grid md:grid-cols-12 gap-10 mb-10">
        <div className="md:col-span-3"><div className="h-eyebrow text-mute mb-3">§ 07 · Journal</div></div>
        <div className="md:col-span-9 flex items-end justify-between">
          <Reveal><h2 className="h-section font-display">From the <span className="italic-display text-signal">studio.</span></h2></Reveal>
          <a href="#" className="u-link hidden md:inline-block mb-4 text-sm">All dispatches →</a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {JOURNAL.map((a, i) => (
          <Reveal key={a.t} delay={i * 0.08}>
            <a href="#" className="group block" data-cursor="view">
              <div className="relative overflow-hidden rounded-lg plate aspect-[5/4]">
                <div className="proj-img absolute inset-0" style={{ background: a.g }} />
                <div className="absolute left-5 top-5">
                  <span className={`pill ${a.invert ? "text-ink" : "text-white/80"}`}>{a.d} · {a.r}</span>
                </div>
              </div>
              <div className="mt-5">
                <div className="font-display text-xl md:text-2xl leading-tight group-hover:text-signal transition-colors">{a.t}</div>
                <p className="mt-2 text-sm text-mute-2">{a.x}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
