import {PgPoolHelper} from './pgPoolHelper';
import {PoolClient, QueryConfig, QueryResult}  from 'pg';

/**
 * トークン設定
 * @param poolClient 接続プール
 * @param uuid  uuid
 * @param userid ユーザID
 */
export async function setToken(poolClient: PoolClient, uuid: string, userid: number): Promise<number> {
  let poolHelpler: PgPoolHelper = new PgPoolHelper(poolClient);
  console.log('token start');

  let ret: QueryResult;

  let qry: QueryConfig = {
    name: 'insert token',
    text: 'insert into token values($1,  $2, current_timestamp)',
    values: [uuid, userid],
  };
  ret = await poolHelpler.execute(qry);

  console.log('token end');
  return ret.rowCount;
}