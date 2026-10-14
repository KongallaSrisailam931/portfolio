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
        background: "#030712",
        foreground: "#f8fafc",
        dark: "#03050a",
        brandBlue: "#0055ff",
        brandCyan: "#00f0ff",
        brandIndigo: "#6366f1",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "gradient-x": "gradientX 6s ease infinite",
        "gradient-slow": "gradientX 12s ease infinite",
        "text-shimmer": "textShimmer 3s ease-in-out infinite alternate",
        "float-1": "float1 5s ease-in-out infinite",
        "float-2": "float2 6.5s ease-in-out infinite",
        "float-3": "float3 5.8s ease-in-out infinite",
        "sheen-sweep": "sheen 2.5s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee-left": "marqueeLeft 28s linear infinite",
        "marquee-right": "marqueeRight 28s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite alternate",
      },
      keyframes: {
        gradientX: {
          "0%, 100%": { "background-size": "200% 200%", "background-position": "left center" },
          "50%": { "background-size": "200% 200%", "background-position": "right center" },
        },
        textShimmer: {
          "0%": { "filter": "drop-shadow(0 0 15px rgba(0, 85, 255, 0.4))" },
          "100%": { "filter": "drop-shadow(0 0 30px rgba(0, 240, 255, 0.75))" },
        },
        float1: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(12px) rotate(-2.5deg)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1.5deg)" },
        },
        sheen: {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(250%) skewX(-20deg)" },
        },
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        glowPulse: {
          "0%": { opacity: "0.3", filter: "blur(50px)" },
          "100%": { opacity: "0.7", filter: "blur(80px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
