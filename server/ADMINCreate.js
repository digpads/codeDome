
const db = require("./ADMINCreateDB");
const sd = require('silly-datetime');


const ADMINCreate = async function(ctx){

    const DataCreae = { 
        name: ctx.request.query.name,
        age:ctx.request.query.age ,
        content:ctx.request.query.content
    };

    db.dataSave(DataCreae,()=>{
        console.log("ctx:",ctx.query);
    })

   const dataObj =await db.dataFind();

   function dataZH(timeData){
     let dataW=[]
     let newD={};
     for(let i=0;i<timeData.length;i++){
         newD.name = timeData[i].name;
         newD.age = timeData[i].age;
         newD.content = timeData[i].content;
         newD.created =  sd.format(timeData[i].created, 'YYYY-MM-DD HH:mm');

         dataW.push(newD);
         newD={};
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
    
    
        // DataCreae.save().then(() => {
        //     console.log('create name:',ctx.request.query)

        //     userinfo.find(function(err, res){
        //         if (err) {
        //             console.log("Error:" + err);
        //         }
        //         else {
                    
        //             ctx.body = {
        //                 data:{
        //                     data:res,
        //                     msg:"success",
        //                     status:200
        //                 }
        //             }
        //         }
        //     })
        // });
        
        
 }
 
 module.exports = ADMINCreate