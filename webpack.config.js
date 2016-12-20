module.exports = {
<<<<<<< HEAD
  entry: "./app",
  output: {
    filename: "bundle.js"
=======
  entry: "./app.ts",
  output: {
    filename: "./js/bundle.js"
>>>>>>> c1aa9e77063a6ce6e0ac8cef3c7425f52cff483b
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: "ts-loader" }
    ]
<<<<<<< HEAD
  },
  resolve: {
    extensions: ["", ".ts", ".js"]
  }  
=======
  }
>>>>>>> c1aa9e77063a6ce6e0ac8cef3c7425f52cff483b
};