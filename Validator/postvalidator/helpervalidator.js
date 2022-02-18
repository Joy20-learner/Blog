const istitlethere=(ctx,next)=>{
    const {title}=ctx.request.body
    if(title==undefined)
            return ctx.body={status:false,message:"Enter a title"}
    return next()
}
const isdesthere=(ctx,next)=>{
    const {description}=ctx.request.body
    if(description==undefined)
            return ctx.body={status:false,message:"Enter description"}
    //console.log(description)
    return next()
}

const iscategorythere=(ctx,next)=>{
    const list= ["Engineering","Travelling","Sports","Space","Medical"]
    const {category}=ctx.request.body

    if(!category)
            return ctx.body={status:false,message:"Enter a category"}
    
    if(!list.includes(category))
   return ctx.body={status:false,message:"Enter valid category"}
   
    return next()
}

const isphotothere=(ctx,next)=>{
    const {photo}=ctx.request.body
    if(photo==undefined) 
            return ctx.body={status:false,message:"Enter a category"}
    return next()

}

const isarticlethere=(ctx,next)=>{
    const{blogid,userid,articleid,title,description}=ctx.request.body
    if(!blogid||!userid||!articleid||!title||!description)
    return ctx.body={status:false,message:"Add Article field empty"}
    
    return next()
    
}

module.exports={istitlethere,isdesthere,isphotothere,isarticlethere,iscategorythere}