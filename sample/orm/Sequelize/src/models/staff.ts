import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';



//export interface staffAttributes extends entityState {
export interface staffAttributes extends attributes {
  userid: number;
  usercd: number;
  username?: string;
  userkana?: string;
  version?: number;
}

export interface attributes {
}

export class entity<T extends attributes> {
  public attributes: T;
  public status : number;
}

export type staffPk = "userid";
export type staffId = staff[staffPk];
export type staffOptionalAttributes = "username" | "userkana" | "version";
export type staffCreationAttributes = Optional<staffAttributes, staffOptionalAttributes>;

export class staff extends Model<staffAttributes, staffCreationAttributes> implements staffAttributes {
  userid!: number;
  usercd!: number;
  username?: string;
  userkana?: string;
  version?: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof staff {
    return staff.init({
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usercd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "staff_usercd_key"
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    userkana: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'staff',
    schema: 'yoshinori',
    timestamps: false,
    version:true,
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
