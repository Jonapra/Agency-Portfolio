/** Looping marquee of service categories */
export const Marquee = () => {
  const Group = () => (
    <div className="flex items-center gap-10 px-8 marquee-huge font-display">
      <span>UI UX Design</span><span className="italic-display text-signal">—</span>
      <span>Websites</span><span className="italic-display text-signal">—</span>
      <span>AI Automations</span><span className="italic-display text-signal">—</span>
      <span>Brand Identity</span><span className="italic-display text-signal">—</span>
    </div>
  );
  return (
    <section className="relative py-14 md:py-20 overflow-hidden border-y border-foreground/5">
      <div className="flex whitespace-nowrap marquee-track" style={{ width: "max-content" }}>
        <Group /><Group /><Group /><Group />
      </div>
    </section>
  );
};
