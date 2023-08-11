import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productid :{
        type:Number
    },
    name:String,
    price:{
        type:Number
    }
})

export default mongoose.model('products',productSchema)