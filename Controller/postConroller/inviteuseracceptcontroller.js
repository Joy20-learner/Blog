
// const {v4: uuidv4} = require("uuid")
//const { updateTeamMemberData } = require("../../Database/query")
const { addTeamDetails } = require("../../Database/query")
const { hashingpassword } = require("../../Helper/hash")

const inviteuseracceptcontroller= async(ctx)=>{

    const {email,password,photo,mobileno}=ctx.request.body
    const inviteid= ctx.params.inviteid
    // console.log(inviteid)
    // const {ownerid}=ctx.state.userdata.userid
    //console.log(ownerid)
    const hashpass= hashingpassword(password)


    const teamdetails= await addTeamDetails(inviteid,email,hashpass,photo,mobileno) 
    //const inviteuserisgnin=await updateTeamMemberData(name,email,hashpass,photo)
   return ctx.body={success:true,message:"Invite user data inserted successfully"}

}

module.exports=inviteuseracceptcontroller