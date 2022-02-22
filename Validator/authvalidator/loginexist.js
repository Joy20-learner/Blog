const {  isEmailindb } = require("../../Database/query")
//const { hashingpasswordverify } = require("../../Helper/hash")

const loginexist = async(ctx,next)=>{
    const {email}= ctx.request.body
  
    console.log(email,"Loginexist 7")

    const data = await isEmailindb(email)
    console.log(data,"loginexist")
    
    if(!data){
        ctx.body={success:false,message:"Signin first "}
        return }
    //  const newpassword= await hashingpasswordverify(password,data.password)
    //     console.losg(await d)

  ctx.state={data}
    return next()
}

module.exports=loginexist