const { getarticle } = require("../../Database/query")


const getarticlecontroller = async(ctx)=>{

    const view = await getarticle()
    // console.log(view)

    return ctx.body={success:true,message:view}
}

module.exports=getarticlecontroller