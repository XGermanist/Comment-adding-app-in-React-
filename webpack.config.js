const path = require('path');

module.exports =
{
  entry: '.src/index.js',
  output:
  {
    filename: 'build.js',
    path: path.resolve(__dirname, 'bundle')
  },
  module:
  {
    rules:
    [
      {
        test: /\.js$/,
        use:[
              {
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
              }
            ]

      },

    ]
  },


};
