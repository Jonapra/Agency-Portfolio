import { useEffect, useRef, useState } from "react";
import { SectionContainer } from "@/components/ui/section-container";

/**
 * Brand bar pinned to the bottom of the viewport. Sits behind the page
 * (z-0) so the content layer (z-10 + bg-background) scrolls over it.
 * A matching transparent spacer is rendered in normal flow so the bar
 * is revealed at the end of the page.
 */
export const FooterBrand = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const measure = () => setH(el.getBoundingClientRect().height);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <div aria-hidden style={{ height: h }} />
      <div
        ref={barRef}
        className="fixed inset-x-0 bottom-0 z-0 bg-[#FF4925] text-black w-full overflow-hidden pointer-events-none"
      >
        <SectionContainer className="py-2 md:py-4 flex flex-row items-center justify-between gap-4">
          <div
            className="font-sans font-black leading-none text-[clamp(32px,12vw,180px)] uppercase select-none"
            style={{ letterSpacing: "-0.09em" }}
          >
            Agiton
          </div>
          <div
            className="flex flex-col items-end text-right font-sans font-bold text-[clamp(10px,2.2vw,28px)] leading-[1.1] uppercase"
            style={{ letterSpacing: "-0.03em" }}
          >
            <span>Beyond Visuals</span>
            <span>Built With Vision</span>
          </div>
        </SectionContainer>
      </div>
    </>
  );
};
