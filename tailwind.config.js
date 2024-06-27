/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        color: {
          1: "#AC6AFF", // Purple
          2: "#FFC876", // Light Orange
          3: "#FF776F", // Red
          4: "#7ADB78", // Green
          5: "#858DFF", // Blue
          6: "#FF98E2", // Pink
        },
        stroke: {
          1: "#26242C", // Dark Grey for stroke
        },
        light: {
          bg: "#FFFFFF", // Light theme background
          text: "#000000", // Light theme text
          border: "#E5E7EB", // Light theme border
          n1: "#F9FAFB", // Light Grey (Near-white)
          n2: "#E5E7EB", // Light Grey
          n3: "#D1D5DB", // Grey
          n4: "#9CA3AF", // Medium Grey
          n5: "#6B7280", // Dark Grey
          n6: "#4B5563", // Darker Grey
          n7: "#374151", // Very Dark Grey
          n8: "#1F2937", // Almost Black
          hoverText: "#FFFFFF", // Text color on hover in light mode
        },
        dark: {
          bg: "#0E0C15", // Dark theme background
          text: "#FFFFFF", // Dark theme text
          border: "#252134", // Dark theme border
          n1: "#FFFFFF", // White
          n2: "#CAC6DD", // Light Grey (Dark theme)
          n3: "#ADA8C3", // Grey (Dark theme)
          n4: "#757185", // Medium Grey (Dark theme)
          n5: "#3F3A52", // Dark Grey (Dark theme)
          n6: "#252134", // Darker Grey (Dark theme)
          n7: "#15131D", // Very Dark Grey (Dark theme)
          n8: "#0E0C15", // Almost Black (Dark theme)
          hoverText: "#0E0C15", // Text color on hover in dark mode
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["var(--font-sora)", ...fontFamily.sans], // Sora font for sans
        code: "var(--font-code)", // Code font
        grotesk: "var(--font-grotesk)", // Grotesk font
      },
      letterSpacing: {
        tagline: ".15em", // Letter spacing for taglines
      },
      spacing: {
        0.25: "0.0625rem", // 1/16 rem spacing
        7.5: "1.875rem", // 1.875 rem spacing
        15: "3.75rem", // 3.75 rem spacing
      },
      opacity: {
        15: ".15", // 15% opacity
      },
      transitionDuration: {
        DEFAULT: "200ms", // Default transition duration
      },
      transitionTimingFunction: {
        DEFAULT: "linear", // Default transition timing function
      },
      zIndex: {
        1: "1", // zIndex 1
        2: "2", // zIndex 2
        3: "3", // zIndex 3
        4: "4", // zIndex 4
        5: "5", // zIndex 5
      },
      borderWidth: {
        DEFAULT: "0.0625rem", // Default border width
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))", // Radial gradient
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)", // Conic gradient
        "light-gradient": "linear-gradient(to right, #f0f4c3, #f3e5f5)", // Light linear gradient
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]": {}, // Container with different max-widths and padding
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]": {}, // Heading 1 styles
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight": {}, // Heading 2 styles
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {}, // Heading 3 styles
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {}, // Heading 4 styles
        },
        ".h5": {
          "@apply text-2xl leading-normal": {}, // Heading 5 styles
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {}, // Heading 6 styles
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8": {}, // Body text 1 styles
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {}, // Body text 2 styles
        },
        ".caption": {
          "@apply text-sm": {}, // Caption text styles
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase": {}, // Tagline text styles
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {}, // Quote text styles
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {}, // Button text styles
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", // Utility to remove tap highlight color
        },
      });
    }),
  ],
};
