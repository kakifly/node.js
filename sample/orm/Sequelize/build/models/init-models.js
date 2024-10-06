"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = exports.staff = exports.division = void 0;
exports.initModels = initModels;
const division_1 = require("./division");
Object.defineProperty(exports, "division", { enumerable: true, get: function () { return division_1.division; } });
const staff_1 = require("./staff");
Object.defineProperty(exports, "staff", { enumerable: true, get: function () { return staff_1.staff; } });
const token_1 = require("./token");
Object.defineProperty(exports, "token", { enumerable: true, get: function () { return token_1.token; } });
function initModels(sequelize) {
    const division = division_1.division.initModel(sequelize);
    const staff = staff_1.staff.initModel(sequelize);
    const token = token_1.token.initModel(sequelize);
    return {
        division: division,
        staff: staff,
        token: token,
    };
}
//# sourceMappingURL=init-models.js.map