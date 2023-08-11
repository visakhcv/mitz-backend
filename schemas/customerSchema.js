import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    preferenceId :{
        type:String
    },
    productid:{
        type:Number,
    },
    
})

export default mongoose.model('customer_preferences',customerSchema)