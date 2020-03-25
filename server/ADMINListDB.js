const userinfo = require('../model/userinfo');


const db ={
    dataFind(){
        return  userinfo.find({},{__v:0}).limit(3).sort({created:-1})

    }
}


module.exports = db