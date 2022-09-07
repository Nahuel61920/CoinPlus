import { RequestHandler } from "express";
const axios = require ('axios');
import {UserModel} from "../schemas/User";

const emailer = require ('../emailer')
const emailerTransAdm = require('../emailerTransAdm')
const emailerTransUser = require('../emailerTransUser')

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
            id: userFiltered?._id,
            name: userFiltered?.name,
            lastName: userFiltered?.lastName,
            email: userFiltered?.email,
            nickname: userFiltered?.nickname,
            picture: userFiltered?.picture,
            source: userFiltered?.source,
            date : userFiltered?.date,
            numberPhone : userFiltered?.numberPhone,
            country : userFiltered?.country,
            postalCod : userFiltered?.postalCod,
            documentNum : userFiltered?.documentNum,
            comments: userFiltered?.comments,
            blocked: userFiltered?.blocked,
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
        name:req.body.name?req.body.name : user?.name,
        lastName : req.body.lastName?req.body.lastName:user?.lastName,
        picture:req.body.picture?req.body.picture : user?.picture,
        numberPhone : req.body.numberPhone?req.body.numberPhone:user?.numberPhone,
        date: req.body.date?req.body.date:user?.date,
        country : req.body.country?req.body.country:user?.country,
        postalCod : req.body.postalCod?req.body.postalCod:user?.postalCod,
        documentNum : req.body.documentNum?req.body.documentNum:user?.documentNum,
    }

     const userBD = await UserModel.findOneAndUpdate({email:req.body.email}, parametros)
    emailer.sendMail(userBD)
    res.status(200).send(userBD)
    }
    catch(error){
        res.status(400).send("Please send a valid email")
    }
}


export const postTransfer:RequestHandler = async (req,res) =>{


    try{
    const { name, currentUser, rateExchange, metamaskAccount, cryptoSelected, amountToSend, amountToReceive } = req.body

    

    const parametros ={
        name,
        currentUser,
        rateExchange,
        metamaskAccount,
        cryptoSelected,
        amountToSend,
        amountToReceive,
    }
         
    
    emailerTransAdm.sendMail(parametros)
    emailerTransUser.sendMail(parametros)
    
    }
    catch(error){
        res.status(400).send("Error en recibir transaccion")
    }
}