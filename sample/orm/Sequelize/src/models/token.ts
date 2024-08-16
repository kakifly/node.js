import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tokenAttributes {
  uuid: string;
  userid: number;
  credate?: Date;
}

export type tokenPk = "uuid" | "userid";
export type tokenId = token[tokenPk];
export type tokenOptionalAttributes = "credate";
export type tokenCreationAttributes = Optional<tokenAttributes, tokenOptionalAttributes>;

export class token extends Model<tokenAttributes, tokenCreationAttributes> implements tokenAttributes {
  uuid!: string;
  userid!: number;
  credate?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof token {
    return token.init({
    uuid: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    credate: {
      type: DataTypes.DATE,
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
