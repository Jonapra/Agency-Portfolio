import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { BRAND } from "@/constants/site";
import { MailButton } from "@/components/ui/mail-button";
import { SectionContainer } from "@/components/ui/section-container";

const CAL_NAMESPACE = "30min";
const CAL_LINK = "ankit-pradhan/30min";

export const CTA = () => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "dark",
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#FF5A1F",
            "cal-text": "#F2EDE4",
            "cal-text-emphasis": "#FBF8F2",
            "cal-text-muted": "#8A8A92",
            "cal-bg": "#000000",
            "cal-bg-emphasis": "#0a0a0a",
            "cal-bg-muted": "#0a0a0a",
            "cal-bg-info": "#0a0a0a",
            "cal-border": "rgba(242, 237, 228, 0.10)",
            "cal-border-default": "rgba(242, 237, 228, 0.12)",
            "cal-border-emphasis": "rgba(242, 237, 228, 0.20)",
            "cal-border-subtle": "rgba(242, 237, 228, 0.06)",
          },
        },
      });
    })();
  }, []);

  return (
    <section id="contact" data-cursor="none" className="relative py-8 md:py-10 lg:py-6">
      <SectionContainer>
        <div className="relative overflow-hidden rounded-2xl plate p-6 md:p-8 lg:p-6">
          <div
            className="halo"
            style={{
              width: 720,
              height: 720,
              background: "hsl(var(--signal))",
              left: "-10%",
              top: "-20%",
              opacity: 0.18,
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 lg:gap-10 items-stretch">
            {/* Left — invitation copy */}
            <div className="flex flex-col justify-between">
              <div>
                <Reveal>
                  <div className="h-eyebrow text-signal mb-4">
                    Let's build something awesome.
                  </div>
                </Reveal>

                <Reveal delay={0.05}>
                  <h2
                    className="font-sans font-semibold leading-[0.95]"
                    style={{ fontSize: "clamp(32px,3.6vw,56px)", letterSpacing: "-0.03em" }}
                  >
                    Start a<br />
                    <span className="italic text-signal">project</span> with us.
                  </h2>
                </Reveal>

                <Reveal delay={0.12}>
                  <p className="mt-4 max-w-md text-mute-2 text-[14px] leading-relaxed">
                    Pick a slot — 20 minutes, no pitch deck, no pressure. We'll talk
                    through your project and see if we're the right fit.
                  </p>
                </Reveal>

                {/* Mobile + tablet — opens Cal popup (desktop shows inline embed instead) */}
                <Reveal delay={0.18}>
                  <button
                    type="button"
                    data-cal-namespace={CAL_NAMESPACE}
                    data-cal-link={CAL_LINK}
                    data-cal-config='{"layout":"month_view"}'
                    className="lg:hidden mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-signal text-ink h-[58px] pl-6 pr-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    <span className="font-sans font-semibold text-[16px] tracking-[-0.02em]">
                      Book a 20-minute call
                    </span>
                    <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-ink text-signal">
                      <ArrowUpRight size={18} strokeWidth={2.2} />
                    </span>
                  </button>
                </Reveal>
              </div>

              <Reveal delay={0.18}>
                <div className="mt-8 space-y-4">
                  <div className="dash-rule text-foreground/30" />

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
                      </span>
                      <span className="text-cream">Available — every week</span>
                    </div>
                    <div className="text-sm text-mute">{BRAND.location}</div>
                  </div>

                  <div className="dash-rule text-foreground/30" />

                  <div className="flex items-center justify-between gap-4 pt-1">
                    <div className="h-eyebrow text-mute">Prefer email?</div>
                    <MailButton email={BRAND.email} />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right — Cal embed (desktop only; mobile/tablet uses the pill button above) */}
            <div className="hidden lg:block">
              <Reveal delay={0.1}>
                <div className="relative rounded-xl border border-foreground/10 bg-black overflow-hidden">
                  <Cal
                    namespace={CAL_NAMESPACE}
                    calLink={CAL_LINK}
                    style={{ width: "100%", overflow: "hidden" }}
                    config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
