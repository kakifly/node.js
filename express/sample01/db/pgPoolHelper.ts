import {PoolClient, QueryResult, QueryConfig} from 'pg';

export class PgPoolHelper {
  _poolClient: PoolClient;

  /**
   * コンストラクタ
   * @param poolClient PoolClient
   */
  constructor(poolClient?: PoolClient) {
    if (poolClient == null) {
      //PoolClient設定なし
      throw new Error('PoolClient設定無し/n');
    } else {
      //設定あり
      this._poolClient = poolClient;
    }
  }

  /**
   * sql実行(selectなど)
   * @param sql sql文
   */
  public query(sql: string): Promise<QueryResult> {
    return new Promise((resolve, reject) => {
      console.log('query start');
      this._poolClient.query(sql, (err, res) => {
        if (err) {
          //エラー
          reject(err);
        }

        console.log('query end');
        resolve(res);
      });
    });
  }

  /**
   * sql実行(insertなど)
   * @param sql sql文
   */
  public execute(qryCon: QueryConfig): Promise<QueryResult> {
    return new Promise((resolve, reject) => {
      console.log('query start');

      this._poolClient.query(qryCon, (err, res) => {
        if (err) {
          //エラー
          reject(err);
        }

        console.log('query end');
        resolve(res);
      });
    });
  }
}
