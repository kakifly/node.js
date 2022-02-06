// pathモジュールの読み込み
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/client/index.html',
  //template: './src/client/index.tsx',
  filename: './index.html',
});

module.exports = {
  // モードを開発モードにする
  mode: 'development',
  // 入力ファイル設定
  //entry: [path.resolve(__dirname, './src/index.tsx')],
  entry: [path.resolve(__dirname, './src/client/index.tsx')],
  // 出力ファイル設定
  output: {
    // 出力されるファイル名
    filename: 'bundle.js',
    // 出力先ディレクトリ
    path: path.resolve(__dirname, 'dist'),
  },

  // モジュール設定
  module: {
    rules: [
      {
        // ts-loaderの設定
        test: /\.(js|ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
  // モジュール解決
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  // 開発モード設定
  devtool: 'source-map',
  devServer: {
    port: 3000, //ポートを指定
    //host: '192.168.122.94',
    host: '0.0.0.0',
    disableHostCheck: true, //DNSリバイディング攻撃に脆弱になるため推奨しない
    contentBase: './dist', //ドキュメントルート
  },
};
