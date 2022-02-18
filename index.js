const koa = require('koa')
const koarouter= require('koa-router')
const parser= require('koa-bodyparser')
const mongodb = require('../Blog/Database/db')
const authRoute = require('./Router/route.js')

const app = new koa()

app.use(parser())

app.use(authRoute.routes()).use(authRoute.allowedMethods())

app.listen(2000,()=>{
    console.log("Port is running")
})



//module.exports= koa,koarouter,parser,mongodb;