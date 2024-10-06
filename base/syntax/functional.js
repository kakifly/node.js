//Array.map
//第一引数:Arrayの各要素
//第二引数:要素数
// end - start 数のundefinedオブジェクトを作成し
const range = (start, end) => [...Array(end - start + 1)].map((_, n) => n + start);
//console.log(range(1,100));
const octuples = range(1, 100).filter((n) => n % 8 === 0);
console.log(octuples);
