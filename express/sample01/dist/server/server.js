"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var multer_1 = __importDefault(require("multer"));
var app = (0, express_1.default)();
//CORSの許可
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
var clientPath = __dirname.replace('/server', '');
app.use('/', express_1.default.static(clientPath));
//app.get('/*', function(req, res) {
//  res.sendFile(path.join(clientPath, 'index.html'));
//  //  res.sendFile('dist/index.html');
//});
//body-parserに基づいた着信リクエストの解析
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//GetとPostのルーティング
var router = express_1.default.Router();
router.get('/api/getTest', function (req, res) {
    res.send(req.query);
});
// POST
router.post('/api/post', function (req, res) {
    //body
    console.log(req.body);
    console.log(req.body.hoge);
    res.send('Received POST Data!');
});
// GET
router.get('/api/test/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            console.log('---------- req start ----------');
            //baseUrl
            console.dir('baseUrl:' + req.baseUrl);
            //body
            console.dir('body:' + req.body);
            //method
            console.dir('method:' + req.method);
            //params
            console.dir('prams:' + req.params);
            //protocol
            console.dir('protocol:' + req.protocol);
            //GETパラメータ
            console.dir('[param]hoge :' + req.query.hoge);
            console.log('---------- req end   ----------');
            res.send(new (/** @class */ (function () {
                function class_1() {
                    this.test = 'test';
                }
                return class_1;
            }()))());
        }
        catch (e) {
            throw e;
        }
        finally {
            //
        }
        return [2 /*return*/];
    });
}); });
//router.get('*', function(req, res) {
//  res.sendFile(path.join(clientPath, 'index.html'));
//});
// multer middleware
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); //オリジナルのファイルと同一名
    }
});
//const upload = multer({ dest: 'uploads/' })   //アップロードファイルの保存先
var upload = (0, multer_1.default)({ storage: storage }); //アップロードファイルの保存先
router.post('/foo', upload.array('files', 3), function (req, res) {
    console.log('--- post() /foo called ---');
    console.log('--- req.body --');
    console.log(req.body);
    console.log('--- req.files ---');
    console.log(req.files);
    res.send('Done');
});
app.use(router);
//3000番ポートでAPIサーバ起動
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=server.js.map