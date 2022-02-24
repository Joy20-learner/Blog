
const og_username= 'JOY'
const og_email= 'JOY@socialpilot.co'

console.log(Array.from(Array(10).keys()))
const finalData = Array.from(Array(10).keys()).map((number)=>{
    return {
    "username": `${og_username}${number}`,
    "email": `${og_email}${number}`,
    "number": 1234567889,
    "password": "tarivalue",
    "uuid": `;;;`,
}})

console.log(finalData)