import { RequestHandler } from "express";
const axios = require ('axios');
import {UserModel} from "../schemas/User";


export const postUser:RequestHandler = async (req,res) => {
    const user = new UserModel(req.body);
     
    let userBD = await UserModel.find({email:user.email})
    
    if(userBD.length > 0 ) {
        res.status(400).send("Ya existe ese correo electronico")
    } else {
        const saved = await user.save();
        res.status(200).json(saved)
    }
}

export const getUsers:RequestHandler = async (req,res) => {
    const {email} =req.query
    try{
    if(email){
        console.log("----->"+req.query.email)
        // const user = await UserModel.find({email})
        console.log(email)
        const userFiltered = await UserModel.findOne({email})
        
        const dataChanged ={
            name: userFiltered?.name,
            email: userFiltered?.email,
            nickname: userFiltered?.nickname,
            picture: userFiltered?.picture,
            source: userFiltered?.source,
        }
        res.status(200).json(dataChanged)
    }
    else{
        const user = await UserModel.find()
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


    try{
    const user = await UserModel.findOne({email:req.body.email})

    console.log(user)

    const parametros ={
        picture:req.body.picture?req.body.picture : user?.picture,
        numberPhone : req.body.numberPhone?req.body.numberPhone:user?.numberPhone,
        country : req.body.country?req.body.country:user?.country,
        postalCod : req.body.postalCod?req.body.postalCod:user?.postalCod,
    }

     const userBD = await UserModel.findOneAndUpdate({email:req.body.email}, {picture:req.body.picture?req.body.picture : user?.picture})

    res.status(200).send(userBD)
    }
    catch(error){
        res.status(400).send("Please send a valid email")
    }
}
