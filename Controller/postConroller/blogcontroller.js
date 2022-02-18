const {v4: uuidv4} = require("uuid")
const { createblog } = require("../../Database/query")



const blogcontroller= async (ctx)=>{
    const{category,title,photo,description}=ctx.request.body
    const buid=uuidv4()
    
    const userid= ctx.state.userdata.userid
    //console.log(userid)
//console.log({category})

  await createblog(buid,userid,category,title,photo,description)
  ctx.state.userdata=buid
    return ctx.body= {success:true,message:"Blog created successfully"}

}

module.exports=blogcontroller