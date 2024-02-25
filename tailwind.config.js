/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1400px",
    },
    colors: {
      "dark-slate-gray": "#1f363d", // Texts, Headings, Footer backgrounds, Navigation bar background etc
      "cadet-blue": "#40798c", // Secondary Color - Secondary buttons, links or highlighted text, icons,
      "pastel-green": "#70a9a1", // Background color for information boxes, testimonials, quotes
      "eton-blue": "#9ec1a3", // CTA, promotional badges etc
      "tea-green": "#cfe0c3", // Website background
      "white": "#ffffff" // Since i am not getting white
    },
    fontFamily: {
      Lato: ["Lato", "sans-serif"], // Lato - Body text, descriptions, sub-headings etc
      Poppins: ["Poppins", "sans-serif"], // Poppins - Heading, CTA, NavBar etc
      Merriweather: ["Merriweather", "serif"], // Educational content, blog, article, fashion guide basically longer reads.
      Poiret: ["Poiret One", "sans-serif"]

    },
    extend: {},
  },
  plugins: [],
};
