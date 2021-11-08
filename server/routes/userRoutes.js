const express=require('express')
const router=express.Router()

const {createUser, getUserById, getAllUsers, deleteAllCartItems, getUserCartItems, removeCartItemById} = require('../controllers/userController')

router.post('/user', createUser)

router.get('/user/:id', getUserById)

router.get('/users', getAllUsers)

router.delete('/users/deletecart/:id', deleteAllCartItems)

router.post('/users/removeCartItemById', removeCartItemById)

router.get('/users/getUserCartItems/:id', getUserCartItems)


module.exports=router