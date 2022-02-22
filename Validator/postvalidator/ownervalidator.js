const ownervalidator = async(ctx,next)=>{
    const {email}=ctx.state.userdata
   console.log(email)
    if(email==="j@gmail.com")
    return next()
    else{
    return ctx.body={status:false,message:"Only owner allowed to invite"}
    }
  
}

module.exports=ownervalidator