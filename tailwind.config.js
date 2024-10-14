/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Configura Poppins aquí
        montserrat: ['Montserrat', 'sans-serif'], // Configura Montserrat aquí
      },
      colors: {
        primary: '#1D4ED8', // Un azul profundo
        secondary: '#9333EA', // Un morado
        accent: '#FBBF24', // Un amarillo
        background: '#f9f5ee', // Un gris claro
        text: '#ba725f',
        textAux: '#808174',
        prices: '#637052',


      },
    },
  },
  plugins: [],
}