import type { Sequelize } from "sequelize";
import { division as _division } from "./division";
import type { divisionAttributes, divisionCreationAttributes } from "./division";
import { staff as _staff } from "./staff";
import type { staffAttributes, staffCreationAttributes } from "./staff";
import { token as _token } from "./token";
import type { tokenAttributes, tokenCreationAttributes } from "./token";

export {
  _division as division,
  _staff as staff,
  _token as token,
};

export type {
  divisionAttributes,
  divisionCreationAttributes,
  staffAttributes,
  staffCreationAttributes,
  tokenAttributes,
  tokenCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const division = _division.initModel(sequelize);
  const staff = _staff.initModel(sequelize);
  const token = _token.initModel(sequelize);


  return {
    division: division,
    staff: staff,
    token: token,
  };
}
