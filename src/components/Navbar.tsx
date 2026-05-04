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
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
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
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const headerTextColor = "text-cream";
  const plateBase =
    "rounded-full border border-cream/10 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_30px_-12px_rgba(0,0,0,0.5)] transition-colors duration-500";
  const plateTone = isScrolled || isPastHero ? "bg-ink-2/75" : "bg-ink-2/40";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${headerTextColor} transition-transform duration-500 ease-smooth ${
          isHidden && !menuOpen ? "-translate-y-[120%]" : "translate-y-0"
        } ${isScrolled || isPastHero ? "pt-2 md:pt-4" : "pt-4 md:pt-6"}`}
      >
        <div className="mx-auto flex items-center justify-between md:justify-center gap-3 md:gap-4 px-4 md:px-6 max-w-[1500px]">
          {/* MOBILE — Unified glass bar */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`flex md:hidden items-center justify-between w-full p-1.5 px-4 ${plateBase} ${plateTone}`}
          >
            <Logo small />
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/919366279647"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] text-white ring-1 ring-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_4px_14px_-2px_rgba(37,211,102,0.45)] active:scale-[0.97] transition-transform duration-300 ease-smooth cursor-pointer"
              >
                <WhatsAppIcon size={15} />
              </a>
              <button
                onClick={() => setMenuOpen(o => !o)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="relative rounded-full w-10 h-10 grid place-items-center cursor-pointer z-[60] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
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
          </motion.div>

          {/* CENTER — Unified pill: Logo + Nav + WhatsApp (desktop) */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`hidden md:flex items-center p-1.5 pl-5 gap-3 ${plateBase} ${plateTone}`}
          >
            <div className="flex items-center">
              <Logo small />
            </div>
            <span aria-hidden="true" className="h-6 w-px bg-cream/10" />
            <nav aria-label="Primary" className="flex items-center gap-1">
              {NAV_LINKS.map((l, i) => (
                <a
                  key={l.href}
                  href={`${anchorPrefix}${l.href}`}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onFocus={() => setHoveredIdx(i)}
                  className="group relative inline-flex items-center rounded-full px-3.5 lg:px-4 py-2 text-[13px] font-medium tracking-tight cursor-pointer focus-visible:outline-none"
                >
                  {hoveredIdx === i && (
                    <motion.span
                      layoutId="nav-hover"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-cream/[0.08] ring-1 ring-cream/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 overflow-hidden inline-block leading-[1.15]">
                    <span className="block transition-transform duration-500 ease-smooth group-hover:-translate-y-full">
                      {l.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="block absolute inset-0 transition-transform duration-500 ease-smooth translate-y-full group-hover:translate-y-0 text-signal"
                    >
                      {l.label}
                    </span>
                  </span>
                </a>
              ))}
            </nav>
            <span aria-hidden="true" className="h-6 w-px bg-cream/10" />
            <a
              href="https://wa.me/919366279647"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="group relative inline-flex items-center h-9 rounded-full bg-[#25D366] text-white ring-1 ring-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_2px_10px_-2px_rgba(37,211,102,0.5)] lg:hover:shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_6px_16px_-4px_rgba(37,211,102,0.7)] lg:hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-[box-shadow,transform] duration-300 ease-smooth cursor-pointer overflow-hidden"
            >
              <span className="flex items-center justify-center w-9 h-9 shrink-0 transition-transform duration-300 lg:group-hover:scale-110 group-active:scale-95">
                <WhatsAppIcon size={15} />
              </span>
              <span
                className="grid grid-cols-[0fr] lg:group-hover:grid-cols-[1fr] transition-[grid-template-columns] duration-500 ease-smooth"
                aria-hidden="true"
              >
                <span className="overflow-hidden min-w-0">
                  <span className="block whitespace-nowrap pr-3.5 text-[12.5px] font-medium tracking-tight opacity-0 -translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 ease-out delay-100">
                    Chat with Us
                  </span>
                </span>
              </span>
            </a>
          </motion.div>
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
