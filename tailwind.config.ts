import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        ink: "#0A0A0F",
        "ink-2": "#12121A",
        "ink-3": "#1C1C28",
        cream: "#F5F0E8",
        "cream-2": "#EDE8DC",
        volt: "#C8FF00",
        "volt-dim": "#A8D600",
        mist: "#9898B0",
        "mist-2": "#6B6B85",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        marquee: "marquee 25s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        borderGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(200,255,0,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(200,255,0,0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
