//const validator= require('validator')

const { isEmailindb } = require("../../Database/query")

const emailvalidator = async(ctx,next)=>{

    const {email}=ctx.request.body
    const regex=/\S+@\S+\.\S+/
    if(!regex.test(email))  
    return ctx.body={success:false,message:"Enter valid email"}

    const data=await isEmailindb(email.toLowerCase())
    //console.log(data)
    if(data)
    return ctx.body={success:false,message:"User already present"}

    return next()
}

module.exports=emailvalidator

