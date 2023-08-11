import customer_preferences from '../schemas/customerSchema.js'
import productSchema from "../schemas/productSchema.js";



const findMostPopularProduct = async () => {
    const productss = await productSchema.find();
    const customerPreferences = await customer_preferences.find();
  
    let productCounts = {};
    for (const product of productss) {
      productCounts[product.productid] = 0;
    }
  
    for (const customerPreference of customerPreferences) {
      productCounts[customerPreference.productid]++;
    }
  
    const mostPopularProduct = Object.keys(productCounts).reduce((prev, current) => {
      if (productCounts[prev] < productCounts[current]) {
        return current;
      } else {
        return prev;
      }
    });
  
    
      const productid= mostPopularProduct
      const productname= productSchema.findOne({ productid: mostPopularProduct }).name

      console.log(productid);
      console.log(productname);
  };
  
  



const getproducts= async(req,res)=>{
    try{
        const allproducts= await productSchema.find({})
        res.status(200).send(allproducts)
    }
    catch(err){
        res.status(500).send(err)
    }
}




const productController = {
    getproducts,findMostPopularProduct
}

export default productController