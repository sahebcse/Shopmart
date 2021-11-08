const express=require('express')
const router=express.Router()

const {createUser, getUserById, getAllUsers, deleteAllCartItems, getUserCartItems, removeCartItemById,addToCart,userLogin, useReferral} = require('../controllers/userController')

router.post('/user/signup', createUser)

router.post('/user/login', userLogin)

router.get('/user/:id', getUserById)

router.get('/users', getAllUsers)

router.delete('/users/deletecart/:id', deleteAllCartItems)

router.post('/users/removeCartItemById', removeCartItemById)

router.get('/users/getUserCartItems/:id', getUserCartItems)

router.post('/users/addToCart', addToCart)

router.post('/useReferral', useReferral)

module.exports=router