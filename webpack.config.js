module.exports = {
  entry: './js/app.js',
  // devtool: 'inline-source-map',
  // resolve: {
  //   extensions: [ '.tsx', '.ts', '.js' ]
  // },
  // module: {
  //   rules: [
  //     { test: /\.css$/, use: 'css-loader' },
  //     { test: /\.ts$/, use: 'ts-loader' }
  //   ]
  // },
  // output: {
  //   filename: 'bundle.js'
  // },
  devServer: {
    inline: false
  }
};
