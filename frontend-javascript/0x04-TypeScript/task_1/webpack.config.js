module.exports = {
  entry: './js/main.ts',  // ✅ Ensure this points to main.ts
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',  // ✅ Ensure dist folder is correct
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
