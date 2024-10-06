"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.division = void 0;
const sequelize_1 = require("sequelize");
class division extends sequelize_1.Model {
    div_id;
    div_name;
    version;
    static initModel(sequelize) {
        return division.init({
            div_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            div_name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            version: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'division',
            schema: 'yoshinori',
            timestamps: false,
            indexes: [
                {
                    name: "division_pkey",
                    unique: true,
                    fields: [
                        { name: "div_id" },
                    ]
                },
            ]
        });
    }
}
exports.division = division;
//# sourceMappingURL=division.js.map