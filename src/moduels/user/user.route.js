import express from 'express'
import {validation} from './../../middlewares/validation.js'
import { isVerify, signIn, signUp } from './controller/user.js'
import { signUpValidation, signinValidation } from './user.validation.js'
const userRouter = express.Router()


userRouter.post('/signUp',validation(signUpValidation),signUp)
userRouter.post('/signIn', validation(signinValidation) ,signIn)
userRouter.get('/verify/:token',isVerify)


export default userRouter