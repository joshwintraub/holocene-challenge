module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  context: __dirname,
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
}
