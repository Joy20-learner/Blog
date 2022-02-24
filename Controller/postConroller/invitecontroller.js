//const { isEmailindb } = require("../../Database/query")
const {v4: uuidv4} = require("uuid")
const { insertaccounttype } = require("../../Database/query")
const { generatetoken } = require("../../Helper/token")

const invitecontroller= async(ctx)=>{
    const {email,fullname,AccountType}= ctx.request.body
const ownerid=ctx.state.userdata.userid
//console.log(ownerid)
const inviteid=uuidv4()

//Pass object in generate token
    const token= generatetoken({email})
   // console.log(token,"invite controller token ")
    const role= await insertaccounttype(ownerid,fullname,AccountType,inviteid)
   // console.log(role,"invitecont12")
    return ctx.body={success:true,message:`http://localhost:2000/inviteaccept?token=${token}`}


}

module.exports=invitecontroller