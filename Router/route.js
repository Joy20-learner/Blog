const koarouter= require('koa-router')
const logincontroller = require('../Controller/authcontroller/logincontroller')
const { signincontroller } = require('../Controller/authcontroller/signincontroller')
//const { verifytoken } = require('../Helper/token')

const isEmailunique = require('../Validator/authvalidator/isEmailunique')
const { isloginnull } = require('../Validator/authvalidator/isloginnull')
const issigninnull = require('../Validator/authvalidator/issigninnull')
const { isverifytoken } = require('../Validator/isverifytoken')
const loginexist = require('../Validator/authvalidator/loginexist')
const ismobilenolength = require('../Validator/authvalidator/ismobilenolength')
const blogcontroller = require('../Controller/postConroller/blogcontroller')
const { istitlethere, isdesthere, iscategorythere, isarticlethere } = require('../Validator/postvalidator/helpervalidator')
const articlecontroller = require('../Controller/postConroller/articlecontroller')
const likecontroller = require('../Controller/postConroller/likecontroller')
const getpostcontroller = require('../Controller/postConroller/getblogcontroller')
const getarticlecontroller = require('../Controller/postConroller/getarticlecontroller')
const updateblogcontroller = require('../Controller/postConroller/updateblogcontroller')
const updatearticlecontroller = require('../Controller/postConroller/updatearticlecontroller')
const commentcontroller = require('../Controller/postConroller/commentcontroller')
const deleteblogcontroller = require('../Controller/postConroller/deleteblogcontroller')
const deletearticlecontroller = require('../Controller/postConroller/deletearticlecontroller')
const likeincommentcontroller= require('../Controller/postConroller/likeincommentcontroller')
const invitecontroller = require('../Controller/postConroller/invitecontroller')
const ownervalidator = require('../Validator/postvalidator/ownervalidator')
const inviteuseracceptcontroller = require('../Controller/postConroller/inviteuseracceptcontroller')



const router = new koarouter()

 //REGISTER LOGIN
router.post("/signin",issigninnull,isEmailunique,ismobilenolength,signincontroller)
router.post("/login",isloginnull,loginexist,logincontroller)

//LINK GENERATE
router.post("/invite",isverifytoken,ownervalidator,invitecontroller)
router.post("/inviteaccept/:inviteid",isverifytoken,isEmailunique,ismobilenolength,inviteuseracceptcontroller)

//BLOG
router.post("/blog",isverifytoken,istitlethere,isdesthere,iscategorythere,blogcontroller)
router.get("/blog",isverifytoken,getpostcontroller)
router.patch("/blog",isverifytoken,loginexist,updateblogcontroller)
router.delete("/blog/delete/:blogid",isverifytoken,loginexist,deleteblogcontroller)


//ARTICLE
router.post("/article",isverifytoken,istitlethere,isdesthere,articlecontroller)
router.get("/article",isverifytoken,getarticlecontroller)
router.patch("/article",isverifytoken,loginexist,updatearticlecontroller)
router.delete("/article/delete/:articleid",isverifytoken,loginexist,deletearticlecontroller)

//LIKE COMMENT
router.post("/article/like/:articleid",isverifytoken,likecontroller)
router.post("/article/comment/:articleid",isverifytoken,commentcontroller)
router.post("/article/comment/like/:articleid",isverifytoken,likeincommentcontroller)




module.exports= router;