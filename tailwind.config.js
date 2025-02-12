module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideUp: "slideUp 1s ease-out",
        bounceOnce: "bounceOnce 0.6s ease-in-out",
        glow: "glow 1.5s infinite alternate",
        float: "float 3s ease-in-out infinite",
      },
      
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(20px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        bounceOnce: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00f6ff, 0 0 10px #00f6ff" },
          "50%": { boxShadow: "0 0 15px #00f6ff, 0 0 30px #00f6ff" },
          "100%": { boxShadow: "0 0 5px #00f6ff, 0 0 10px #00f6ff" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
  
};
