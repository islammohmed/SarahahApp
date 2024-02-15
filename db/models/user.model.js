import mongoose  from "mongoose";
const userSchema = new mongoose.Schema({
    userName: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isVerify:{
        type:Boolean,
        default:false
    }

},
{
    timestamps:true
})
const userModel = mongoose.model('User',userSchema)
export default userModel
