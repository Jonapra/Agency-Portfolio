import { cn } from "@/lib/utils";

/* ── Data ──────────────────────────────────────────────────────── */
const DATA = [
  {
    title: "Personalised Support",
    desc: "You get a dedicated team who understands your business goals and plan it accordingly.",
    span: "md:col-span-4",
  },
  {
    title: "With You Every Step",
    desc: "Weekly check-ins, consistent updates, We stay with you from the first consultation to the final launch.",
    span: "md:col-span-4",
  },
  {
    title: "Measurable Impact",
    desc: "We bake analytics into every ship, providing clear benchmarks so you can track your success from day one.",
    span: "md:col-span-4",
  },
  {
    title: "Future-Ready Solutions",
    desc: "We build fast, secure, and scalable websites using modern technologies that keeps you competitive tomorrow.",
    span: "md:col-span-5",
  },
  {
    title: "Transparent Process",
    desc: "You'll always know what's happening with clear timelines, regular updates, and open communication.",
    span: "md:col-span-7",
  },
];

/* ── BentoCard ─────────────────────────────────────────────────── */
interface BentoCardProps {
  title: string;
  desc: string;
  className?: string;
}

const BentoCard = ({ title, desc, className }: BentoCardProps) => {
  return (
    <article
      className={cn(
        "group relative rounded-2xl border border-foreground/10",
        "bg-foreground/[0.025] overflow-hidden h-full",
        className
      )}
    >
      {/* Placeholder for the new UI / Illustration */}
      <div className="h-[180px] md:h-[200px] bg-foreground/[0.03] flex items-center justify-center">
        <span className="text-foreground/10 font-mono text-xs uppercase tracking-widest">
          Placeholder
        </span>
      </div>
      
      <div className="h-px bg-foreground/[0.08]" />
      
      <div className="p-5 md:p-6">
        <h3 className="font-display font-semibold text-[1.4rem] md:text-[1.65rem] leading-[1.1] mb-2">
          {title}
        </h3>
        <p className="text-mute-2 text-sm md:text-base leading-relaxed">
          {desc}
        </p>
      </div>
    </article>
  );
};

/* ── Section ───────────────────────────────────────────────────── */
export const ChooseUs = () => {
  return (
    <section id="choose-us" className="relative py-10 md:py-16">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <div className="h-eyebrow text-mute mb-5">§ 04 · Why Choose Us</div>
          <h2 className="h-section font-sans font-semibold leading-[1.05]">
            Why <span className="italic text-signal">Choose Us</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-mute-2 leading-relaxed max-w-3xl mx-auto">
            Built To <span className="italic-display font-bold">Grow</span>,{" "}
            <span className="italic-display text-signal font-bold">Ship High-Quality</span> Websites Faster
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {DATA.map((item, i) => (
            <BentoCard
              key={i}
              title={item.title}
              desc={item.desc}
              className={item.span}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
