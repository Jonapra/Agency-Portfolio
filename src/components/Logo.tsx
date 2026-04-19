import { Link } from "react-router-dom";

export const Logo = ({ small = false }: { small?: boolean }) => (
  <Link to="/" className="flex items-center gap-2 group" aria-label="Agiton home">
    <svg width={small ? 24 : 28} height={small ? 24 : 28} viewBox="0 0 28 28" fill="none" className="transition-transform group-hover:rotate-90 duration-500">
      <path d="M14 2 L26 14 L14 26 L2 14 Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="4" fill="hsl(var(--signal))" />
    </svg>
    <span className="font-display text-2xl">Agiton</span>
  </Link>
);
