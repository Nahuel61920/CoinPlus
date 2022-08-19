require("dotenv").config();
const { DB_USER, DB_PASSWORD} = process.env;

import User from "./schemas/User"

const mongoose = require("mongoose");
const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.resjtyz.mongodb.net/dbcoin`, options,(error:any) =>{
    error?console.log("**Connection Error**"):console.log("**Connected**")
})

export default mongoose;

// async function prueba (){
// const user = new User({
//     name: "Anthony",
//     lastName: "Perez",
//     email: "anthonyelmasmejor@gmail.com"
// })

// await user.save()
// console.log(user)
// }

// prueba()

