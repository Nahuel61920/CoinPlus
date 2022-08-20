import { RequestHandler } from "express";
const axios = require ('axios');
import {UserModel} from "../schemas/User";


export const postUser:RequestHandler = async (req,res) => {
    const user = new UserModel(req.body)
    const saved = await user.save();

    res.status(200).json(saved)
}

export const getUsers:RequestHandler = async (req,res) => {
    const user = await UserModel.find()

    res.status(200).json(user)
}

export const getUserbyID:RequestHandler = async (req,res) => {
    const user = await UserModel.findById(req.params.id)

    res.status(200).json(user)
}

export const testUser:RequestHandler = (req,res) => {
    res.json("Lista de usuarios")
}
