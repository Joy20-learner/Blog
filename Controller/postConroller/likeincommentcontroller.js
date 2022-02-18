const { addlikeincomment } = require("../../Database/query")

const likeincommentcontroller= async(ctx)=>{
    const articleid=ctx.params.articleid
     const userid= ctx.state.userdata
    const like= await addlikeincomment(articleid,userid.userid)
    return ctx.body={succeess:true,message:"Comment liked successfully"}
}

module.exports=likeincommentcontroller