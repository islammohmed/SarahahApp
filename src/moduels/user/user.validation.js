import joi from 'joi'



export const signUpValidation =  joi.object({
    userName:joi.string().min(3).max(15).required(),
    email:joi.string().email().required(),
    password:joi.string().pattern(/^[A-z][a-z0-9@#]{8,40}$/),
    rePassword:joi.valid(joi.ref('password')).required(),
})




export const signinValidation = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
})