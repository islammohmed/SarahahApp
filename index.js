process.on('uncaughtException',(err)=>{
    console.log('error',err);
})
import express from 'express'
import { config } from 'dotenv'
import globalError from './src/middlewares/globalErrorHandel.js'
const app = express()
const port = 3000
import dbConnerction from './db/dbConnection/db.connection.js'
import userRouter from './src/moduels/user/user.route.js'
import messageRouter from './src/moduels/message/message.router.js'
import  AppError  from './utils/AppError.js'
dbConnerction()
config()
app.use(express.json());
app.use(globalError)
app.use('/api/v1/user',userRouter)
app.use('/api/v1/message',messageRouter)
app.use('*',(req,res,next)=>{
    next(new AppError (`can get this endpoint : ${req.originalUrl}`,404))
})
process.on('unhandledRejection',(err)=>{
    console.log('error',err);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))