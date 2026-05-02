import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect, useRef } from "react";
import { LenisProvider, useLenis } from "@/components/lenis-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/error-boundary";

const Index = lazy(() => import("./pages/Index.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const Project = lazy(() => import("./pages/Project.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

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
      if (lenis) lenis.resize();
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (lenis) lenis.scrollTo(top, { immediate: true });
      else window.scrollTo(0, top);
    };

    if (pathname.startsWith("/projects/")) {
      scrollToTop();
      return;
    }

    if (pathname === "/" || pathname === "/blog") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.slice(1);
        let cancelled = false;
        let timerId: number | undefined;
        let attempts = 0;
        const tryScroll = () => {
          if (cancelled) return;
          const el = document.getElementById(id);
          if (el) {
            scrollToEl(el);
            return;
          }
          if (attempts++ < 60) {
            timerId = window.setTimeout(tryScroll, 50);
          }
        };
        tryScroll();
        return () => {
          cancelled = true;
          if (timerId !== undefined) window.clearTimeout(timerId);
        };
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
              <Suspense fallback={<div aria-hidden="true" style={{ position: "fixed", inset: 0, background: "hsl(240 6% 5%)" }} />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/projects/:slug" element={<Project />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </LenisProvider>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
