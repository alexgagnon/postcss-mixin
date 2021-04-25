module.exports = {
  plugins: [
    require("postcss-mixins"),
    require("postcss-preset-env")({
      stage: 1,
    }),
  ]
}
