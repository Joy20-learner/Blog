const { updatearticle } = require("../../Database/query")


const updatearticlecontroller = async(ctx)=> {
    const {articleid,articlewritername,title,photo,description}=ctx.request.body

   // const {userid}=ctx.state.userdata

const data= await updatearticle(articleid,articlewritername,title,photo,description)
console.log(data)

return ctx.body={success:true,message:"article updated"}
}


module.exports=updatearticlecontroller