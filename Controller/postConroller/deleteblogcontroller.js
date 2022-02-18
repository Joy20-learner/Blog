const { deleteblog } = require("../../Database/query")

const deleteblogcontroller= async(ctx)=>{
    const blogid=ctx.params.blogid
    const userid=ctx.state.userdata.userid
   // console.log(ownerid)
const del= await deleteblog(blogid,userid)
return ctx.body={success:true,message:"Blog deleted successfully"}
}

module.exports=deleteblogcontroller