module.exports = {
  plugins: {
    '@unocss/postcss': {
      content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}']
    }
  }
}
