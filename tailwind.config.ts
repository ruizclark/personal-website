import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#f0f7f0",
          100: "#dbeadd",
          200: "#bdd5bf",
          300: "#9bbf9e",
          400: "#7aa47e",
          500: "#5e8c62",
          600: "#537D5D", // Main primary color
          700: "#426348",
          800: "#354f3a",
          900: "#2d4231",
          950: "#172318",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#f3f7f1",
          100: "#e4ebe0",
          200: "#ccd9c6",
          300: "#adc1a5",
          400: "#8ba680",
          500: "#73946B", // Main secondary color
          600: "#5d7855",
          700: "#4b6045",
          800: "#3e4e39",
          900: "#344231",
          950: "#1a231a",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "#f5f9f2",
          100: "#e9f1e3",
          200: "#d4e3ca",
          300: "#b9d1aa",
          400: "#9EBC8A", // Main accent color
          500: "#85a46c",
          600: "#6b8a54",
          700: "#556e44",
          800: "#455839",
          900: "#3a4a31",
          950: "#1d271a",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        beige: {
          DEFAULT: "#D2D0A0",
          50: "#fbfaf2",
          100: "#f6f4e1",
          200: "#ece9c3",
          300: "#D2D0A0", // Main beige color
          400: "#c5c17f",
          500: "#b5af63",
          600: "#9a9152",
          700: "#7c7445",
          800: "#665f3c",
          900: "#554f35",
          950: "#302c1c",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
