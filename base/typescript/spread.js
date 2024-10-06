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
function memoize(func) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var argStr = JSON.stringify(args);
        if (cache[argStr]) {
            return cache[argStr];
        }
        var result = func.apply(void 0, args);
        cache[argStr] = result;
        return result;
    };
}
var slowFunction = function (x) {
    // 何か時間のかかる処理
    return (x * 2).toString();
};
var memoizedSlowFunction = memoize(slowFunction);
console.log(memoizedSlowFunction(10));
//console.log(sum.apply(null, numbers));
// Expected output: 6
