/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cats: "url(./assets/banner.jpg)",
      },

      colors: {
        primary: "#28effa",
        overlay: "rgba(0, 0, 0, 0.60);",
        secondary: "#000",
        common: "#6C6C6C",
        darkgray: "rgb(22, 22, 22)",
      },
      fontFamily: {
        pops: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        Monte: ["Montserrat Alternates", "sans-serif"],
        Rem: ["Rem", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
        works: ["Work Sans", "sans-serif"],
        Roboto: ["ROBOTO", "sans-serif"],
        
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
    },
  },
  plugins: [require("daisyui")],
};
