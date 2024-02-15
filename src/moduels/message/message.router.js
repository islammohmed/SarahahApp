import express from 'express'
import { addMessage, getMessages } from './controller/message.js'
const messageRouter = express.Router()
import auth from './../../middlewares/auth.middlewares.js'
import { addmessageValidation } from './message.validation.js'
import {validation} from './../../middlewares/validation.js'

messageRouter.post('/',validation(addmessageValidation),addMessage)
messageRouter.get('/getmessages',auth,getMessages)


export default messageRouter