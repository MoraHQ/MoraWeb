import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mora: {
          bg: "#080D1A",
          "bg-2": "#0B1020",
          surface: "#0E1428",
          "surface-2": "#121930",
          border: "rgba(79,110,247,0.13)",
          "border-bright": "rgba(79,110,247,0.3)",
          primary: "#4F6EF7",
          "primary-light": "#818CF8",
          accent: "#F59E0B",
          "accent-warm": "#FBBF24",
          text: "#F0F4FF",
          "text-dim": "#A5B4FC",
          muted: "#6B7280",
          dim: "#374151",
        },
      },
      backgroundImage: {
        "gradient-mora": "linear-gradient(135deg, #4F6EF7 0%, #818CF8 100%)",
        "gradient-mora-soft": "linear-gradient(135deg, #3B5BDB 0%, #4F6EF7 50%, #818CF8 100%)",
        "gradient-hero": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,110,247,0.28) 0%, transparent 70%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-section": "linear-gradient(180deg, transparent 0%, rgba(79,110,247,0.04) 50%, transparent 100%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(79,110,247,0.22)",
        "glow-amber": "0 0 40px rgba(245,158,11,0.22)",
        "glow-sm": "0 0 20px rgba(79,110,247,0.14)",
        "card": "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        "card-hover": "0 8px 40px rgba(79,110,247,0.18), inset 0 1px 0 rgba(255,255,255,0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
