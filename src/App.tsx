import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useRef } from "react";
import Index from "./pages/Index.tsx";
import Blog from "./pages/Blog.tsx";
import Project from "./pages/Project.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

function ScrollManager() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef<Record<string, number>>({});

  // Save scroll position before navigation away from home
  useEffect(() => {
    const handleSave = () => {
      if (pathname === "/") {
        scrollPositions.current[pathname] = window.scrollY;
      }
    };

    // POP = back/forward, PUSH = new page, REPLACE = replace
    if (navigationType === "PUSH" && pathname.startsWith("/projects/")) {
      // Leaving home page - current scroll is already saved by the scroll listener
    }
  }, [pathname, navigationType]);

  // Handle scroll-to-top for project pages and restore for home
  useEffect(() => {
    if (pathname.startsWith("/projects/")) {
      // New project page - scroll to top
      window.scrollTo(0, 0);
    } else if (pathname === "/") {
      // Returning to home - restore position if available
      const saved = scrollPositions.current["/"];
      if (saved !== undefined) {
        window.scrollTo(0, saved);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  // Save scroll position continuously while on home
  useEffect(() => {
    if (pathname !== "/") return;
    const onScroll = () => {
      scrollPositions.current["/"] = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects/:slug" element={<Project />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
