  /**
 * Created by shiba on 2020/03/26.
 * Updated by shiba on 2020/03/26.
 */

const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  cover:{type:String},
  title:{type:Number},
  newTig:{type:Array},
  setTig:{type:Array},
  content:[
      {
          textCont:{type:String},
          imgPath:{type:String}
      }
  ],
  charge:{type:String},
  price:{type:Number},
  show:{type:Number}
},{timestamps: {createdAt: 'created', updatedAt: 'updated'}});

const model = mongoose.model('maindata',schema);

module.exports = model