import { Reveal } from "../Reveal";
import { SERVICES } from "@/constants/site";
import { ServiceIcon } from "./ServiceIcon";

export const Services = () => (
  <section id="services" className="relative px-6 md:px-10 py-12 md:py-20">
    <div className="mx-auto max-w-[1600px]">
      <div className="grid md:grid-cols-12 gap-10 mb-16">
        <div className="md:col-span-3">
          <div className="h-eyebrow text-mute mb-3">§ 02 · Services</div>
        </div>
        <div className="md:col-span-9">
          <Reveal>
            <h2 className="h-section font-display">
              What we make, <span className="italic-display text-signal">end‑to‑end.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="divide-y divide-foreground/10 border-y border-foreground/10">
        {SERVICES.map(([n, t, d, tags], i) => (
          <Reveal key={n} delay={i * 0.05}>
            <a
              href="#work"
              className="group grid md:grid-cols-12 gap-6 py-8 md:py-10 items-center"
            >
              <div className="md:col-span-1 h-eyebrow text-mute">{n}</div>
              <div data-cursor="view" className="md:col-span-4 cursor-pointer">
                <div className="font-display text-3xl md:text-5xl leading-none group-hover:text-signal transition-colors">
                  {t}
                </div>
              </div>
              <div className="md:col-span-4 text-mute-2 max-w-md">{d}</div>
              <div className="md:col-span-2 h-eyebrow text-mute">{tags}</div>
              <div className="md:col-span-1 flex md:justify-end">
                <ServiceIcon index={i} />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);