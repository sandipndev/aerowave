module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        "minus-1": "-1",
      },
      filter: {
        "grayscale-80": "grayscale(80%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-filters")],
};
