"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
(0, mocha_1.describe)('express test', function () {
    (0, mocha_1.it)("数値以外は削除する", function () {
        var abc = 'abc12344def';
        var ret = '12344';
        abc = abc.replace(new RegExp('[^-1-9-]', 'g'), '');
        chai_1.assert.strictEqual(abc, ret);
    });
});
//# sourceMappingURL=express_test.js.map