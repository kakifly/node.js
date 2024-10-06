"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staff = void 0;
const sequelize_1 = require("sequelize");
class staff extends sequelize_1.Model {
    userid;
    usercd;
    username;
    userkana;
    version;
    static initModel(sequelize) {
        return staff.init({
            userid: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            usercd: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                unique: "staff_usercd_key"
            },
            username: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            userkana: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            version: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'staff',
            schema: 'yoshinori',
            timestamps: false,
            indexes: [
                {
                    name: "staff_pkey",
                    unique: true,
                    fields: [
                        { name: "userid" },
                    ]
                },
                {
                    name: "staff_usercd_key",
                    unique: true,
                    fields: [
                        { name: "usercd" },
                    ]
                },
            ]
        });
    }
}
exports.staff = staff;
//# sourceMappingURL=staff.js.map