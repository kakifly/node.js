"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const init_models_1 = require("./models/init-models");
class DbCtx {
    db = null;
    constructor() {
        const env = process.env.NODE_ENV || 'development';
        const config = require('./config/config.json')[env];
        //DB接続
        this.db = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
        //モデル初期化
        (0, init_models_1.initModels)(this.db);
    }
}
exports.default = DbCtx;
//# sourceMappingURL=db.js.map