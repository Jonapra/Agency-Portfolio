/** Looping marquee of service categories */
export const Marquee = () => {
  const Group = () => (
    <div className="flex items-center gap-10 px-8 marquee-huge font-display">
      <span>Brand systems</span><span className="italic-display text-signal">—</span>
      <span>Websites</span><span className="italic-display text-signal">—</span>
      <span>Product UI</span><span className="italic-display text-signal">—</span>
      <span>Editorial</span><span className="italic-display text-signal">—</span>
      <span>Motion</span><span className="italic-display text-signal">—</span>
    </div>
  );
  return (
    <section className="relative py-14 md:py-20 overflow-hidden border-y border-foreground/5">
      <div className="flex whitespace-nowrap marquee-track" style={{ width: "max-content" }}>
        <Group /><Group />
      </div>
    </section>
  );
};
