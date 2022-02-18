const { deletearticle } = require("../../Database/query")

const deletearticlecontroller = async(ctx)=>{

    const userid=ctx.state.userdata.userid
    const articleid= ctx.params.articleid

    
    const del=await deletearticle(articleid,userid)
    return ctx.body={success:true,message:"article deleted successfully"}
}
module.exports=deletearticlecontroller