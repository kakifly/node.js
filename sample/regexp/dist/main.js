"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var localstorage_ponyfill_1 = require("localstorage-ponyfill");
//クラスを定義するとInterfaceも定義したことになる
var ErrInfo = /** @class */ (function () {
    function ErrInfo() {
        this.errMsg = '';
    }
    return ErrInfo;
}());
var D_Userid = /** @class */ (function () {
    function D_Userid() {
        this.length = 4;
        this.allowchars = '012345';
    }
    D_Userid.prototype.Fmt = function (validatedstr) {
        //4桁0埋め
        return ('0000' + validatedstr).slice(-1 * this.length);
    };
    D_Userid.prototype.Chk = function (str, errInfo) {
        var reg = new RegExp('[^' + this.allowchars + ']', 'g');
        if (str.match(reg)) {
            //NG
            errInfo.errMsg = 'error!';
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
try {
    var localStorage_1 = (0, localstorage_ponyfill_1.createLocalStorage)();
    localStorage_1.setItem("key", "keyhoge");
    localStorage_1.setItem("key2", "keyhoge2");
    var value = localStorage_1.getItem("key");
    console.log(value);
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
    str = '2159';
    var d_u = new D_Userid();
    var errInfo = new ErrInfo();
    if (d_u.Chk(str, errInfo) == false) {
        //NG
        console.log(errInfo.errMsg);
        console.log('ng');
        //process.exit(1);
        //prcess.exit(1);
        throw new Error('終了');
    }
    console.log('ok');
    console.log('\n');
}
catch (e) {
    //exit の代わりにExceptionを使用する
    console.log(e.message);
}
//# sourceMappingURL=main.js.map