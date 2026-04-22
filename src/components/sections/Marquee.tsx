const ITEMS = ["Websites", "AI Automations", "Brand Identity", "UI UX Design"];

const Group = () => (
  <div className="flex shrink-0 items-center gap-10 px-8 marquee-huge font-display">
    {ITEMS.map((label) => (
      <>
        <span key={label}>{label}</span>
        <span className="italic-display text-signal">—</span>
      </>
    ))}
  </div>
);

export const Marquee = () => (
  <section className="relative py-14 md:py-20 border-y border-foreground/5">
    <div className="mx-auto max-w-[1600px] overflow-hidden">
      <div className="flex w-max marquee-track">
        <Group />
        <Group />
      </div>
    </div>
  </section>
);
