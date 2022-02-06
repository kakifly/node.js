//ファイル1行ずつ読み込み
import * as readline from 'readline';
import * as fs from 'fs';

interface objstr{
  str : string;
};

const main = async () => {
    console.log('----- start ------');
    await readFile();
    console.log('----- end -----');

    //JavaScriptで呼び出し先のメソッドで引数の内容を更新したい場合はオブジェクト型を渡す必要がある
    let objstr : objstr= {str:'xyz'};
    console.log('1.piyo:' + objstr.str);
    test(objstr);
    console.log('2.piyo:' + objstr.str);

    //let hoge ='ｱｲｳ｡「」abcあいう𠮟';
    let hoge ='｡a「あいう」𠮟';;
    let foo : string = "";
    for(let i:number = 0; i <= hoge.length- 1; i++){
      console.log('\\u' + ('0000' + hoge[i].charCodeAt(0).toString(16)).slice(-4));
      foo += '\\u' + ('0000' + hoge[i].charCodeAt(0).toString(16)).slice(-4);
    }


    let objstr2 : objstr = {str:''};
    if(chkStrLen(hoge, 10, objstr2) === false){
      console.log('chk ng:' + objstr2.str);
    };

    //let foo = '\\u0061';
    let  len : number = 0;
    //let flg : boolean = false;
    for (let i : number = 0; i < foo.length; i++) {
      if (foo[i] === '\\') {
          console.log(foo.substr(i + 2, 4));
          if(foo.substr(i + 2, 4) >= "0000" && foo.substr(i + 2 , 4) <= "007f"){
            len++;
          }else if(foo.substr(i + 2, 4) >= "ff61" && foo.substr(i + 2 , 4) <= "ff9f"){
            len++;
          }else{
            len += 2;
          }
          i += 5;
      }
    }
    console.log('len:' + len);


    let result = unicodeUnescape('\\u0061\\u3042\\u3044\\u3046\\u3048\\u304a\\ud842\\udf9f');
    console.log(result);
}


const chkStrLen = (chkStr:string, chkLen:number, refStr:objstr) : Boolean => {

  let utf16Str:string = '';
  let wrStr:string = '';
  let len:number = 0;

  for(let i:number = 0; i <= chkStr.length - 1; i++){
    utf16Str += '\\u' + ('0000' + chkStr[i].charCodeAt(0).toString(16)).slice(-4);
  }

  for (let i:number = 0; i < utf16Str.length; i++) {
    if (utf16Str[i] === '\\') {
        if(utf16Str.substr(i + 2, 4) >= "0000" && utf16Str.substr(i + 2 , 4) <= "007f"){
          len++;
        }else if(utf16Str.substr(i + 2, 4) >= "ff61" && utf16Str.substr(i + 2 , 4) <= "ff9f"){
          len++;
        }else{
          len += 2;
        }

        if(len <= chkLen){
          //console.log(utf16Str.substr(i, 6));
          wrStr += unicodeUnescape(utf16Str.substr(i, 6));
        }

        i += 5;
    }
  }

  if(len > chkLen){
    //ng
    console.log(wrStr);
    refStr.str = 'abc';
    //refStr.str = wrStr;
    return false;
  }
  //ok
  return true;
};







const readFile = () : Promise<void> => {
    let filePath = './test.txt';
    let stream = fs.createReadStream(filePath, 'utf8');
    let reader = readline.createInterface({input: stream});

    return new Promise((resolve, reject) =>{
          reader.on('line', (line) => {
              console.log(line + ":" + charCount(line));
          })
          .on('close', () => {
              console.log('read end');
              resolve();
          });
    });
};



const unicodeUnescape = (str) => {
    let result = '';
    let strs = str.match(/\\u.{4}/ig);
    if (!strs) return '';
    for (var i = 0, len = strs.length; i < len; i++) {
        result += String.fromCharCode(strs[i].replace('\\u', '0x'));
    }


    return result;
};

const test = (objStr:objstr) => {
    objStr.str = 'abc';
};


//let ait = reader[Symbol.asyncIterator]();
//(await ait.next()).value)


//reader.on('line', (data) => {
//    console.log(data + ":" + charCount(data));
//});

//const fileRead = (stream) : Promise<void > => {
//  return new Promise((resolve, reject) =>{
//      reader.on('line', (line) => {
//          console.log(line + ":" + charCount(line));
//      })
//      .on('close', () => {
//          console.log('read end');
//      });
//  });
//};


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

main();