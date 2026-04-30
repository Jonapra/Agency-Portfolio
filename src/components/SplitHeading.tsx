import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  text: string;
  className?: string;
  italic?: boolean;
  delay?: number;
}

/** Splits a string into per-character spans that rise into place on mount. */
export const SplitText = ({ text, className = "", italic = false, delay = 0 }: Props) => {
  const chars = [...text];
  const prefersReduced = useReducedMotion();
  return (
    <span className={`inline-block overflow-hidden align-top leading-[1.02] pr-[0.1em] ${italic ? "italic-display" : ""} ${className}`}>
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={prefersReduced ? false : { y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: prefersReduced ? 0 : 0.9, delay: prefersReduced ? 0 : delay + i * 0.028, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
};

interface LineProps { children: ReactNode; }
export const SplitLine = ({ children }: LineProps) => (
  <span className="block overflow-hidden pr-2">{children}</span>
);
