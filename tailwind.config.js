// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733', // Cor padrão, pode ser removida se não for usada
        secondary: '#C70039', // Cor padrão, pode ser removida se não for usada
      },
    },
  },
  plugins: [],
};
