const path = require('path');  //path モジュールの読み込み
const { webpack } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  //エントリポイント（デフォルトと同じ設定）
  output: {  //出力先（デフォルトと同じ設定）
    filename: 'main.js',
    //filename: '[name].js',  エントリポイントのファイル名になる ※entryが複数がる場合に使用する
    //filename: '[hash].js'   [hash]ハッシュが入る
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',  //モード
  // ローダーの設定を追加
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
        //use[]で複数のloaderを定義できる。最後に指定したものから適用される
      }
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'Plugin generate page',
      template: 'src/root.html'
    })
  ]
  //plugins: [new HtmlWebpackPlugin()],
};