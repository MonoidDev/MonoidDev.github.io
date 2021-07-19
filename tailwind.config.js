module.exports = {
  purge: ['./src/template.html', './src/**/*.svelte'],
  variants: {},
  theme: {
    extend: {}
  },
  plugins: [],
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
}