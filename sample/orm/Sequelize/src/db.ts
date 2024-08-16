import { Sequelize } from 'sequelize';
import { initModels, staff } from './models/init-models';

class DbCtx {
  public db : Sequelize = null;

  public constructor(){
      const env       = process.env.NODE_ENV || 'development'
      const config    = require('./config/config.json')[env];
      //DB接続
      this.db  = new Sequelize(config.database, config.username, config.password, config);
      //モデル初期化
      initModels(this.db);
  }

  //public db() : Sequelize {
  //  return this.sequelize;
  //}
}

export default DbCtx;