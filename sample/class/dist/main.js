var item = /** @class */ (function () {
    function item(price) {
        this._price = price;
        this.ro = 123 * 123;
    }
    Object.defineProperty(item.prototype, "price", {
        //getter  ※es5以降
        get: function () {
            return this._price;
        },
        //setter  ※es5以降
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    return item;
}());
var hoge = new item(100);
console.log(hoge.price);
hoge.price = 500;
console.log(hoge.price);
console.log(hoge.ro);
//# sourceMappingURL=main.js.map