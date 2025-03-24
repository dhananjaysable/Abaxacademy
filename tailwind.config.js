/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#FEA12F', // Orange color from ABAX
          'secondary': '#222222', // Dark color from ABAX
        },
      },
    },
    plugins: [],
  }