import AppError from "../../utils/AppError.js"


export const validation = (schema)=>{
    return (req,res,next)=>{
        const {error} = schema.validate({...req.body,...req.params,...req.query,...req.header},{abortEarly : false})
        if(!error){
            next()
        }else{
            let err = []
            error.details.forEach((val) => {
                err.push(val.message)
            });
            next(new AppError(err,401))
        }
    }
}
