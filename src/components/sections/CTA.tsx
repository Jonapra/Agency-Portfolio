import { Reveal } from "../Reveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import { BRAND } from "@/constants/site";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

export const CTA = () => {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0);
  return (
    <section id="contact" className="relative px-6 md:px-10 py-12 md:py-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="relative overflow-hidden rounded-2xl plate p-10 md:p-20 text-center">
          <div className="halo" style={{ width: 800, height: 800, background: "hsl(var(--signal))", left: "50%", top: "50%", transform: "translate(-50%, -50%)", opacity: 0.22 }} />
          <div className="relative">
            <Reveal><div className="h-eyebrow text-signal mb-6">Let's make something that outlives the trend.</div></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display leading-[0.95]" style={{ fontSize: "clamp(60px,10vw,180px)", letterSpacing: "-0.04em" }}>
                Start a<br /><span className="italic-display text-signal">project</span> with us.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a ref={ctaRef} href={`mailto:${BRAND.email}`} className="inline-block">
                  <ButtonWithIcon 
                    text={BRAND.email}
                    variant="default"
                    className="bg-signal text-ink text-base h-11 md:h-14"
                  />
                </a>
                <ButtonWithIcon
                  text="Book a 20‑min Call"
                  href="#"
                  variant="default"
                  className="bg-signal text-ink text-base h-14"
                />
              </div>
            </Reveal>
            <div className="mt-14 h-eyebrow text-mute">Currently     Available · slots open</div>
          </div>
        </div>
      </div>
    </section>
  );
};
