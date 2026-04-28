import { Reveal } from "../Reveal";
import { BRAND } from "@/constants/site";
import { BookACallButton } from "@/components/ui/book-a-call-button";
import { MailButton } from "@/components/ui/mail-button";
import { SectionContainer } from "@/components/ui/section-container";

export const CTA = () => {
  return (
    <section id="contact" className="relative py-10 md:py-16">
      <SectionContainer>
        <div className="relative overflow-hidden rounded-2xl plate p-10 md:p-20 text-center">
          <div className="halo" style={{ width: 800, height: 800, background: "hsl(var(--signal))", left: "50%", top: "50%", transform: "translate(-50%, -50%)", opacity: 0.22 }} />
          <div className="relative">
            <Reveal><div className="h-eyebrow text-signal mb-6">Let's make something that outlives the trend.</div></Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-sans font-semibold leading-[0.95]" style={{ fontSize: "clamp(40px,6vw,104px)", letterSpacing: "-0.03em" }}>
                Start a<br /><span className="italic text-signal">project</span> with us.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <MailButton email={BRAND.email} />
                <BookACallButton href="#contact" />
              </div>
            </Reveal>
            <div className="mt-14 h-eyebrow text-mute">Currently     Available · slots open</div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
