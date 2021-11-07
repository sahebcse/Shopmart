const express=require('express')
const router=express.Router()

const {createMerchant, getMerchantById, loginMerchant} =  require('../controllers/merchantController')

router.post('/merchant/signup', createMerchant)

router.get('/merchant/:id', getMerchantById)

router.post('/merchant/login', loginMerchant)

module.exports=router