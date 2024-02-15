import joi from 'joi'


export const addmessageValidation = joi.object({
    content:joi.string().min(2).max(200).required(),
    recivedId:joi.string().hex().length(24).required()
})