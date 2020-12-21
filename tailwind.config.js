const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
