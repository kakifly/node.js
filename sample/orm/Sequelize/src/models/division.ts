import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface divisionAttributes {
  div_id: number;
  div_name?: string;
  version: number;
}

export type divisionPk = "div_id";
export type divisionId = division[divisionPk];
export type divisionOptionalAttributes = "div_name";
export type divisionCreationAttributes = Optional<divisionAttributes, divisionOptionalAttributes>;

export class division extends Model<divisionAttributes, divisionCreationAttributes> implements divisionAttributes {
  div_id!: number;
  div_name?: string;
  version!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof division {
    return division.init({
    div_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    div_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    version: {
      type: DataTypes.SMALLINT,
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
