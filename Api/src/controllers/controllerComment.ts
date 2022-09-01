import { RequestHandler } from "express";
import {CommentModel} from "../schemas/Comment";

export const postComment:RequestHandler = async (req,res) => {
    const comment = new CommentModel(req.body);
    const commentSaved = await comment.save();
    res.status(200).json(commentSaved)
    // let commentBD = await CommentModel.find()
    
    // if(commentBD.length > 0 ) {
    //     res.status(400).send("Ya existe ese correo electronico")
    // } else {
    //     const commentSaved = await comment.save();
    //     res.status(200).json(commentSaved)
    // }
}

export const getComment:RequestHandler = async (req,res) => {
    
    let commentBD = await CommentModel.find()
    
    res.status(200).json(commentBD)
}