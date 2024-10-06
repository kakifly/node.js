//ブラウザはlocalStorage node.jsはnode-localstorage
import { createLocalStorage } from "localstorage-ponyfill";



//クラスを定義するとInterfaceも定義したことになる
class ErrInfo {
  errMsg : string = '';
}

class D_Userid implements IDomain {
  readonly length     : number = 4;
  readonly allowchars : string = '012345';

  Fmt(validatedstr: string) : string {
    //4桁0埋め
    return ('0000' + validatedstr).slice(-1 * this.length);
  }

  Chk(str: string, errInfo: ErrInfo) : boolean {
    let reg = new RegExp('[^' + this.allowchars + ']', 'g');
    if(str.match(reg)){
      //NG
      errInfo.errMsg = 'error!';
      return false;
    }
    //OK
    return true;
  }
};


interface IDomain {
  readonly length    : number;
  readonly allowchars : string;

  /**
   * format
  */
  Fmt(validatedStr : string) : string;

  /**
   * check
   */
  Chk(str : string, errInfo: ErrInfo) : boolean;

};



//let abc : string = 'あいabうえcdeおfgｱｲｳｴｵ';
let abc : string = 'aaa090-9999-9999あい';
//let abc : string = 'a';

//abc = abc.replace(/[^\x61-\x62]/g, '');
//abc = abc.replace(/[^\x01-\x7E\uFF65-\uFF9F]/g, '');

//ascii 以外を削除
//abc = abc.replace(/[^\x01-\x7E]]/g, '');
//abc = abc.replace(new RegExp('[^\x01-\x7E]', 'g'), '');

//特定の文字列以外を削除
abc = abc.replace(new RegExp('[^0-9-]', 'g'), '');

console.log('hello main.js');
console.log('str:' + abc);

try {

 const localStorage = createLocalStorage();
 localStorage.setItem("key", "keyhoge");
 localStorage.setItem("key2", "keyhoge2");
 let value = localStorage.getItem("key");
 console.log(value);


  //----------------------------------------
  //  正規表現
  //----------------------------------------
  console.log('正規表現');
  let str = "efg";
  let hoge = "abcdefg";
  let reg = new RegExp(str);
  if(hoge.match(reg)){
    console.log('match!');
  };
  console.log('\n');

  //----------------------------------------
  //  正規表現
  //----------------------------------------
  console.log('正規表現(domain)');

  str = '2159';

  let d_u = new D_Userid();
  let errInfo = new ErrInfo();

  if(d_u.Chk(str, errInfo) == false){
    //NG
    console.log(errInfo.errMsg);
    console.log('ng');
    //process.exit(1);
    //prcess.exit(1);
    throw new Error('終了');
  }

  console.log('ok');
  console.log('\n');
}catch(e){
  //exit の代わりにExceptionを使用する
  console.log(e.message);
}