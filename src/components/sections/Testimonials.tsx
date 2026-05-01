import { Reveal } from "../Reveal";
import { TESTIMONIALS } from "@/constants/site";
import { SectionContainer } from "@/components/ui/section-container";

export const Testimonials = () => (
  <section id="testimonials" className="relative py-10 md:py-16">
    <SectionContainer>
      <div className="grid md:grid-cols-12 gap-10 mb-10">
        <div className="md:col-span-3"><div className="h-eyebrow text-mute mb-3">§ 06 · TESTIMONIALS</div></div>
        <div className="md:col-span-9">
          <Reveal>
            <h2 className="h-section font-sans font-semibold">
              Kind words from <span className="italic text-signal">founders who loved</span> our works.
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
              <blockquote className="font-display text-xl md:text-2xl leading-tight">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-sm">
                <img
                  src={t.avatar}
                  alt={t.n}
                  className="w-[34px] h-[34px] rounded-full object-cover object-top ring-1 ring-white/10"
                />
                <div><div className="font-medium">{t.n}</div><div className="text-mute">{t.r}</div></div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  </section>
);
