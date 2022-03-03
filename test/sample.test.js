const supertest = require('supertest')
const app = require('../app')

const querydata=require('../Database/query')

const request = supertest.agent(app.callback());


describe("Checks Sign up",()=>{
    const _isEmailindb=querydata.isEmailindb

    afterEach(()=>{
        querydata.isEmailindb=_isEmailindb
    })

test("Signinnull",async()=>{
    const data = await request.post("/signin").send({});
    // console.log(data)
    expect(data.body).toEqual({success:false,message:"Fill all tabs"})
})


it("check uiqueness of email",async ()=>{
     querydata.isEmailindb= jest.fn(()=>({
        email:"j0@gmail.com",
        username:"joy",
        password:"0"
    }))

    const data = await request.post("/signin").send({
        email:"j0@gmail.com",
        username:"joy",
        password:"0"

    });
    expect(data.body).toEqual({message:"Enter another email",success:false,})
})
})