import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#0B1120",
          deep: "#070B16",
          light: "#121A2E",
        },
        violet: {
          DEFAULT: "#7C5CFF",
          light: "#9A7DFF",
          dark: "#5B3FE0",
        },
        cyan: {
          DEFAULT: "#22D3EE",
          light: "#67E8F9",
        },
        amber: {
          DEFAULT: "#FFB454",
          light: "#FFC97A",
          dark: "#F59E2A",
        },
        mist: "#A8B3CC",
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        accent: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at 15% 20%, rgba(124,92,255,0.25) 0%, transparent 45%), radial-gradient(circle at 85% 15%, rgba(34,211,238,0.18) 0%, transparent 40%), radial-gradient(circle at 50% 90%, rgba(255,180,84,0.10) 0%, transparent 45%)",
        "card-glow":
          "linear-gradient(135deg, rgba(124,92,255,0.15), rgba(34,211,238,0.08))",
        "violet-cyan": "linear-gradient(135deg, #7C5CFF 0%, #22D3EE 100%)",
        "violet-amber": "linear-gradient(135deg, #7C5CFF 0%, #FFB454 100%)",
      },
      keyframes: {
        "blob-float": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.08)" },
          "66%": { transform: "translate(-20px,30px) scale(0.95)" },
        },
        "border-spin": {
          to: { transform: "rotate(360deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "blob-float": "blob-float 14s ease-in-out infinite",
        "blob-float-slow": "blob-float 20s ease-in-out infinite reverse",
        "border-spin": "border-spin 6s linear infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
