/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Define light theme colors
        primary: '#1D4ED8', // Example light blue primary color
        secondary: '#FBBF24', // Example yellow secondary color
        background: '#E8D7EA', // White background
        text: '#333333', // Dark text color for good contrast
        muted: '#F3F4F6', // Light gray for muted elements
      },
      // You can also extend other utilities like spacing, typography, etc. if needed
    },
  },
  plugins: [],
}
