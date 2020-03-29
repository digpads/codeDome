const Mdata = require('../../model/maindata');


const db ={
    createData(params,callback){
        return Mdata.create(params)
        .then(callback)
    }
}


module.exports = db