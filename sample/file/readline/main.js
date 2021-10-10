"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//ファイル1行ずつ読み込み
var readline = __importStar(require("readline"));
var fs = __importStar(require("fs"));
;
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var objstr, hoge, foo, i, objstr2, len, i, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('----- start ------');
                return [4 /*yield*/, readFile()];
            case 1:
                _a.sent();
                console.log('----- end -----');
                objstr = { str: 'xyz' };
                console.log('1.piyo:' + objstr.str);
                test(objstr);
                console.log('2.piyo:' + objstr.str);
                hoge = '｡a「あいう」𠮟';
                ;
                foo = "";
                for (i = 0; i <= hoge.length - 1; i++) {
                    console.log('\\u' + ('0000' + hoge[i].charCodeAt(0).toString(16)).slice(-4));
                    foo += '\\u' + ('0000' + hoge[i].charCodeAt(0).toString(16)).slice(-4);
                }
                objstr2 = { str: '' };
                if (chkStrLen(hoge, 10, objstr2) === false) {
                    console.log('chk ng:' + objstr2.str);
                }
                ;
                len = 0;
                //let flg : boolean = false;
                for (i = 0; i < foo.length; i++) {
                    if (foo[i] === '\\') {
                        console.log(foo.substr(i + 2, 4));
                        if (foo.substr(i + 2, 4) >= "0000" && foo.substr(i + 2, 4) <= "007f") {
                            len++;
                        }
                        else if (foo.substr(i + 2, 4) >= "ff61" && foo.substr(i + 2, 4) <= "ff9f") {
                            len++;
                        }
                        else {
                            len += 2;
                        }
                        i += 5;
                    }
                }
                console.log('len:' + len);
                result = unicodeUnescape('\\u0061\\u3042\\u3044\\u3046\\u3048\\u304a\\ud842\\udf9f');
                console.log(result);
                return [2 /*return*/];
        }
    });
}); };
var chkStrLen = function (chkStr, chkLen, refStr) {
    var utf16Str = '';
    var wrStr = '';
    var len = 0;
    for (var i = 0; i <= chkStr.length - 1; i++) {
        utf16Str += '\\u' + ('0000' + chkStr[i].charCodeAt(0).toString(16)).slice(-4);
    }
    for (var i = 0; i < utf16Str.length; i++) {
        if (utf16Str[i] === '\\') {
            if (utf16Str.substr(i + 2, 4) >= "0000" && utf16Str.substr(i + 2, 4) <= "007f") {
                len++;
            }
            else if (utf16Str.substr(i + 2, 4) >= "ff61" && utf16Str.substr(i + 2, 4) <= "ff9f") {
                len++;
            }
            else {
                len += 2;
            }
            if (len <= chkLen) {
                //console.log(utf16Str.substr(i, 6));
                wrStr += unicodeUnescape(utf16Str.substr(i, 6));
            }
            i += 5;
        }
    }
    if (len > chkLen) {
        //ng
        console.log(wrStr);
        refStr.str = 'abc';
        //refStr.str = wrStr;
        return false;
    }
    //ok
    return true;
};
var readFile = function () {
    var filePath = './test.txt';
    var stream = fs.createReadStream(filePath, 'utf8');
    var reader = readline.createInterface({ input: stream });
    return new Promise(function (resolve, reject) {
        reader.on('line', function (line) {
            console.log(line + ":" + charCount(line));
        })
            .on('close', function () {
            console.log('read end');
            resolve();
        });
    });
};
var unicodeUnescape = function (str) {
    var result = '';
    var strs = str.match(/\\u.{4}/ig);
    if (!strs)
        return '';
    for (var i = 0, len = strs.length; i < len; i++) {
        result += String.fromCharCode(strs[i].replace('\\u', '0x'));
    }
    return result;
};
var test = function (objStr) {
    objStr.str = 'abc';
};
//let ait = reader[Symbol.asyncIterator]();
//(await ait.next()).value)
//reader.on('line', (data) => {
//    console.log(data + ":" + charCount(data));
//});
//const fileRead = (stream) : Promise<void > => {
//  return new Promise((resolve, reject) =>{
//      reader.on('line', (line) => {
//          console.log(line + ":" + charCount(line));
//      })
//      .on('close', () => {
//          console.log('read end');
//      });
//  });
//};
var charCount = function (str) {
    var len = 0;
    //特定の文字を16進数のエスケープシーケンスで置き換えた新しい文字列に置き換える
    str = escape(str);
    for (var i = 0; i < str.length; i++, len++) {
        if (str.charAt(i) == '%') {
            //UTF16フォーマットされた文字列(%uFFFF)の1文字目
            if (str.charAt(++i) == 'u') {
                //UTF16フォーマットされた文字列(%uFFFF)の2文字目
                i += 3;
                len++;
            }
            i++;
        }
    }
    return len;
};
main();
//# sourceMappingURL=main.js.map