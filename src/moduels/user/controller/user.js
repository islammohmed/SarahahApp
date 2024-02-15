import userModel from './../../../../db/models/user.model.js'
import bcrypt, { hashSync } from 'bcrypt'
import {asyncError} from './../../../middlewares/catchError.js'
import appError from './../../../../utils/AppError.js'
import jwt from 'jsonwebtoken'
import {sendEmail} from './../../../email/sendEmal.js'
export const signUp = asyncError(async(req,res,next)=>{
    let {userName,email,password} = req.body
    const checkUser = await userModel.findOne( {email})
    if(checkUser){
        next(new appError('this Email already Exist',409))
    }
    // hash password
    const hashedpassword = bcrypt.hashSync(password,8)
    const user =  await userModel.insertMany({userName,email,password : hashedpassword})
    sendEmail(email)
    res.send({msg:'success',user})
})

export const signIn = asyncError(async(req,res,next)=>{
    let {email,password} = req.body
    const user = await userModel.findOne({email})
    if(!user) next(new appError('This Email not Founded',404))
    const checkPassword = bcrypt.compareSync(password,user.password)
    if(!checkPassword) next(new appError('Password incorrect',404)) 
    const token = jwt.sign({userId : user._id , email : user.email},process.env.JWT_SECRET)
    res.send({msg:'success',token})
})

export const isVerify = async(req,res,next)=>{
    jwt.verify(req.params.token,process.env.JWT_SECRET,async(err,decoded)=>{
        if(err) next(new appError(err,404))
        await userModel.findOneAndUpdate({email : decoded.email},{isVerify: true})
        res.send({msg :'success'})
    })

}