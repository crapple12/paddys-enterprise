// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: {
    index: "./src/pages/home/index.js",
    products: "./src/pages/products/products.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(import.meta.dirname, "dist"),
    publicPath: "./",
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/pages/home/template.html", "./src/pages/products/products.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/home/template.html",
      filename: "index.html",
      chunks: ["index", "shared"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/products/products.html",
      filename: "products.html",
      chunks: ["products", "shared"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
