module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./src/template.html', './src/**/*.svelte'],
  },
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