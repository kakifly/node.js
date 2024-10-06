const foo = 'dummy';
const bar = 'key';
const baz = 1024;
const obj1 = {
  foo: 4,
  'foo': 8,             //'は省略されるため前の変数が上書きされる
  '<fuu>': 16,
  [bar]: 128,           //[]で囲むと変数の値が展開される
  [`_${bar}2`]: 256,
  baz: baz / 2,
  };
console.log(obj1); // { foo: 8, '<fuu>': 16, key: 128, _key2: 256, baz: 512 }

//==================================================
// ショートハンド(変数を、プロパティ名、変数の形式で代入)
//==================================================
const obj2 = { baz };
console.log(obj2); // { baz: 1024 }

//==================================================
//分割代入(Destructuring Assignment)
//==================================================
const [a, b] = ['foo', 'bar'];
console.log(a, b); // foo bar
const [, n] = [1, 4];
console.log(n); // 4
const [, , i, , j, , , k] = [1, 2, 3, 4, 5, 6, 7];
console.log(i, j, k); // 3 5 undefined
const profile = { name: 'Kanae', age: 24, gender: 'f' };
const { name, age } = profile;
console.log(name, age); // Kanae 24

const response = {
data: [
  {
    id: 1,
    name: 'Patty Rabbit',
    email: 'patty@maple.town',
  },
  {
    id: 2,
    name: 'Rolley Cocker',
    email: 'rolley@palm.town',
  },
  {
    id: 3,
    name: 'Bobby Bear',
    email: 'bobby@maple.town',
  },
]};
const { data: users = [] } = response;
console.log(users);
// [
// { id: 1, name: 'Patty Rabbit', email: 'patty@maple.town'   },
// { id: 2, name: 'Rolley Cocker', email: 'rolley@palm.town'  },
// { id: 3, name: 'Bobby Bear', email: 'bobby@maple.town'     },
// ]

//==================================================
//分割代入(Spread Syntax)
//==================================================
const arr1 = ['a', 'b', 'c'];
const arr2 = [...arr1, 'd', 'e'];
const arr3 = ['Y', 'Z', ...arr2];
console.log(arr2); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(arr3); // [ 'Y', 'Z', 'a', 'b', 'c', 'd', 'e' ]
const obj3 = { a: 1, b: 2, c: 3, d: 4 };
const obj4 = { ...obj1, d: 99, e: 5 };
console.log(obj2); // { a: 1, b: 2, c: 3, d: 99, e: 5 }


const user = {
  id: 1,
  name: 'Patty Rabbit',
  email: 'patty@maple.town',
  age: 8,
};
const { id, ...userWithoutId } = user;
console.log(id, userWithoutId);
// 1 { name: 'Patty Rabbit', email: 'patty@maple.town', age: 8 }

//==================================================
//オブジェクトのコピー
//==================================================
//assingは破壊的コピーなのでプロパティを追加してコピーするとoriginalの内容も変更される
const original  = { a: 1, b: 2, c: 3 };
const copy      = Object.assign({}, original);
console.log(copy);                // { a: 1, b: 2, c: 3 }
console.log(copy === original);   // false → 値が同じでもアドレスを共有しない別オブジェクト

//シャロコピー(Shallow Copy)
//注意点　オブジェクトの深さが1まで、かつオブジェクトの場合は参照コピーとなる
const original2 = { a: 1, b: 2, c: 3 };
const copy2 = { ...original2 };
console.log(copy2); // { a: 1, b: 2, c: 3 }
console.log(copy2 === original2); // false
const assigned = { ...original2, ...{ c: 10, d: 50 }, d: 100 };
console.log(assigned); // { a: 1, b: 2, c: 10, d: 100 }
console.log(original); // { a: 1, b: 2, c: 3 }

//それ以外の場合はcloneDeepやrfdc等を使用する