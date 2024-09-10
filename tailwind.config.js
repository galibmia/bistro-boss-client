/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-brown-start': '#835D23',
        'custom-brown-end': '#B58130',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #835D23 0%, #B58130 100%)',
      },
      letterSpacing: {
        'custom': '9.12px',
      },
      borderRadius: {
        'custom': '0px 200px 200px 200px'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}
