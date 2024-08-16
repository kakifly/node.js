const assert = require("assert");
const fs = require("fs");
const path = require("path");

it("express test", () => {
    let abc = 'abc12345def';
    let ret = '12345a';

    abc = abc.replace(new RegExp('[^0-9-]', 'g'), '');

    assert.strictEqual(abc, ret);

    //// fs.readFileSyncは同期的にファイルを読み込むメソッド
    //const sample = fs.readFileSync(path.resolve(__dirname, "./fixtures/sample.md"), { encoding: "utf8" });
    //const expected = fs.readFileSync(path.resolve(__dirname, "./fixtures/expected.html"), { encoding: "utf8" });
    //// 末尾の改行の有無の違いを無視するため、変換後のHTMLのスペースをtrimメソッドで削除してから比較しています
    //assert.strictEqual(md2html(sample, { gfm: false }).trimEnd(), expected.trimEnd());
});