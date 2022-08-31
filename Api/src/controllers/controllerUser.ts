import { RequestHandler } from "express";
const axios = require ('axios');
import {UserModel} from "../schemas/User";


export const postUser:RequestHandler = async (req,res) => {
    const user = new UserModel(req.body);
    
    let userBD = await UserModel.find({email:user.email})
    
    if(userBD.length > 0 ) {
        console.log("----->"+user.email)
        res.status(400).send("Ya existe ese correo electronico")
    } else {
        const saved = await user.save();
        res.status(200).json(saved)
    }
}

export const getUsers:RequestHandler = async (req,res) => {
    const user = await UserModel.find()
    const {email} =req.query
    try{
    if(email){
    // const user = await UserModel.find({email})
    console.log(email)
    const user02 = await UserModel.find({email})
    res.status(200).json(user02)
    }
    else{
        res.status(200).json(user)
    }
    }
    catch(error){
        console.log(error)
    }
}

export const getUserbyID:RequestHandler = async (req,res) => {
    const user = await UserModel.findById(req.params.id)

    res.status(200).json(user)
}

export const testUser:RequestHandler = (req,res) => {
    res.json("Lista de usuarios")
}

export const updateUser:RequestHandler = async (req,res) =>{

    const user = await UserModel.findOne({email:req.body.email})

    console.log(user)

    // const parametros = {
    // picture: req.body.picture?req.body.picture : user?.picture,
    // }

     const userBD = await UserModel.findOneAndUpdate({email:req.body.email}, {picture:req.body.picture?req.body.picture : user?.picture})

    //const userBD = await UserModel.find({email:"tomasscastillo99@gmail.com"})
   
    
    // "picture": "https://lh3.googleusercontent.com/a-/AFdZucqLkteyLRgaH9GP1OqdRzeuPhd9osBJbLdDZ6sqfA=s96-c"

    res.status(200).send(userBD)
    
}
