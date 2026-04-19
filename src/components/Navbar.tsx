import { useEffect, useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { useMagnetic } from "@/hooks/useMagnetic";
import { NAV_LINKS } from "@/constants/site";

interface NavbarProps {
  /** When true, anchor links route to "/#section" so they jump from any page. */
  anchorPrefix?: string;
}

export const Navbar = ({ anchorPrefix = "" }: NavbarProps) => {
  const [theme, setTheme] = useState<"dark" | "light">(() => (localStorage.getItem("agiton-theme") as "dark" | "light") || "dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.18);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("agiton-theme", theme);
  }, [theme]);

  // If we are at the top of the page (Hero section), we want light text because the hero is always dark.
  const isOverDark = !isScrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 transition-colors duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-foreground/5" : ""} ${isOverDark ? "text-cream" : "text-foreground"}`}>
      <div className="mx-auto max-w-[1600px] flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-9 text-sm">
          {NAV_LINKS.map(l => (
            <RRNavLink key={l.href} to={`${anchorPrefix}${l.href}`} className="u-link">{l.label}</RRNavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}
            aria-label="Toggle theme"
            className="rounded-full w-9 h-9 grid place-items-center border border-current/10 hover:bg-current/5 transition"
          >
            {theme === "dark" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
            )}
          </button>
          <a
            ref={ctaRef}
            href={`${anchorPrefix}#contact`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-signal text-ink hover:bg-signal-2 transition-colors"
          >
            Start a project
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 10 L10 2 M4 2 H10 V8" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
          </a>
        </div>
      </div>
    </header>
  );
};
