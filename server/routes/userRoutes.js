const express=require('express')
const router=express.Router()

<<<<<<< HEAD
const {createUser, getUserById, getAllUsers, deleteAllCartItems, getUserCartItems, removeCartItemById,addToCart,userLogin, useReferral} = require('../controllers/userController')
||||||| merged common ancestors
const {createUser, getUserById, getAllUsers, deleteAllCartItems, getUserCartItems, removeCartItemById,addToCart,userLogin} = require('../controllers/userController')
=======
const {createUser, getUserById, getAllUsers, deleteAllCartItems, getUserCartItems, removeCartItemById,addToCart,userLogin, getClientSecretKey,productOrdered} = require('../controllers/userController')
>>>>>>> orders

router.post('/user/signup', createUser)

router.post('/user/login', userLogin)

router.get('/user/:id', getUserById)

router.get('/users', getAllUsers)

router.delete('/users/deletecart/:id', deleteAllCartItems)

router.post('/users/removeCartItemById', removeCartItemById)

router.get('/users/getUserCartItems/:id', getUserCartItems)

router.post('/users/addToCart', addToCart)

<<<<<<< HEAD
router.post('/useReferral', useReferral)
||||||| merged common ancestors
=======
router.post('/user/getClientSecretKey', getClientSecretKey)

router.post('/user/productOrdered', productOrdered)

>>>>>>> orders

module.exports=router