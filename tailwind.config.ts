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
          bg: "#020209",
          surface: "#0C0C1D",
          "surface-2": "#12122A",
          border: "rgba(255,255,255,0.07)",
          primary: "#6366f1",
          violet: "#8b5cf6",
          text: "#F0F0FF",
          muted: "#6B7280",
          dim: "#3A3A5C",
        },
      },
      backgroundImage: {
        "gradient-mora": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
