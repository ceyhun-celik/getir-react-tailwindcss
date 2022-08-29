module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.js',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '0.1': '0.063rem'
      },
      backgroundImage: theme => ({
        'mobile-app': 'url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)'
      }),
      colors: {
        'brand-color': '#4C3398',
        'primary-brand-color': '#5D3EBC',
        'secondary-brand-color': '#7849F7',
        'brand-yellow': '#FFD300'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
