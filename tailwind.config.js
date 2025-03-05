module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Soft blue
        secondary: '#4b5563', // Neutral gray
        background: '#f9fafb', // Light gray
        text: {
          primary: '#1f2937', // Dark gray
          secondary: '#4b5563', // Medium gray
        },
        accent: '#f59e0b', // Soft amber
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};