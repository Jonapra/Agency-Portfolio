import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1600px" },
    },
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', "serif"],
        sans: ["Geist", "ui-sans-serif", "system-ui"],
        mono: ['"JetBrains Mono"', "ui-monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        // Brand
        ink: { DEFAULT: "hsl(var(--ink))", 2: "hsl(var(--ink-2))", 3: "hsl(var(--ink-3))" },
        cream: { DEFAULT: "hsl(var(--cream))", 2: "hsl(var(--cream-2))" },
        bone: "hsl(var(--bone))",
        signal: { DEFAULT: "hsl(var(--signal))", 2: "hsl(var(--signal-2))" },
        mute: { DEFAULT: "hsl(var(--mute))", 2: "hsl(var(--mute-2))" },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      letterSpacing: { tightest: "-0.045em" },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "halo-drift-a": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%":       { transform: "translate3d(40px,-24px,0) scale(1.08)" },
        },
        "halo-drift-b": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%":       { transform: "translate3d(-30px,28px,0) scale(1.06)" },
        },
        "halo-drift-c": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.16" },
          "50%":       { transform: "translate3d(-20px,18px,0) scale(1.12)", opacity: "0.22" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "halo-drift-a": "halo-drift-a 16s ease-in-out infinite",
        "halo-drift-b": "halo-drift-b 22s ease-in-out infinite",
        "halo-drift-c": "halo-drift-c 19s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
