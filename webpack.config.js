const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    'large-number': './src/index.js',
    'large-number.min': './src/index.js',
  },
  output: {
    filename: '[name].js',
    // 导出时使用的包名称
    library: 'largeNumber',
    libraryExport: 'default',
    // 导出的包支持 cjs、amd、cmd、es6 import
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: true,
    minimizer: [
      /** 压缩代码 */
      new TerserPlugin({
        include: /\.min\.js$/
      }),
    ],
  },
}