import customer_preferences from '../schemas/customerSchema.js'



const getCustomer= async(req,res)=>{
    try{
        const preferences= await customer_preferences.find({})
        res.status(200).send(preferences)
    }catch(err){
        res.status(500).send(err)
    }
}

const customerController = {
    getCustomer
}

export default customerController