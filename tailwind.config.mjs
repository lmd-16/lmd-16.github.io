const daisyui = require('daisyui');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'cupcake', 'aqua'],
  },
  
};
