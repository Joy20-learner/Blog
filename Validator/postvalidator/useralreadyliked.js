const { finduseridinarticle } = require("../../Database/query")

const useralreadyliked = async(ctx,next)=>{
    const userid=ctx.state.userdata.userid 
    const available= await finduseridinarticle(userid)

    if(userid==userid){
    return ctx.body={message:"already liked"}
    }
    else{
        return next()
    }
}


module.exports=useralreadyliked