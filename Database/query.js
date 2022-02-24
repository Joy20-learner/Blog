

const mongoclient = require("../Database/db");


// //B capital in data base name  S capital in collection name

const findblogidindb = async (userid) => 
await mongoclient.db("Blog").collection("blogdata").findOne({ ownerid:userid });

 const isEmailindb = async (email) => 
  await mongoclient.db("Blog").collection("Signin").findOne({email});

  const finduseridinarticle= async(articlewriterid)=>
  await mongoclient.db("Blog").collection("articledata").findOne({articlewriterid})

  
  const finduseridincomment= async(userid)=>
  await mongoclient.db("Blog").collection("commentdata").findOne({userid})
  
const findarticleidindb = async (articleid,userid) => 
await mongoclient.db("Blog").collection("articledata").findOne({articleid, articlewriterid:userid });



const insertsignupdata = async (userid,username, email, hashpassword,photo,mobileno,accountType) =>
  mongoclient
    .db("Blog")
    .collection("Signin")
    .insertOne({ userid,username, email, password: hashpassword ,photo,mobileno,accountType});

    

const createblog = async(blogid,ownerid,category,title,photo,description) => 
    mongoclient
    .db("Blog")
    .collection("blogdata")
    .insertOne({blogid,ownerid,category,title,photo,description,date: new Date()});



const createarticle= async(articleid,blogid,articlewriterid,articlewritername,title,photo,description,tags)=>
     mongoclient
     .db("Blog")
     .collection("articledata")
     .insertOne({articleid,blogid,articlewriterid,articlewritername,
      title,photo,description,
      tags:tags,like:[],comment:[],date: new Date()})

const addlikeincomment = async(articleid,userid)=>
mongoclient.db("Blog").collection("commentdata").updateOne({articleid},{$push:{commentlike:userid}})
               
 const addlike = async(articleid,userid)=>
   mongoclient.db("Blog").collection("articledata").updateOne({articleid},{$push:{like:userid}}) 

   const addTeamDetails= async(inviteid,email,password,photo,mobileno)=>
   mongoclient.db("Blog").collection("invitationLink")
   .updateOne({inviteid},{$push:{TeamMemberDetails:{email,password,photo,mobileno}}})
   //update comment inside article 
   //const commentinarticle = async(articleid,userid)=>
   //mongoclient.db("Blog").collection("articledata").updateOne({articleid:articleid},{$push:{comment:userid}})
   
 const addcomment = async(articleid,commentid,comment)=>
 mongoclient.db("Blog").collection("commentdata").insertOne({articleid,commentid,comment,commentlike:[]})


 const getblog = async ()=>
   mongoclient.db("Blog").collection("blogdata").find({}).toArray()

   const getarticle = async ()=>
   mongoclient.db("Blog").collection("articledata").find({}).toArray()


   const updateblog = async(blogid,category,title,photo,description)=>
   mongoclient.db("Blog").collection("blogdata").updateOne({blogid},{$set:{category,title,photo,description}})

   const updatearticle= async(articleid,articlewritername,title,photo,description)=>
   mongoclient.db("Blog").collection("articledata").updateOne({articleid},{$set:{articlewritername,title,photo,description}})

   const deleteblog= async(blogid,ownerid)=>
   mongoclient.db("Blog").collection("blogdata").deleteOne({blogid,ownerid})

   
   const deletearticle= async(articleid,articlewriterid)=>
   mongoclient.db("Blog").collection("articledata").deleteOne({articleid,articlewriterid})


  const insertaccounttype= async(ownerid,fullname,AccountType,inviteid)=>
  mongoclient.db("Blog").collection("invitationLink").insertOne({ownerid,fullname,AccountType,inviteid})

  const updateTeamMemberData= async(inviteid,name,email,password,photo,mobileno)=>
  mongoclient.db("Blog").collection("invitationLink").updateOne({inviteid},{$set:{name,email,password,photo,mobileno}})

  const titleSame =async (title)=>
  mongoclient.db("Blog").collection("artiledata").findOne({title})
 
  const mobilenoSame =async (mobileno)=>
  mongoclient.db("Blog").collection("Signin").findOne({mobileno})

  const iscommentthere =async (comment)=>
  mongoclient.db("Blog").collection("artiledata").findOne({comment})

  
  const islikethere =async (userid)=>
  mongoclient.db("Blog").collection("artiledata").findOne({articlewriterid:userid})



module.exports={findblogidindb,findarticleidindb,isEmailindb,finduseridinarticle,finduseridincomment,
                 insertsignupdata,createblog,createarticle,
                 addlike,addcomment,addlikeincomment,addTeamDetails,
                 getblog,getarticle,
                 updateblog,updatearticle,
                 deleteblog,deletearticle,
                 insertaccounttype,updateTeamMemberData,
                 titleSame,mobilenoSame,iscommentthere,islikethere}


// like: [
//   { userid: 'dsfgdfgfd '},
//   {},
//   {}
// ]