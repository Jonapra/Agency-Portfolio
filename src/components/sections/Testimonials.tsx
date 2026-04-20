import { Reveal } from "../Reveal";
import { TESTIMONIALS } from "@/constants/site";

export const Testimonials = () => (
  <section id="testimonials" className="relative px-6 md:px-10 py-12 md:py-20">
    <div className="mx-auto max-w-[1600px]">
      <div className="grid md:grid-cols-12 gap-10 mb-14">
        <div className="md:col-span-3"><div className="h-eyebrow text-mute mb-3">§ 06 · Kind words</div></div>
        <div className="md:col-span-9">
          <Reveal>
            <h2 className="h-section font-display">
              <span className="italic-display text-signal">Receipts,</span> from the people who paid them.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={(i % 3) * 0.08} className={`plate rounded-lg p-8 ${t.col}`}>
            <figure>
              <svg width="22" height="22" viewBox="0 0 22 22" className="text-signal mb-4" fill="currentColor">
                <path d="M0 12 C0 6 3 2 9 0 L10 3 C6 5 5 7 5 10 H9 V22 H0 Z M13 12 C13 6 16 2 22 0 L22 3 C18 5 17 7 17 10 H22 V22 H13 Z" />
              </svg>
              <blockquote className="font-display text-2xl md:text-3xl leading-tight">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-signal to-signal-2" />
                <div><div className="font-medium">{t.n}</div><div className="text-mute">{t.r}</div></div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
