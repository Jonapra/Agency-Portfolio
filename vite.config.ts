import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/") || id.includes("node_modules/scheduler/"))
            return "react-vendor";
          if (id.includes("node_modules/gsap/") || id.includes("node_modules/@gsap/") || id.includes("node_modules/framer-motion/") || id.includes("node_modules/lenis/"))
            return "animation-vendor";
          if (id.includes("node_modules/react-router") || id.includes("node_modules/@remix-run/"))
            return "router-vendor";
          if (id.includes("node_modules/@radix-ui/"))
            return "radix-vendor";
          if (id.includes("node_modules/@tanstack/"))
            return "query-vendor";
        },
      },
    },
  },
}));
