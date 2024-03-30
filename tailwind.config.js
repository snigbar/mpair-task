/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        right2left: {
          "0%,100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(5%)" },
        },
        left2Right: {
          "0%,100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-5%)" },
        },
        pulse: {
          "0%": { transform: "scale(0)" },
          "25%": { transform: "scale(1.15)" },
          "50%": { transform: "scale(0.8)" },
          "75%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        rToL: "right2left 4s linear infinite",
        ltoR: "left2Right 4s linear infinite",
        onePulse: "pulse 1s linear",
      },
    },
  },
  plugins: [],
};
