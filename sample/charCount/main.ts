
const charCount = (str : string) : Number => {
  let len = 0;
  //特定の文字を16進数のエスケープシーケンスで置き換えた新しい文字列に置き換える
  str = escape(str);

  for (let i : number = 0; i < str.length; i++,len++) {
    if (str.charAt(i) == '%') {
      //UTF16フォーマットされた文字列(%uFFFF)の1文字目
      if (str.charAt(++i) == 'u') {
        //UTF16フォーマットされた文字列(%uFFFF)の2文字目
        i += 3;
        len++;
      }
      i++;
    }
  }
  return len;
};

let len : Number = 0;
//javascript は内部では文字コードにUTF-16を使用している
len = charCount('あいうえお');
console.log('len:' + len);