"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hoge {
    hoge = "";
    constructor() { }
    ;
}
exports.default = Hoge;
//const main = async () => {
//  console.log('hoge');
//
//
//  //const sequelize = new Sequelize('postgres://yoshinori:yoshinori@192.168.1.34:5432/yoshinori');
//
//
//  //await staff.create({
//  //   userid   :1
//  //  ,usercd   :1
//  //  ,username :'hoge'
//  //  ,userkana :'hoge'
//  //});
//
//  //トランザクションを開始してSQLクエリを発行する
//
//  try{
//    await sequelize.transaction(async function(tx){
//
//      const aa : staff = await staff.findOne({ where: { userid: 1 } });
//      aa.username = 'e';
//      await aa.save({transaction: tx});
//      //aa.username = 'e';
//      //await aa.save();
//
//      //await staff.create({
//      //   userid   :2
//      //  ,usercd   :2
//      //  ,username :'hoge'
//      //  ,userkana :'hoge'
//      //}, {transaction:tx});
//
//      //await tx.rollback();
//      throw new Error();
//      //await tx.commit();
//      //await tx.rollback();
//    });
//  }catch(e){
//    console.log('catch error!');
//  }finally{
//    sequelize.close();
//  }
//
//
//
//}
//
//main();
//
//# sourceMappingURL=hoge.js.map