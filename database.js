  /**
 * Created by shiba on 2017/12/05.
 * Updated by shiba on 2017/12/05.
 */

const mongoose = require('mongoose');

const config = require('./config')

      mongoose.Promise = global.Promise;
      mongoose.connect(config.datapath,{useNewUrlParser:true})

const db = mongoose.connection;

db.once('open',()=>{
    console.log('成功连接数据库')
})

db.on('error',(err)=>{
    console.error(err)
})

db.on('close',()=>{
    console.log('数据库断开，重新连接数据库');
    mongoose.connect(dataPath,{server:{auto_reconnect:true}});
})

module.exports = db