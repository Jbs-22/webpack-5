const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "index.html",
    title: "React Stater Template",
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
} else {
  plugins.push(new ReactRefreshPlugin());
}

module.exports = {
  mode: mode,
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
    static: "./dist",
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        type: "asset",
      },
    ],
  },
  plugins: plugins,
};
