/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "desktop-big": { max: "1800px" },

        "desktop-lg": { max: "1200px" },
        desktop: { min: "1100px" },
        tablet: { max: "1023px" },
        "tablet-sm": { max: "800px" },
        mobile: { max: "815px" },
        "mobile-md": { max: "500px" },
        "mobile-sm": { max: "375px" },
      },
      colors:{
        'main-color':'rgba(112, 123, 223, 0.733)'
      }
    }
    ,
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}