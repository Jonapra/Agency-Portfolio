import { Reveal } from "../Reveal";
import { PLANS } from "@/constants/site";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

export const Pricing = () => (
  <section id="pricing" className="relative px-6 md:px-10 py-10 md:py-16">
    <div className="mx-auto max-w-[1400px]">
      <div className="grid md:grid-cols-12 gap-10 mb-10">
        <div className="md:col-span-3"><div className="h-eyebrow text-mute mb-3">§ 05 · Engagements</div></div>
        <div className="md:col-span-9 flex items-end justify-between">
          <Reveal><h2 className="h-section font-display">Three ways <span className="italic-display text-signal">in.</span></h2></Reveal>
          <div className="h-eyebrow text-mute hidden md:block">All figures EUR · ex. VAT</div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PLANS.map((o, i) => (
          <Reveal key={o.n} delay={i * 0.08} className={`relative rounded-lg p-8 plate ${o.hi ? "bg-signal text-ink border-signal" : ""}`}>
            {o.hi && <div className="absolute -top-3 left-8 pill bg-ink text-cream border-ink">Most asked for</div>}
            <div className="flex items-end justify-between"><div className="font-display text-3xl">{o.n}</div></div>
            <div className="mt-6 flex items-baseline gap-2">
              <div className="font-display text-5xl">{o.p}</div>
              <div className={`h-eyebrow ${o.hi ? "text-ink/70" : "text-mute"}`}>{o.f}</div>
            </div>
            <p className={`mt-4 text-sm leading-relaxed ${o.hi ? "text-ink/80" : "text-mute-2"}`}>{o.d}</p>
            <ul className="mt-8 space-y-3 text-sm">
              {o.feat.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" className="mt-1 shrink-0">
                    <path d="M3 7 L6 10 L11 4" stroke="currentColor" strokeWidth="1.6" fill="none" />
                  </svg>{f}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ButtonWithIcon
                text="Start here"
                href="#contact"
                className={o.hi ? "bg-ink text-cream" : "bg-signal text-ink"}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
