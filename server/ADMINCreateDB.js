const userinfo = require('../model/userinfo');


const db ={
    dataSave(params,callback){
        return userinfo.create(params)
        .then(callback)
    },
    dataFind(){
        return  userinfo.find({},{__v:0}).limit(3).sort({created:-1})

    }
}


module.exports = db