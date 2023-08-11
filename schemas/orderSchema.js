import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    customer_id :{
        type:String
    },
    preference:{
        type:String
    },
    date:{
        type:String
    }
})

export default mongoose.model('orders',orderSchema)