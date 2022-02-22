const { addlike } =  require("../../Database/query")

const likecontroller=async (ctx)=>{
    const {articleid}=ctx.params
    console.log(articleid)
    const {userid}= ctx.state.userdata

    
    const v=await addlike(articleid,userid)
    //console.log(v)
return ctx.body={success:true,message:"Like successful"}
}


 
module.exports=likecontroller