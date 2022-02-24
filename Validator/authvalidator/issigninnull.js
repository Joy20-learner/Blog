const issigninnull = (ctx,next)=>{
    const {username,email,password}= ctx.request.body
    // const username=ctx.request.body.username
    // const email= ctx.request.body.email
    // const pass= ctx.request.body.password

    if( username== undefined ||email== undefined || password==undefined){
        return ctx.body ={success:false,message:"Fill all tabs"}
        
    }
    return next()
}

module.exports=issigninnull;