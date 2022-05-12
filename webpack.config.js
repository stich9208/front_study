var path = require("path");
module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  //   module: {
  //     loaders: [
  //       {
  //         test: path.join(__dirname, "es6"),
  //         loader: "babel-loader",
  //         query: {
  //           presets: ["es2015"],
  //         },
  //       },
  //     ],
  //   },
};
