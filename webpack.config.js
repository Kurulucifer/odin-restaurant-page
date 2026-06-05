import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
        { // also handles CSS images in url()
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        { // for references stored in the HTML template
          test: /\.html$/i,
          use: ["html-loader"], 
        },
        { // for images used in the JavaScript; also need to default import the image in the JS
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        { // for fonts
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
    ],
  },
};
