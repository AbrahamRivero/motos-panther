import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
	  colors: {
        border: "#E2E8F0",
        input: "#CBD5E1",
        ring: "#9333EA",
        background: "#FFFFFF",
        foreground: "#1E293B",
        primary: {
          DEFAULT: "#18181B", // Rich black - luxury and sophistication
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#9333EA", // Royal purple - luxury and premium quality
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#64748B",
          foreground: "#F8FAFC",
        },
        accent: {
          DEFAULT: "#D946EF", // Vibrant purple - energy and excitement
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1E293B",
        },
        card: {
          DEFAULT: "#F8FAFC",
          foreground: "#1E293B",
        },
        categories: {
          DEFAULT: "#F1F5F9",
        },
        trending: {
          DEFAULT: "#F8FAFC",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
