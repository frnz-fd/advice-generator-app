/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-linear': 'radial-gradient(40.24% 30.29% at 40.73% 15.11%, #171E28 0%, #252932 23%, #1E252F 50%, #1A212B 77%, #171E28 100%)',
      },
      colors: {
        LightCyan: 'hsl(193, 38%, 86%)',
        NeonGreen: 'hsl(150, 100%, 66%)',
        GrayishBlue: 'hsl(217, 19%, 38%)',
        DarkGrayishBlue: 'hsl(217, 19%, 24%)',
        DarkBlue: 'hsl(218, 23%, 16%)',

      },
    },
  },
  plugins: [],
}