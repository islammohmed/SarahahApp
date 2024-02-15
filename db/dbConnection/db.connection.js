import mongoose from 'mongoose';

const dbConnerction = ()=>{mongoose.connect('mongodb://0.0.0.0:27017/sarahaApp').then(()=>{
    console.log('connection Successfully');
}).catch((err)=>{
    console.log('there is error => ' + console.log(err));
})
}
export default dbConnerction
