import orders from "../schemas/orderSchema.js";

const getorders= async(req,res)=>{
    try{
        const allorders= await orders.find({})
        res.status(200).send(allorders)
    }
    catch(err){
        res.status(500).send(err)
    }
}

const orderController = {
    getorders
}

export default orderController