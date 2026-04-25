import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { useMagnetic } from "@/hooks/useMagnetic";
import { NAV_LINKS } from "@/constants/site";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

interface NavbarProps {
  /** When true, anchor links route to "/#section" so they jump from any page. */
  anchorPrefix?: string;
}

export const Navbar = ({ anchorPrefix = "" }: NavbarProps) => {
  const [theme, setTheme] = useState<"dark" | "light">(() => (localStorage.getItem("agiton-theme") as "dark" | "light") || "dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ctaRef = useMagnetic<HTMLAnchorElement>(0);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("top");
      const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
      
      setIsScrolled(window.scrollY > 2);
      setIsPastHero(window.scrollY > heroHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("agiton-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Header text color logic: 
  // 1. If menu is open, background is always dark, so text must be cream.
  // 2. Otherwise, use cream for dark theme and ink (black) for light theme.
  const headerTextColor = menuOpen ? "text-cream" : (theme === "dark" ? "text-cream" : "text-ink");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[0.2,0.8,0.2,1] p-0 ${headerTextColor}`}
      >
        <div
          className={`
            transition-all duration-500 ease-[0.2,0.8,0.2,1] w-full lg:px-5
            ${isPastHero && !menuOpen 
              ? "w-full md:w-[calc(100%-4rem)] max-w-[1400px] md:rounded-b-2xl md:border-x border-b bg-background/80 backdrop-blur-xl py-3.5" 
              : isScrolled || menuOpen
                ? `w-full border-b backdrop-blur-xl py-3.5 ${menuOpen ? "bg-ink border-white/10" : "bg-background/80 border-foreground/10"}`
                : "w-full border-b border-transparent py-4"
            }
            ${isPastHero && !menuOpen ? "border-foreground/10" : ""}
          `}
        >
          <div className="mx-auto flex items-center justify-between w-full max-w-[1600px] px-6 md:px-10">
            <Logo />

            <nav className="hidden md:flex items-center gap-9 text-sm">
              {NAV_LINKS.map(l => (
                <a key={l.href} href={`${anchorPrefix}${l.href}`} className="u-link">{l.label}</a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}
                aria-label="Toggle theme"
                className={`rounded-full w-9 h-9 grid place-items-center border transition cursor-pointer ${menuOpen || theme === "dark" ? "border-cream/25 hover:bg-cream/10" : "border-ink/20 hover:bg-ink/5"}`}
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
                className="hidden sm:inline-flex items-center gap-2 text-sm group"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
                </span>
                <span className="u-link">Let's talk</span>
                <svg width="12" height="12" viewBox="0 0 12 12" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M2 10 L10 2 M4 2 H10 V8" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </a>

              <button
                onClick={() => setMenuOpen(o => !o)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className={`md:hidden relative rounded-full w-10 h-10 grid place-items-center border transition cursor-pointer z-[60] ${menuOpen || theme === "dark" ? "border-cream/25 hover:bg-cream/10" : "border-ink/20 hover:bg-ink/5"}`}
              >
                <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
                <span className="relative w-4 h-3 block">
                  <motion.span
                    className="absolute left-0 right-0 h-px bg-current origin-center"
                    animate={menuOpen ? { top: "50%", rotate: 45, y: "-50%" } : { top: 0, rotate: 0, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.span
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-current"
                    animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute left-0 right-0 h-px bg-current origin-center"
                    animate={menuOpen ? { bottom: "50%", rotate: -45, y: "50%" } : { bottom: 0, rotate: 0, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        anchorPrefix={anchorPrefix}
      />
    </>
  );
};

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  anchorPrefix: string;
}

const panelVariants = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], when: "beforeChildren", staggerChildren: 0.07, delayChildren: 0.15 },
  },
  exit: { y: "-100%", transition: { duration: 0.45, ease: [0.7, 0, 0.84, 0] } },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  exit: { y: 20, opacity: 0, transition: { duration: 0.2 } },
};

const MobileMenu = ({ open, onClose, anchorPrefix }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-40 md:hidden bg-ink text-cream flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex-1 flex flex-col justify-center px-8 pt-24 pb-10">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((l, i) => (
                <motion.div key={l.href} variants={itemVariants} className="overflow-hidden">
                  <a
                    href={`${anchorPrefix}${l.href}`}
                    onClick={onClose}
                    className="group relative block font-serif text-[clamp(2.75rem,12vw,5rem)] leading-[1.05] tracking-tight text-cream transition-colors duration-300"
                  >
                    <span className="inline-flex items-baseline gap-4">
                      <span className="text-xs font-mono tracking-[0.2em] text-mute align-top pt-3">0{i + 1}</span>
                      <span className="relative">
                        {l.label}
                        <span className="absolute left-0 -bottom-1 h-px w-0 bg-cream transition-[width] duration-500 ease-out group-hover:w-full" />
                      </span>
                    </span>
                  </a>
                </motion.div>
              ))}
            </nav>

            <motion.div variants={itemVariants} className="mt-14">
              <a href={`${anchorPrefix}#contact`} onClick={onClose}>
                <ButtonWithIcon
                  text="Start a project"
                  className="bg-signal text-ink"
                />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="px-8 pb-10 pt-6 border-t border-cream/10 flex items-center justify-between text-xs font-mono tracking-[0.15em] text-mute uppercase"
          >
            <span>Agiton Studio</span>
            <span>hello@agiton.studio</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
