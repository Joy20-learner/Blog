const { finduseridinarticle } = require("../../Database/query")

const useralreadyliked = async(ctx,next)=>{
    const userid=ctx.state.userdata
    
    //console.log(userid,"Userid")
    const available= await finduseridinarticle(userid.userid)
    for (let i = 0; i < available.like.length; i++) {
        if(userid.userid==available.like[0]){
            return ctx.body={message:"already liked"}
            }
            else{
                return next()
            }
        }

 
}


module.exports=useralreadyliked