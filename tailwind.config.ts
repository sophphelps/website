import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        paper: "#f8fafb",
        accent: "#315c75",
        line: "#dce4e8",
        muted: "#5e6b75",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        quiet: "0 12px 36px rgba(23, 32, 51, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
