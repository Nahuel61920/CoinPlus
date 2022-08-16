const mongoose = require("mongoose");
const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect('mongodb+srv://pfcoinplus:pfcoinplus@cluster0.resjtyz.mongodb.net/test', options,(error:any) =>{
    error?console.log("**Connection Error**"):console.log("**Connected**")
})

module.exports= {mongooseUser:mongoose}