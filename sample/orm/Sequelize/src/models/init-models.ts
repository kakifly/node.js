import type { Sequelize } from "sequelize";
import { staff as _staff } from "./staff";
import type { staffAttributes, staffCreationAttributes } from "./staff";
import { token as _token } from "./token";
import type { tokenAttributes, tokenCreationAttributes } from "./token";

export {
  _staff as staff,
  _token as token,
};

export type {
  staffAttributes,
  staffCreationAttributes,
  tokenAttributes,
  tokenCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const staff = _staff.initModel(sequelize);
  const token = _token.initModel(sequelize);


  return {
    staff: staff,
    token: token,
  };
}
