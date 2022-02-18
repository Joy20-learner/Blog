const ismobilenolength = (ctx,next)=>{
    const {mobileno}= ctx.request.body
   
 if(isNaN(mobileno))
    
      return ctx.body={success:false,message:"Enter numeric value in mobileno"}    
    
    if (mobileno.toString().length!==10)

    
        return ctx.body={success:false,message:"enter 10 characters"}
     
        return next()
    
}

module.exports=ismobilenolength

// RESOLVE ERRORS 