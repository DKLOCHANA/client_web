import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textBlue: "var(--text-blue)",
        bgCream: "var(--bg-cream)",
      },
      // animation: {
      //   float: "float 6s ease-in-out infinite",
      //   "float-slow": "float 8s ease-in-out infinite",
      // },
      animation: {
        floating: "floating 3s ease-in-out infinite",
        floating1: "floating 4s ease-in-out infinite",
        floating2: "floating 5s ease-in-out infinite",
        floating3: "floating 3s ease-in-out infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        ping: {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
      },
    },
    // screens: {
    //   sm: "375px",
    //   md: "768px",
    //   lg: "1200px",
    // },
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     md: "2rem",
    //     lg: "4rem",
    //   },
    // },
  },
  plugins: [],
} satisfies Config;

// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: "1rem",
//         md: "2rem",
//         lg: "4rem",
//       },
//     },
//     fontFamily: {
//       sans: ["var(--font-inter)", "sans-serif"],
//     },
//     screens: {
//       sm: "375px",
//       md: "768px",
//       lg: "1200px",
//     },
//   },
//   plugins: [],
// };
// export default config;
