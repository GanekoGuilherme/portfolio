module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "669px" },
        fhd: { min: "1700px" },
      },
      colors: {
        primary: "#020438",
        secondary: "#284184",
        accent: "#00EAFF",
        warning: "#FF5C00",
        error: "#D8000C",
        success: "#4BB543",
      },
    },
  },
  plugins: [],
};
