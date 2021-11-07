const express=require('express')
const router=express.Router()

const {createOrder, getOrderById} = require('../controllers/orderController')

router.post('/order', createOrder)

router.get('/order/:id', getOrderById)

module.exports=router
