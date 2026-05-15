import { Link } from "react-router-dom";
import type { Project } from "@/constants/site";
import { cn } from "@/lib/utils";

const ProjectArt = ({ p }: { p: Project }) => {
  if (p.title === "Veldt")
    return (
      <div
        className="italic-display text-cream"
        style={{ fontSize: "clamp(56px,7vw,140px)", lineHeight: 0.9 }}
      >
        Veldt<span className="not-italic font-display text-cream/60">◐</span>
      </div>
    );
  if (p.title === "Flint OS")
    return (
      <div className="grid grid-cols-4 gap-2 w-[55%] h-[55%]">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "rounded-sm",
              i % 5 === 0 ? "bg-signal" : "bg-cream/10"
            )}
          />
        ))}
      </div>
    );
  if (p.title === "Paperbound")
    return (
      <div className="text-ink text-center">
        <div
          className="italic-display"
          style={{ fontSize: "clamp(40px,5.5vw,100px)", lineHeight: 0.9 }}
        >
          Paperbound<span className="text-signal">.</span>
        </div>
        <div className="font-mono uppercase mt-3 opacity-60 text-[10px] tracking-[0.22em]">
          Issue 07 · Noise
        </div>
      </div>
    );
  return null;
};

export const WorkCard = ({
  p,
  className,
}: {
  p: Project;
  className?: string;
}) => {
  const cardClassName = cn(
    "group relative block aspect-[3/2] w-full overflow-hidden rounded-2xl",
    "bg-ink-2 ring-1 ring-cream/[0.06] cursor-pointer",
    "shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]",
    "transition-[box-shadow,transform] duration-500 ease-smooth",
    "hover:shadow-[0_50px_120px_-20px_rgba(0,0,0,0.7)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4 focus-visible:ring-offset-background",
    className
  );

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    p.url ? (
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="view"
        aria-label={`Visit ${p.title} (opens in new tab)`}
        className={cardClassName}
      >
        {children}
      </a>
    ) : (
      <Link
        to={`/projects/${p.slug}`}
        data-cursor="view"
        aria-label={`View case study: ${p.title}`}
        className={cardClassName}
      >
        {children}
      </Link>
    );

  return (
    <Wrapper>
      {p.image ? (
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: p.invert
              ? `linear-gradient(135deg, ${p.c1}, ${p.c2})`
              : `linear-gradient(135deg, ${p.c2}, #06060a)`,
          }}
        >
          {!p.invert && (
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: `radial-gradient(700px 320px at 50% 60%, ${p.c1}55, transparent 65%)`,
              }}
            />
          )}
          <div className="relative z-10 grid h-full w-full place-items-center px-6">
            <ProjectArt p={p} />
          </div>
        </div>
      )}
    </Wrapper>
  );
};
