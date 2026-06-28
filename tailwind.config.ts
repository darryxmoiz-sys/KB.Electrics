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
        paper: "#F7F4EC",
        parchment: "#EFE7D4",
        ink: "#0F2018",
        bottle: {
          DEFAULT: "#1B3A2E",
          light: "#274F3F",
          dark: "#0F2018",
        },
        copper: {
          DEFAULT: "#C4632B",
          light: "#D98449",
          dark: "#9A4A1E",
        },
        slate: "#5B6760",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(circle at 20% 20%, rgba(27,58,46,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(196,99,43,0.04) 0%, transparent 50%)",
      },
      keyframes: {
        "draw-line": {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
        "stamp-in": {
          "0%": { transform: "scale(2) rotate(-8deg)", opacity: "0" },
          "60%": { transform: "scale(0.95) rotate(-8deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(-8deg)", opacity: "1" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "draw-line": "draw-line 2.2s ease-out forwards",
        "stamp-in": "stamp-in 0.6s cubic-bezier(0.2,1.4,0.4,1) forwards",
        flicker: "flicker 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
