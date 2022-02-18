const isloginnull = (ctx,next) =>{
    
const{email,password}= ctx.request.body

    if( email == undefined || password == undefined)

    return ctx.body={success:false,message:"Fill all tabs"}
    return next()
    
   
}

module.exports={isloginnull}