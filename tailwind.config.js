/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "on-surface": "#fafafa",
        "on-surface-variant": "#a1a1aa",
        primary: "#a78bfa",
        "on-primary": "#0c0c0f",
        surface: "#0c0c0f",
        "surface-dim": "#09090b",
        tertiary: "#34d399",
        "surface-container": "#121215",
        "surface-container-high": "#18181b",
        "surface-container-highest": "#1f1f23",
        "outline-variant": "#27272a",
        error: "#ef4444",
      },
      fontFamily: {
        body: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.02em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-in": "slideIn 0.8s ease-out",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",
        "scale-in": "scaleIn 0.8s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(167, 139, 250, 0.3)" },
          "50%": { boxShadow: "0 0 25px rgba(167, 139, 250, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      transitionTimingFunction: {
        "smooth-enter": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth-exit": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};
