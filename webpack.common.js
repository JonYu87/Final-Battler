const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const outputDir = "./dist";

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), 
  output: {
    path: path.join(__dirname, outputDir),
    filename: "[name].js",
    publicPath: "/dist/",
    chunkLoading: false,
    wasmLoading: false,
  },
  resolve: {
    extensions: [".js"], 
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-optional-chaining"],
            exclude: /node_modules/,
          }, 
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
           
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "images/",
            },
          },
        ],
      },
      {
        test: /\.s[ca]ss/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
          
              publicPath: "../",
            },
          },
          "css-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader", 
            options: {
              implementation: require('sass')
            }
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
    
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false, 
    }),
    require("autoprefixer"),
  ],
};