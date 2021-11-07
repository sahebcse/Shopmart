const express=require('express')
const router=express.Router()

const {createUser, getUserById, getAllUsers} = require('../controllers/userController')

router.post('/user', createUser)

router.get('/user/:id', getUserById)

router.get('/users', getAllUsers)


module.exports=router