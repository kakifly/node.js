//let abc : string = 'あいabうえcdeおfgｱｲｳｴｵ';
var abc = 'aaa090-9999-9999あい';
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
//----------------------------------------
//  正規表現
//----------------------------------------
var test = "efg";
var hoge = "abcdefg";
var reg = new RegExp(test);
if (hoge.match(reg)) {
    console.log('match!');
}
;
