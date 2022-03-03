//  const {MongoClient} = require('mongodb')

// const url="mongodb+srv://joy_social:joysocial123@cluster0.btlbi.mongodb.net/test"

// const mongodb = new MongoClient(url)

// mongodb.connect()
// .then(()=> console.log("Database connected"))
// .catch((e)=> console/log("error"))

// module.exports=mongodb
const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://joy_social:joysocial123@cluster0.btlbi.mongodb.net/test";

const conn = MongoClient;
let mongoClient = new MongoClient(url,{});
if(process.env.NODE_ENV!="test")
mongoClient
  .connect()
  .then(() => console.log("DB connected successfully"))
  .catch((e) => console.log("error" + e));
const mongoDB=mongoClient
module.exports=mongoDB;