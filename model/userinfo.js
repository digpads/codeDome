  /**
 * Created by shiba on 2017/12/05.
 * Updated by shiba on 2017/12/05.
 */

const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name:{type:String},
  age:{type:Number},
  abc:{type:String},
  content:{type:String},
},{timestamps: {createdAt: 'created', updatedAt: 'updated'}});

const model = mongoose.model('userinfo',schema);

module.exports = model