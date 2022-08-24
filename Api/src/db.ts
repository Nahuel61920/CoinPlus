require("dotenv").config();
//const {MONGO_URL} = process.env;

//import User from "./schemas/User"

const mongoose = require("mongoose");
const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(process.env.MONGO_URL, options,(error:any) =>{
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

