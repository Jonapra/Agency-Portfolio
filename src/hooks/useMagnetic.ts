import { useEffect, useRef } from "react";

/**
 * Magnetic effect: element is attracted toward the cursor on hover.
 * Attach the returned ref to the element you want to attract.
 */
export const useMagnetic = <T extends HTMLElement = HTMLElement>(strength = 0.2) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${mx * strength}px, ${my * (strength + 0.05)}px)`;
    };
    const onLeave = () => { el.style.transform = ""; };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
};
