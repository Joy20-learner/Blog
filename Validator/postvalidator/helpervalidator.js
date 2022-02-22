const { titleSame, iscommentthere, islikethere } = require("../../Database/query")

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


const istitleSame =async(ctx,next)=>{
    const title=ctx.request.body
    const articletitle= await titleSame(title)

    if(title==articletitle)
        return ctx.body={message:"Same title"}
    
return next()
}


const ismobilenosame =async(ctx,next)=>{
    const mobileno=ctx.request.body
    const number= await mobileno(mobileno)

    if(mobileno==number)
        return ctx.body={message:"Same Mobileno "}
    
return next()
}

// THIS VALIDATOR WON'T ALLOW TO LIKE A COMMENT IF IT IS NULL

const commentexist = async(ctx,next)=>{
    const comment=ctx.request.body
    const check=await iscommentthere(comment)
    
    if(comment==check)
    return ctx.body={message:"Comment required to like"}
    return next()

}

// //Same user should not be able to like again
// const likeexist = async(ctx,next)=>{
//     const userid=ctx.state.userdata
// const likebyuser  =await islikethere(userid)
// console.log(likebyuser,"likeid")
// return ctx.body={message:"already liked"}
// return next()
// }
module.exports={istitlethere,isdesthere,isphotothere,isarticlethere,iscategorythere,istitleSame,ismobilenosame
    ,commentexist}