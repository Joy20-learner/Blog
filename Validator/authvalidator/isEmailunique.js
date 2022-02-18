const { isEmailindb } = require("../../Database/query")

const isEmailunique = async (ctx,next)=>{
    const email = ctx.request.body.email
    //console.log(email)
    const data = await isEmailindb(email)
    //console.log(data)
    if (data!==null)
    return ctx.body={success:false,message:"Enter another email"}
    return next()    
}

module.exports=isEmailunique