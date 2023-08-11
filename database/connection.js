import mongoose from "mongoose";

 const db= "mongodb+srv://visakhvisa1234:admin@cluster0.vgau3b0.mongodb.net/mitz-db?retryWrites=true&w=majority"

const database= mongoose.connect(db,{
    useNewUrlParser:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('db connected');
}).catch((err)=>{
    console.log(err);
})

export default database