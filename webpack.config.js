module.exports = {
  entry: "./app.ts",
  output: {
    filename: "./js/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  }
};