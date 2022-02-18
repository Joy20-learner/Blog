const { updateblog } = require("../../Database/query")

const updateblogcontroller = async(ctx)=> {
    const {blogid,category,title,photo,description}=ctx.request.body

   // const {userid}=ctx.state.userdata

const data= await updateblog(blogid,category,title,photo,description)
console.log(data)

return ctx.body={success:true,message:"Blog updated"}
}





module.exports=updateblogcontroller