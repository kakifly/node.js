// import 文を使って foo.js の関数 greet をインポート
import text from './modules/foo.js';

function component() {
  //div 要素を生成
  const element = document.createElement('div');

  // インポートした greet の実行結果を使って div 要素の HTML を作成
  element.innerHTML = '<p>' + text + '</p>';

  return element;
}

document.body.appendChild(component());