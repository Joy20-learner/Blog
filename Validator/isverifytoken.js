const { isEmailindb,  findblogidindb } = require("../Database/query")
const { verifytoken } = require("../Helper/token")
const jwt= require('jsonwebtoken')




const isverifytoken=async(ctx,next)=>{

   const category=ctx.request.body.category
   
    const token=ctx.header.authorization

    if(!token)
        return ctx.body={status:false,message:"Signin again"}

    const data=verifytoken(token)
    if(data==null){
        return ctx.body={success:false,message:"token invalid"}
    }
    else{

    const userdata=await isEmailindb(data.email)
    //console.log(userdata,"userdata token")

    
    if(!userdata)
        return ctx.body={status:false,message:"User not exist"}
     ctx.state.userdata=userdata
  //  ctx.state.blogdata=blogdata
    return next()
}
}
module.exports={isverifytoken}







