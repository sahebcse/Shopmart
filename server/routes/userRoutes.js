const express=require('express')
const router=express.Router()

<<<<<<< HEAD
<<<<<<< HEAD
const {createUser, getUserById, getAllUsers, deleteAllCartItems, getUserCartItems, removeCartItemById,addToCart,userLogin, useReferral} = require('../controllers/userController')
||||||| merged common ancestors
const {createUser, getUserById, getAllUsers, deleteAllCartItems, getUserCartItems, removeCartItemById,addToCart,userLogin} = require('../controllers/userController')
=======
||||||| merged common ancestors
=======
<<<<<<< HEAD
>>>>>>> Referral Added
const {createUser, getUserById, getAllUsers, deleteAllCartItems, getUserCartItems, removeCartItemById,addToCart,userLogin, getClientSecretKey,productOrdered} = require('../controllers/userController')
<<<<<<< HEAD
>>>>>>> orders
||||||| merged common ancestors
=======
||||||| merged common ancestors
const {createUser, getUserById, getAllUsers, deleteAllCartItems, getUserCartItems, removeCartItemById,addToCart,userLogin} = require('../controllers/userController')
=======
const {createUser, getUserById, getAllUsers, deleteAllCartItems, getUserCartItems, removeCartItemById,addToCart,userLogin, useReferral} = require('../controllers/userController')
>>>>>>> Referral Added
>>>>>>> Referral Added

router.post('/user/signup', createUser)

router.post('/user/login', userLogin)

router.get('/user/:id', getUserById)

router.get('/users', getAllUsers)

router.delete('/users/deletecart/:id', deleteAllCartItems)

router.post('/users/removeCartItemById', removeCartItemById)

router.get('/users/getUserCartItems/:id', getUserCartItems)

router.post('/users/addToCart', addToCart)

<<<<<<< HEAD
<<<<<<< HEAD
router.post('/useReferral', useReferral)
||||||| merged common ancestors
=======
||||||| merged common ancestors
=======
<<<<<<< HEAD
>>>>>>> Referral Added
router.post('/user/getClientSecretKey', getClientSecretKey)

router.post('/user/productOrdered', productOrdered)

<<<<<<< HEAD
>>>>>>> orders
||||||| merged common ancestors
=======
||||||| merged common ancestors
=======
router.post('/useReferral', useReferral)
>>>>>>> Referral Added
>>>>>>> Referral Added

module.exports=router