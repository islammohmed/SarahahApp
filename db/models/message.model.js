import mongoose  from "mongoose";
const messageSchema = new mongoose.Schema({
    content: {
        type:String,
        require:true
    },
    recivedId: {
        type: mongoose.Types.ObjectId,
        ref : 'User'
    }
},
{
    timestamps:true
})
const messageModel = mongoose.model('message',messageSchema)
export default messageModel