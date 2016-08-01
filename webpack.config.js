var path = require('path');

module.exports = {
  entry: {
    create_ticket: './src/create_ticket_app.js',
    search_grid: './src/search_grid_app.js',
    success_message: './src/success_message_app.js'
  },
  output: {
    path: path.join(__dirname, 'js'),
    filename: "[name].bundle.js"
  },
  //devtool: 'cheap-module-source-map',
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  }
};
