
const db = require("./ADMINDataDB");
const sd = require('silly-datetime');

const ADMINCreate = async function(ctx){
    const DataCreae = { 
        cover: ctx.request.body.cover,
        title:ctx.request.body.title ,
        setTig:ctx.request.body.setTig,
        content:ctx.request.body.content,
        charge:ctx.request.body.charge,
        price:ctx.request.body.price,
        show:ctx.request.body.show
    };

    db.createData(DataCreae,()=>{
        console.log("ctxPost:",ctx.request);
    })

  

    ctx.body = {
        data:{
            msg:"PostCreateSuccess",
            status:200
        }                
    };
        
        
 }
 
 module.exports = ADMINCreate