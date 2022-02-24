//const validator=require('validator')

const passwordvalidator= (ctx,next)=>{
     const{ password}=ctx.request.body

     const regex= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
     if(regex.test(password))
//validator.isStrongPassword(password,[1,1,1])
  // console.log(regex.test(password))
     return ctx.body={success:false,message:"Enter password according to required Credentials"}
     
     return next()
}

module.exports=passwordvalidator