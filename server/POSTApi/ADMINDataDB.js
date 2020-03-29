const Mdata = require('../../model/mainData');


const db ={
    createData(params,callback){
        return Mdata.create(params)
        .then(callback)
    }
}


module.exports = db