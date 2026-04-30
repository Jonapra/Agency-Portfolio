import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useRef } from "react";
import { LenisProvider, useLenis } from "@/components/lenis-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/error-boundary";
import Index from "./pages/Index.tsx";
import Blog from "./pages/Blog.tsx";
import Project from "./pages/Project.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

function ScrollManager() {
  const { pathname } = useLocation();
  const lenis = useLenis();
  const scrollPositions = useRef<Record<string, number>>({});

  useEffect(() => {
    const scrollToTop = () => {
      if (lenis) lenis.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
    };

    const scrollToY = (y: number) => {
      if (lenis) lenis.scrollTo(y, { immediate: true });
      else window.scrollTo(0, y);
    };

    const scrollToEl = (el: HTMLElement) => {
      if (lenis) lenis.scrollTo(el, { offset: 0 });
      else el.scrollIntoView({ behavior: "smooth" });
    };

    if (pathname.startsWith("/projects/")) {
      scrollToTop();
      return;
    }

    if (pathname === "/" || pathname === "/blog") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const timerId = window.setTimeout(() => scrollToEl(el), 100);
          return () => window.clearTimeout(timerId);
        }
      }

      const saved = scrollPositions.current[pathname];
      if (saved !== undefined) scrollToY(saved);
      else scrollToTop();
    }
  }, [pathname, lenis]);

  useEffect(() => {
    if (pathname !== "/" && pathname !== "/blog") return;

    if (lenis) {
      const onScroll = ({ scroll }: { scroll: number }) => {
        scrollPositions.current[pathname] = scroll;
      };
      lenis.on("scroll", onScroll);
      return () => {
        lenis.off("scroll", onScroll);
      };
    }

    const onScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, lenis]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider>
        <BrowserRouter>
          <LenisProvider>
            <ErrorBoundary>
              <ScrollManager />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects/:slug" element={<Project />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ErrorBoundary>
          </LenisProvider>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
