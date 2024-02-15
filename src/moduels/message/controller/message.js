import messageModel from "../../../../db/models/message.model.js"
import userModel from "../../../../db/models/user.model.js"
import AppError from "../../../../utils/AppError.js"
import { asyncError } from "../../../middlewares/catchError.js"
import jwt from 'jsonwebtoken'

export const addMessage = asyncError(async(req,res,next)=>{
    let {content,recivedId} = req.body
    const user = await userModel.findById( recivedId )
    if(!user) next(new AppError('user not founded', 404))
    await messageModel.insertMany({content,recivedId})
    res.send({msg:'success'})
})

export const getMessages = asyncError(async(req,res,next)=>{
    const token = req.header('token')
    jwt.verify(token,process.env.JWT_SECRET,async(err,decoded)=>{
        if(err) next(new AppError(err, 404))
    const messages = await messageModel.find({recivedId : decoded.userId})
    console.log(messages);
    res.send({msg:'success', messages})
    })
})