const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  devServer: {
    open: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/dev": {
        target: "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com",
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};
