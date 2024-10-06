//function sum(x: number, y: number, z : number) {
//  return x + y + z;
//}
//
//const hoge = () => {
//  const m = new Map<number, number>();
//  return (index:number) => (){
//    m.set(index, sum(index, index, index));
//  }
//  ,(index: number){
//    console.log(index: number);
//  }
//}

//const numbers = [1, 2, 3];

//console.log(sum(...numbers));
//console.log(...hoge(2));


// Expected output: 6



function memoize(func : Function) {
  const cache : {[key: string]: string } = {};
  return function(...args : any[]){
    const argStr : string = JSON.stringify(args);
    if(cache[argStr]){
      return cache[argStr];
    }
    const result = func(...args);
    cache[argStr] = result;
    return result;
  }
}

const slowFunction = (x:number) => {
  // 何か時間のかかる処理
  return (x * 2).toString();
}

const memoizedSlowFunction = memoize(slowFunction)

console.log(memoizedSlowFunction(10));




//console.log(sum.apply(null, numbers));
// Expected output: 6