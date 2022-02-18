const {  isEmailindb } = require("../../Database/query")
//const { hashingpasswordverify } = require("../../Helper/hash")

const loginexist = async(ctx,next)=>{
    const email= ctx.request.body
    //const password=ctx.request.body.status || "null"
    
    console.log(email)
    const data = await isEmailindb(email)
   // const password=ctx.request.body || "$2b$08$MtAZYNsJnVb583U7kVhMO.cK47.W5vYE8SWK.QYR7ALv/i4Cw.Kia"
    console.log(data)
    //const password=ctx.request.body.status || "null"
    if(data==null)
        return ctx.body={success:false,message:"Signin first "}
    //    const newpassword= await hashingpasswordverify(password,data.password)
    // //    console.log(await d)

  ctx.state.data=data
    return next()
}

module.exports=loginexist