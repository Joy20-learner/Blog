const { getblog } = require("../../Database/query")

const getpostcontroller = async(ctx)=>{

    const view = await getblog()
    // console.log(view)

    return ctx.body={success:true,message:view}
}

module.exports=getpostcontroller