"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = void 0;
const sequelize_1 = require("sequelize");
class token extends sequelize_1.Model {
    uuid;
    userid;
    credate;
    static initModel(sequelize) {
        return token.init({
            uuid: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
                primaryKey: true
            },
            userid: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            credate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'token',
            schema: 'yoshinori',
            timestamps: false,
            indexes: [
                {
                    name: "token_pkey",
                    unique: true,
                    fields: [
                        { name: "uuid" },
                        { name: "userid" },
                    ]
                },
            ]
        });
    }
}
exports.token = token;
//# sourceMappingURL=token.js.map