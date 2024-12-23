/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      Ubuntu: ["Ubuntu"],
    },
    screens: {
      'tablet': '600px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        Primary: {
          Marineblue: "hsl(213, 96%, 18%)",
          Purplishblue: "hsl(243, 100%, 62%)",
          Pastelblue: "hsl(228, 100%, 84%)",
          Lightblue: "hsl(206, 94%, 87%)",
          Strawberryred: "hsl(354, 84%, 57%)",
        },
        Neutral: {
          Coolgray: "hsl(231, 11%, 63%)",
          Lightgray: "hsl(229, 24%, 87%)",
          Magnolia: "hsl(217, 100%, 97%)",
          Alabaster: "hsl(231, 100%, 99%)",
          White: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
