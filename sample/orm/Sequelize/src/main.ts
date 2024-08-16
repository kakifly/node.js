import * as readline from 'readline';
import * as fs from 'fs';
import {performance } from 'performance';
//import { Sequelize } from 'sequelize';
import { staff } from './models/init-models';
import { entity, staffAttributes } from './models/staff';
import DbCtx from './db';
import { text } from 'stream/consumers';

const main = async () => {
  const env     = process.env.NODE_ENV || 'development';
  const config  = require('./config/config.json')[env];

  //const sequelize = new Sequelize(config.database, config.username, config.password, config);
  //const sequelize = new Sequelize('postgres://yoshinori:yoshinori@192.168.1.34:5432/yoshinori');
  //initModels(sequelize);
  //
  //Insert
  //await staff.create({
  //   userid   :1
  //  ,usercd   :1
  //  ,username :'hoge'
  //  ,userkana :'hoge'
  //});
  //await aa.save();

  //デフォルトでconnection poolになる？

  //for(let i : number = 0; i <= 4; i++){

  //  //トランザクションを開始してSQLクエリを発行する
  //  let hrstart = process.hrtime();

  let dbCtx : DbCtx = new DbCtx();

  //  try{
  //    console.log(i +1 + '回目');

  //    await dbCtx.db.transaction(async function(tx){

  //      //performance.mark('myPerformanceStart') // 開始点
  //      const aa : staff = await staff.findOne({ where: { userid: 1 } });
  //      aa.username = 'b';
  //      //await new Promise(resolve => setTimeout(resolve, 5000));
  //      await aa.save({transaction: tx});
  //      //performance.mark('myPerformanceEnd') // 終了点

  //    });
  //  }finally{
  //    dbCtx.db.close();
  //  }

  //  let hrend = process.hrtime(hrstart);
  //  console.log('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  //}

  try{
    await dbCtx.db.transaction(async function(tx){

      const ent : entity<staffAttributes> = new entity<staffAttributes>();
      ent.attributes = {
        userid    : 8,
        usercd    : 8 ,
        username  : 'user8',
        userkana  : 'ﾕｰｻﾞｶﾅ88',
        version   : 1,
      }
      //ent.attributes.userid = 8;
      //ent.attributes.usercd = 8;
      //ent.attributes.username = 'username8';
      //ent.attributes.userkana = 'userkana8';

      ////const staffExt : staffAttributesExt = new staffAttributesExt();
      ////staffExt.userid = 8;
      ////staffExt.usercd = 8;
      ////staffExt.username = 'user';


      ////{
      ////  userid    : 8,
      ////  usercd    : 8 ,
      ////  username  : 'user8',
      ////  userkana  : 'ﾕｰｻﾞｶﾅ8',
      ////};

      ////const newUser = await staff.create(ent.attributes, {transaction: tx});
      //console.log(ent.attributes);
      //const newUser = await staff.create(ent.attributes);
      //let [affectedCount] = await staff.update(ent.attributes, { where: { userid: 8 }, transaction: tx });
      const st : staff = new staff();
      st.userid = 8;
      st.usercd = 8;
      st.username = 'a';
      st.userkana = 'b';
      st.version = 1;

      console.log(st);

      await st.save({transaction: tx});
      //ent.attributes.save({transaction: tx});

      //if(affectedCount > 0){
        //tx.commit();
      //}
    });
  } catch(e){
    console.log(e);
  }

  //  await transaction.commit();
  //
  //});

  //// 結果の取得
  //performance.measure(
  //    'myPerformance', // 計測名
  //    'myPerformanceStart', // 計測開始点
  //    'myPerformanceEnd' // 計測終了点
  //);
  //let results = performance.getEntriesByName('myPerformance');
  //// 表示
  //console.log(results[0]);

  //hrstart = process.hrtime();
  //dbCtx = new DbCtx();
  //try{
  //  console.log('2回目');
  //  await dbCtx.db.transaction(async function(tx){

  //    const aa : staff = await staff.findOne({ where: { userid: 1 } });
  //    aa.username = 'c';
  //    //await new Promise(resolve => setTimeout(resolve, 5000));
  //    await aa.save({transaction: tx});

  //  });
  //}finally{
  //  dbCtx.db.close();
  //}
  //hrend = process.hrtime(hrstart);
  //console.log('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);

  //con = new DbOrm();
  //try{
  //  await con.db.transaction(async function(tx){
  //    console.log('2回目');
  //    const aa : staff = await staff.findOne({ where: { userid: 1 } });
  //    aa.username = 'h';
  //    await aa.save({transaction: tx});
  //  });
  //}finally{
  //  con.db.close();
  //}

  //try{
  //  await gI.transaction(async function(tx){
  //  //await sequelize.transaction(async function(tx){

  //    //update
  //    const aa : staff = await staff.findOne({ where: { userid: 1 } });
  //    aa.username = 'e';
  //    await aa.save({transaction: tx});
  //    //aa.username = 'e';
  //    //await aa.save();

  //    //await staff.create({
  //    //   userid   :2
  //    //  ,usercd   :2
  //    //  ,username :'hoge'
  //    //  ,userkana :'hoge'
  //    //}, {transaction:tx});

  //    await new Promise(resolve => setTimeout(resolve, 5000));


  //    //await tx.rollback();
  //    throw new Error();
  //    //await tx.commit();
  //    //await tx.rollback();
  //  });
  //}catch(e){
  //  console.log('catch error!');
  //}finally{
  //  //sequelize.close();
  //  gI.close();
  //}
}

main();
