import jwt from 'jsonwebtoken'
import AppError from './../../utils/AppError.js'
import userModel from './../../db/models/user.model.js'
const auth = async(req,res,next)=>{
const token = req.header('token')
if(!token){
    next(new AppError('invalid Token',404))
}
const payload = jwt.verify(token,process.env.JWT_SECRET)
if(!payload.userId){
    next(new AppError('invalid paylaod',401))
}
const user = await userModel.findById(payload.userId)
if(!user){
    next(new AppError('invalid user id ',401)) 
}
req.user = user
next()
}
export default auth