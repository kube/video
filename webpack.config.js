
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const { join } = require('path')
const HtmlWebpack = require('html-webpack-plugin')

const paths = {
  source: join(__dirname, 'src'),
  build: join(__dirname, 'build')
}

module.exports = {
  entry: join(paths.source, 'index.ts'),
  devtool: 'source-map',

  output: {
    path: paths.build,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.mp4$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpack({
      title: 'Hello Teads',
      template: join(__dirname, 'index.html')
    })
  ]
}
