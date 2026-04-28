import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/constants/site";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

interface NavbarProps {
  /** When true, anchor links route to "/#section" so they jump from any page. */
  anchorPrefix?: string;
}

export const Navbar = ({ anchorPrefix = "" }: NavbarProps) => {
  const [theme, setTheme] = useState<"dark" | "light">(() => (localStorage.getItem("agiton-theme") as "dark" | "light") || "dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const HIDE_THRESHOLD = 80;
    const DELTA = 6;

    const handleScroll = () => {
      const hero = document.getElementById("top");
      const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
      const y = window.scrollY;
      const last = lastScrollY.current;

      setIsScrolled(y > 2);
      setIsPastHero(y > heroHeight - 80);

      if (Math.abs(y - last) < DELTA) return;

      if (y < HIDE_THRESHOLD) {
        setIsHidden(false);
      } else if (y > last) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] p-0 ${headerTextColor} ${isHidden && !menuOpen ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div
          className={`
            transition-all duration-500 ease-[0.2,0.8,0.2,1] w-full lg:px-5
            ${isPastHero && !menuOpen
              ? "w-full md:w-[calc(100%-4rem)] max-w-[1400px] md:rounded-b-2xl md:border-x border-b bg-background/80 backdrop-blur-xl py-3"
              : isScrolled || menuOpen
                ? `w-full border-b backdrop-blur-xl py-3 ${menuOpen ? "bg-ink border-white/10" : "bg-background/80 border-foreground/10"}`
                : "w-full border-b border-transparent py-5"
            }
            ${isPastHero && !menuOpen ? "border-foreground/10" : ""}
          `}
        >
          <div className="mx-auto flex items-center justify-between w-full max-w-[1400px] px-6 md:px-10">
            <Logo />

            <nav className="hidden md:flex items-center gap-12 lg:gap-14 text-sm">
              {NAV_LINKS.map(l => (
                <a key={l.href} href={`${anchorPrefix}${l.href}`} className="u-link">{l.label}</a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917042607942"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="group relative inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#25D366] text-white shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_4px_14px_-2px_rgba(37,211,102,0.45)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_8px_22px_-4px_rgba(37,211,102,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer select-none ring-1 ring-white/15 hover:ring-white/25"
              >
                <span className="relative inline-flex transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                  <span className="md:hidden"><WhatsAppIcon size={16} /></span>
                  <span className="hidden md:inline-flex"><WhatsAppIcon size={18} /></span>
                </span>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] bg-ink text-cream border border-cream/15 shadow-[0_8px_22px_-6px_rgba(0,0,0,0.45)] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                >
                  Chat on WhatsApp
                </span>
              </a>

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
