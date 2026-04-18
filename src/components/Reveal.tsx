import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/** Scroll-triggered reveal — fades + lifts in once on enter. */
export const Reveal = ({ children, delay = 0, y = 22, className, ...rest }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);
