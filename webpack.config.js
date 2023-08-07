const path = require("path");

module.exports = {
  entry: "./src/my-button.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-webcomponent.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
          "ts-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
