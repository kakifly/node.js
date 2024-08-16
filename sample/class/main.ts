
class item {
  private _price : number;
  readonly ro : number;

  constructor(price : number){
    this._price = price;
    this.ro = 123 * 123;  //constructorでは設定可能
  }

  //setter  ※es5以降
  set price(value : number){
    this._price = value;
  }

  //getter  ※es5以降
  get price() :number{
    return this._price;
  }
}


let hoge : item = new item(100);
console.log(hoge.price);

hoge.price = 500;
console.log(hoge.price);

console.log(hoge.ro);
