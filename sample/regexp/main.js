var D_Userid = /** @class */ (function () {
    function D_Userid() {
        this.length = 4;
        this.allowchars = '012345';
    }
    D_Userid.prototype.Fmt = function (validatedstr) {
        //4桁0埋め
        return ('0000' + validatedstr).slice(-1 * this.length);
    };
    D_Userid.prototype.Chk = function (str, refErrMsg) {
        var reg = new RegExp('[' + this.allowchars + ']');
        if (str.match(reg).length == 0) {
            //NG
            refErrMsg = 'error!';
            return false;
        }
        //OK
        return true;
    };
    return D_Userid;
}());
;
;
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
console.log('正規表現');
var str = "efg";
var hoge = "abcdefg";
var reg = new RegExp(str);
if (hoge.match(reg)) {
    console.log('match!');
}
;
console.log('\n');
//----------------------------------------
//  正規表現
//----------------------------------------
console.log('正規表現(domain)');
str = '21aaa9';
var d_u = new D_Userid();
var errMsg;
if (d_u.Chk(str, errMsg) == false) {
    //NG
    console.log(errMsg);
    //process.exit(1);
}
console.log('ok');
console.log('\n');
