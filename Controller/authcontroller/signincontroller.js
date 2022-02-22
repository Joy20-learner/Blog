
const {v4: uuidv4} = require("uuid")
const { insertsignupdata }= require("../../Database/query");
const { hashingpassword } = require("../../Helper/hash");
const { generatetoken } = require("../../Helper/token");




const signincontroller=async(ctx)=>{
    
    const { username, email,password,photo,mobileno,accountType} = ctx.request.body
    const uid= uuidv4()
    
    //console.log(uid)
    //const password=ctx.request.body || "$2b$08$MtAZYNsJnVb583U7kVhMO.cK47.W5vYE8SWK.QYR7ALv/i4Cw.Kia"


    const token=generatetoken({email})
    const hashpass =hashingpassword(password)
    console.log(hashpass)
    ctx.state.uid=uid
     await insertsignupdata(uid,username,email,hashpass,photo,mobileno,accountType)
    return ctx.body={success:true,message:token}
}
module.exports={signincontroller}