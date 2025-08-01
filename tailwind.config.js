/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5", // Indigo-600
          light: "#6366F1", // Indigo-400
          dark: "#4338CA", // Indigo-700
        },
        secondary: {
          DEFAULT: "#F59E0B", // Amber-500
          light: "#FBBF24", // Amber-400
          dark: "#B45309", // Amber-700
        },
        success: {
          DEFAULT: "#10B981", // Emerald-500
          light: "#34D399", // Emerald-400
          dark: "#047857", // Emerald-700
        },
        warning: {
          DEFAULT: "#FBBF24", // Amber-400
          light: "#FCD34D", // Amber-300
          dark: "#B45309", // Amber-700
        },
        error: {
          DEFAULT: "#EF4444", // Red-500
          light: "#F87171", // Red-400
          dark: "#B91C1C", // Red-700
        },
        background: {
          DEFAULT: "#F9FAFB", // Gray-50
          card: "#FFFFFF",
        },
        text: {
          primary: "#111827", // Gray-900
          secondary: "#6B7280", // Gray-500
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      spacing: {
        18: "4.5rem", // For consistent vertical padding/margins
        22: "5.5rem",
        26: "6.5rem",
      },
      borderRadius: {
        DEFAULT: "0.5rem", // 8px consistent radius
        lg: "0.75rem",
        xl: "1rem",
      },
      boxShadow: {
        card: "0 1px 4px rgba(0, 0, 0, 0.1)",
        button: "0 2px 6px rgba(79, 70, 229, 0.4)", // Indigo shadow
      },
      transitionProperty: {
        DEFAULT:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
