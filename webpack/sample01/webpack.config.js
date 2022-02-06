const path = require('path');  //path モジュールの読み込み

module.exports = {
  entry: './src/index.js',  //エントリポイント（デフォルトと同じ設定）
  output: {  //出力先（デフォルトと同じ設定）
    filename: 'main.js',
    //filename: '[name].js',  エントリポイントのファイル名になる ※entryが複数がる場合に使用する
    //filename: '[hash].js'   [hash]ハッシュが入る
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',  //モード
};