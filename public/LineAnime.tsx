import React, { useEffect, useRef, useState } from "react";

interface LineAnimeProps {
  children: React.ReactNode;
}

export const LineAnime = ({ children }: LineAnimeProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalHeight = rect.height;
      
      // Start the line animation when the top of the container reaches the middle of the viewport
      const start = windowH * 0.5;
      const scrolled = start - rect.top;
      
      // Calculate progress between 0 and 1
      const raw = scrolled / totalHeight;
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
    };

    // Run once on mount to set initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={timelineRef} className="relative">
      {/* Animated Vertical Line container */}
      {/* This positions the line on the left for mobile, and center for desktop */}
      <div className="pointer-events-none absolute inset-y-0 left-[20px] md:left-1/2 w-[2px] transform md:-translate-x-1/2" aria-hidden="true">
        {/* Track (Background static line) */}
        <div className="absolute inset-0 bg-foreground/15 rounded-full" />
        
        {/* Animated Fill (Glowing foreground line) */}
        <div
          className="absolute top-0 w-[2px] bg-signal rounded-full shadow-[0_0_12px_hsl(var(--signal)/0.6)] transition-[height] duration-150 ease-out"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};
