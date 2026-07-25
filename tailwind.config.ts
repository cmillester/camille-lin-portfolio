import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f9f8f5",
        ink: "#1e2530",
        "ink-soft": "#262e38",
        muted: "#525c6b",
        teal: "#3a7373",
        "teal-deep": "#2f5f5f",
        border: "#e2dfd9",
        "border-soft": "#e0e0db",
        section: "#f1efea",
        "teal-tint": "#e8efef",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-instrument)", "sans-serif"],
      },
      maxWidth: {
        content: "1312px",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
