const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['inter v'],
    },
    colors: {
      'brand-notice': '#ffcc75',
      brand: '#2a2b6a',
      primary: '#2a2b6a',
      'brand-500-gray': '#f9fafb',
      'brand-200-gray': '#fafafa',
      'brand-gray-150': '#f9f9f9',
      'brand-gray-250': '#f4f4f4',
      'brand-primary-text': '#333333',
      'product-border': '#f4f4f4',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
