/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        myLightBlue: "#30c9e8",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
