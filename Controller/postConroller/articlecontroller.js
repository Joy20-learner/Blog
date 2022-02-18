const {v4: uuidv4} = require("uuid")
const { createarticle, findblogidindb, } = require("../../Database/query")


const articlecontroller = async (ctx)=>{
    const {articlewritername,title,photo,description,tags}= ctx.request.body
 const articleid=  uuidv4()
 

const userid=ctx.state.userdata.userid

//console.log(ctx.state.userdata.userid)
const blogdata=await findblogidindb(userid)
//console.log(blogdata)
//console.log(tags)
//console.log(userid)
await createarticle(articleid,blogdata.blogid,userid,articlewritername,title,photo,description,tags)

 return ctx.body={success:true,meassage:"Article created successfully"}

}

module.exports=articlecontroller