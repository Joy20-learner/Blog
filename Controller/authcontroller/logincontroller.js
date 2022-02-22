
const { hashingpasswordverify } = require("../../Helper/hash")
const { generatetoken } = require("../../Helper/token")

const logincontroller = async (ctx) => {
    const logdata = ctx.state.data
    const { email, password } = ctx.request.body

    const token = generatetoken({ email })

    const unhash = await hashingpasswordverify(password, logdata.password)
    console.log(unhash)
    if (unhash) 
        return ctx.body = { success: true, message: token }
    
    return ctx.body = { success: false, message: "user not authorized" }
}

module.exports = logincontroller