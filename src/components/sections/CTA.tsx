import { useEffect, useRef, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { BRAND } from "@/constants/site";
import { MailButton } from "@/components/ui/mail-button";
import { SectionContainer } from "@/components/ui/section-container";

const CAL_NAMESPACE = "30min";
const CAL_LINK = "ankit-pradhan/30min";
const WHATSAPP_HREF = "https://wa.me/919366279647";

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [calLoaded, setCalLoaded] = useState(false);

  // Trigger only when section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isReady) return;
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("on", { action: "linkReady", callback: () => setCalLoaded(true) });
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
  }, [isReady]);

  return (
    <section ref={sectionRef} id="contact" data-cursor="none" className="relative py-8 md:py-10 lg:py-6">
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

                <Reveal delay={0.15}>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                    className="group mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-[#25D366] text-white h-[52px] pl-6 pr-2 cursor-pointer ring-1 ring-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_4px_14px_-2px_rgba(37,211,102,0.45)] transition-[box-shadow,transform] duration-300 ease-smooth lg:hover:-translate-y-0.5 lg:hover:shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_6px_18px_-4px_rgba(37,211,102,0.7)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    <span className="font-sans font-semibold text-[15px] tracking-[-0.02em]">
                      WhatsApp us
                    </span>
                    <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-[#25D366] transition-transform duration-300 ease-smooth lg:group-hover:scale-105">
                      <WhatsAppIcon size={16} />
                    </span>
                  </a>
                </Reveal>

                {/* Mobile only — tablet + desktop shows inline embed below */}
                <Reveal delay={0.18}>
                  <button
                    type="button"
                    data-cal-namespace={CAL_NAMESPACE}
                    data-cal-link={CAL_LINK}
                    data-cal-config='{"layout":"month_view"}'
                    className="md:hidden mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-signal text-ink h-[58px] pl-6 pr-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
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

            {/* Right — Cal embed (tablet + desktop) */}
            <div className="hidden md:block md:w-[60%] md:mx-auto lg:w-auto lg:mx-0">
              <Reveal delay={0.1}>
                <div className="relative rounded-xl border border-foreground/10 overflow-hidden min-h-[560px] bg-gradient-to-br from-signal/[0.07] via-black to-black lg:mr-4">
                  {!calLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
                      <span className="font-sans font-semibold text-cream/60" style={{ fontSize: "clamp(20px,2vw,28px)", letterSpacing: "-0.03em" }}>
                        Pick a slot.
                      </span>
                      <span className="text-xs text-mute/40 font-sans">30 min · no prep needed</span>
                    </div>
                  )}
                  {isReady && (
                    <div style={{ opacity: calLoaded ? 1 : 0, transition: "opacity 0.4s ease" }}>
                      <Cal
                        namespace={CAL_NAMESPACE}
                        calLink={CAL_LINK}
                        style={{ width: "100%", overflow: "hidden" }}
                        config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
                      />
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
