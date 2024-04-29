import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1025px",
      xl: "1600px",
    },
    colors: {
      dark: "#222222",
      accent: "#33BDB0",
      secondary: "#14413D",
      white: "#FFFFFF",
    },
    fontFamily: {
      heading: ["var(--heading)"],
      body: ["var(--body)"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
