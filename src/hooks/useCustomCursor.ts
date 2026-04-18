import { useEffect } from "react";

/**
 * Custom cursor: a smoothed ring + dot that morphs on hover targets.
 * Targets: any [data-cursor], <a>, or <button>. data-cursor="view" → "View" label.
 */
export const useCustomCursor = () => {
  useEffect(() => {
    if (matchMedia("(hover: none)").matches) return;

    const ring = document.querySelector<HTMLDivElement>(".cursor-ring");
    const dot = document.querySelector<HTMLDivElement>(".cursor-dot");
    if (!ring || !dot) return;

    let rx = 0, ry = 0, dx = 0, dy = 0, tx = 0, ty = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY; dx = e.clientX; dy = e.clientY;
    };
    const tick = () => {
      rx += (tx - rx) * 0.15; ry += (ty - ry) * 0.15;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest("a,button,[data-cursor]") as HTMLElement | null;
      if (!t) return;
      if (t.dataset.cursor === "view") { ring.classList.add("view"); ring.classList.remove("hover"); }
      else { ring.classList.add("hover"); ring.classList.remove("view"); }
    };
    const onOut = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest("a,button,[data-cursor]");
      if (!t) return;
      ring.classList.remove("hover", "view");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);
};
