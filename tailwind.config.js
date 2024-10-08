/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
    },
    extend: {
      colors: {
        main: "#0aad0a",
        light: "#f0f3f2",
        rating: " #ffc908",
      },
      boxShadow: {
        "me": "rgba(145, 158, 171, 0.2) 0px 2px 4px -1px,rgba(145, 158, 171, 0.14) 0px 4px 5px 0px, rgba(145, 158, 171, 0.12) 0px 1px 10px 0px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
