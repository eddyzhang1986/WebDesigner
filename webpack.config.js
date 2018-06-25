const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", //"webpack-dev-server/client?http://localhost:9000/",

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  devServer: {
    contentBase: __dirname,
    compress: false,
    port: 9000,
    hot: true,
    open: true
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "MMA Web Designer",
      inject: "body",
      filename: "index.html",
      template: path.resolve(__dirname, "index.html")
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //     names: ["vendor", "manifest"]
    // })
  ],
  //plugins: [new webpack.HotModuleReplacementPlugin()],
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
