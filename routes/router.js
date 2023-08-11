import express from 'express'
import productController from '../controllers/productController.js'
import customerController from '../controllers/customerController.js'
import orderController from '../controllers/orderController.js'

const router= new express.Router()


router.get('/products',productController.getproducts)
router.get('/customerp',customerController.getCustomer)
router.get('/orders',orderController.getorders)
router.get('/popular',productController.findMostPopularProduct)


export default router