
const db = require("./ADMINCreateDB");
const sd = require('silly-datetime');


const ADMINCreate = async function(ctx){
    const DataCreae = { 
        name: ctx.request.body.name,
        age:ctx.request.body.age ,
        content:ctx.request.body.content
    };

    db.dataSave(DataCreae,()=>{
        console.log("ctxPost:",ctx.request);
    })

   const dataObj =await db.dataFind();

   function dataZH(data){
     let dataW=[];
     for(let i=0;i<data.length;i++){
        let newD={};
         newD.name = data[i].name;
         newD.age = data[i].age;
         newD.content = data[i].content;
         newD.created = sd.format(data[i].created, 'YYYY-MM-DD HH:mm');

         dataW.push(newD);
     }
     return dataW
   }

    ctx.body = {
        data:{
            list:await dataZH(dataObj),
            msg:"success",
            status:200
        }                
    };
        
        
 }
 
 module.exports = ADMINCreate