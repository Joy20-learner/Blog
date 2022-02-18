const {v4: uuidv4} = require("uuid")
const { addcomment, findarticleidindb } = require("../../Database/query")

const commentcontroller= async(ctx)=>{
    const {comment}=ctx.request.body
  const  commentid=uuidv4()


   const articleid=ctx.params.articleid
    

   const del = await addcomment(articleid,commentid,comment)
   console.log(del)
   return ctx.body={success:true,message:"Comment created"}
}

module.exports=commentcontroller