module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './build/bundle.js',
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /.(c|s[ac])ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};