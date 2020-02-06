module.exports = {
  entry: ['babel-polyfill', './src/main.js'],
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  }
}
