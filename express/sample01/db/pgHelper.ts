import * as pg from 'pg';
const {Client} = pg;

export class PgHelper {
  client: pg.Client;

  constructor() {
    this.client = new pg.Client({
      host: 'localhost',
      database: 'rootdb',
      user: 'root',
      password: 'root',
      port: 5432,
    });
  }

  public query(sql: string): Promise<any> {
    //public query(sql: string): pg.QueryResultRow {
    //const client = new Client({
    //  user: 'yoshinori',
    //  host: 'localhost',
    //  password: 'yoshinori',
    //  port: 5432,
    //});

    //client.query('select now()', (err, res) => {
    //  //this.client.query(sql, (err, res) => {
    //  console.log(err, res);
    //  client.end();
    //});

    //console.log('query start');
    //
    //return new Promise((resolve, reject) => {

    //  await this.client.query(sql, (err, res) => {
    //    //this.client.query(sql, (err, res) => {
    //    //console.log(err, res);
    //    this.client.end();
    //    this.client.end();

    //    //let u = res.rows.filter(r => r.username === 'hoge');
    //    //console.log(u);

    //    //console.log('query end');
    //    resolve(res); //正常終了
    //    //reject(); //異常の場合
    //  });
    //});
    //
    return new Promise((resolve, reject) => {
      console.log('query start');
      let ret: pg.QueryResultRow = {};

      this.client.connect();

      this.client.query(sql, (err, res) => {
        console.log('query');
        ret = res.rows.filter(r => r.username === 'hoge');
        this.client.end();

        console.log(ret[0].username);
        console.log('query end');

        resolve(ret);
      });
    });

    //let ret: pg.QueryResultRow = {};
    //this.client.connect();

    //async () => {
    //  await this.client.query(sql, (err, res) => {
    //    console.log('query');
    //    ret = res.rows.filter(r => r.username === 'hoge');
    //    this.client.end();

    //    console.log(ret[0].username);
    //    console.log('query end');

    //    //return new Promise((resolve, reject) => {
    //    //  resolve(ret);
    //    //});
    //  });
    //};

    //return ret;
    //return new Promise((resolve, reject) => {
    //  //console.log(ret[0].username);
    //  console.log('query end');
    //});
  }
}
