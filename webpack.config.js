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
        test: /(\.jsx?$ | \.css$)/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  }
}
