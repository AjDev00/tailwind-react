/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "trans-left": {
          "0%": { transform: "translateX(200px)" },
          "50%": { transform: "translateX(0)" },
        },
        "trans-right": {
          "0%": { transform: "translateX(-200px)" },
          "50%": { transform: "translatex(0)" },
        },
      },
      animation: {
        "trans-left": "trans-left 1s ease-in",
        "trans-right": "trans-right 1.5s ease-in",
      },
    },
    fontFamily: {
      vibes: ["Great Vibes"],
      kurale: ["Kurale"],
    },
    // fontSize: {
    //   smallest: ["10px"],
    //   smaller: ["12px"],
    //   medium: ["15px"],
    //   small: ["20px"],
    // },
  },
  plugins: [],
};
