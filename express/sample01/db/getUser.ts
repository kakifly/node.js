import {PgPoolHelper} from './pgPoolHelper';
import {PoolClient, QueryResultRow} from 'pg';

export interface User {
  id: number;
  name: string;
  logined: boolean;
}

/**
 * ユーザ情報取得
 * @param poolClient 接続プール
 * @param userId ユーザID
 */
export async function getUser(poolClient: PoolClient, userId: number): Promise<User> {
  let poolHelpler: PgPoolHelper = new PgPoolHelper(poolClient);

  console.log('getUser start');
  let user: User = {
    id: 0,
    name: '',
    logined: false,
  };

  let ret: QueryResultRow;
  ret = await poolHelpler.query('select * from staff where userid =' + userId);

  console.log(ret);

  user.id = ret.rows[0].userid;
  user.name = ret.rows[0].username;
  user.logined = true;
  //});

  console.log('getUser end');
  return user;
}
