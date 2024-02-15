const globalError = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    res.json({'error': err.message}).status(err.statusCode)
}
export default globalError