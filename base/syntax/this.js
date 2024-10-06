
//(1)new演算子による新規オブジェクト
function dump(){console.log('this is', this);}

const obj = new dump();
console.log(obj);
console.log(dump.prototype);

if(obj !== dump.prototype){
  console.log('false');
}

//(2)メソッドして実行された場合.の前のオブジェクト

const foo = {
   name : 'FOO Object'
  ,dump() {
    console.log(this);
  }
}

foo.dump();

//(3)非strictモード：グローバルオブジェクト
function fn(){console.log(this)};
fn();

//(4)strictモード
//(3)のパターンはグローバルオブジェクトへの汚染が簡単に行われる。それを防ぐために
//strictモードを使用する(use strict)
//class を使用した場合は自動的にstrictモードと同じ振る舞いをする
class bar { constructor(){console.log('this is', this)} };
//bar();   error
new bar();



class Person{
  constructor(name){
    this.name = name;
  }

  greet(){
    function doIt(){
      console.log('this is ', this);
    }
    doIt(); // class内はstrictモードであるためthis = undefinedとなる
  }

  greet1(){
    function doIt() {
    console.log(`1) Hi, I'm ${this.name}`);
    }
    const boundDoIt = doIt.bind(this); // 1. 関数にインスタンスのthis を束縛
    boundDoIt();
  }

  greet2(){
    function doIt() {
    console.log(`2) Hi, I'm ${this.name}`);
    }
    doIt.call(this);    // 2. インスタンスのthis を渡して実行
  }

  greet3(){
    const _this = this; //3. 変数thisに移し替える
    function doIt() {
    console.log(`3) Hi, I'm ${_this.name}`);
    }
    doIt();
  }

  greet4(){
    const doIt = () => {
      console.log(`4) Hi, I'm ${this.name}`);
    }
    doIt();
  }
  greet5 = () => {
    const doIt = () => {
      console.log(`5) Hi, I'm ${this.name}`);
    }
    doIt();
  }
}

const per = new Person('hoge');
per.greet();
per.greet1();
per.greet2();
per.greet3();
per.greet4();
per.greet5();