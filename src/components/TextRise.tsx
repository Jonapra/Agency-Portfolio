import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextRiseProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "span";
}

/** Scroll-triggered text reveal — slides up from below a mask. */
export const TextRise = ({
  children,
  delay = 0,
  duration = 0.95,
  className,
  as = "div",
}: TextRiseProps) => {
  const Wrapper = as === "span" ? motion.span : motion.div;
  const Inner = as === "span" ? motion.span : motion.div;

  return (
    <Wrapper
      className={cn(
        "overflow-hidden",
        as === "span" ? "inline-block align-bottom" : "block",
        className
      )}
      style={{ paddingBottom: "0.12em" }}
    >
      <Inner
        className={as === "span" ? "inline-block" : "block"}
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Inner>
    </Wrapper>
  );
};
