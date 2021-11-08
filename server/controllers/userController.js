const User=require('../models/userModel')
const Order=require('../models/orderModel')
const Product = require('../models/productModel')
const Merchant = require('../models/merchantModel')
const stripe=require('stripe')('sk_test_51J8GAsSH4Sh8XwNi5Xis1Tr8xfxwmGyCAQLXeYjduWsCwIFxu11ai2ysISs4JmcO8NtZhwOZNpkzLSm0sfb56dnP00R8VRxPBm')

const createUser=async (req, res)=>
{
    try
    {
        const {result, address} = req.body
        console.log(req.body)
        const isUser = await User.find({email:req.body.email})
        if(isUser.length===0) {
            const user = await User.create({
                name:result.name,
                email:result.email,
                profilePic:result.imageUrl,
                address:address
            })
            console.log(user)
            res.status(200).json(user)
        }else{
            console.log(isUser)
            res.status(400).json({message:"user exists"})
        }


    }
    catch(error)
    {
        console.log(error)
        res.status(403).json({message:"unable to create user account at the moment"})
    }
}

const userLogin=async (req, res)=> {
    try {
        const merchant = await User.find({email:req.body.email}).populate('cart')
        console.log("login",merchant)
        res.status(200).json(merchant)
    } catch (error) {
        console.log(error.message)
        res.status(404).json({message:"user not found"})
    }
}


const getUserById=async (req, res)=>
{
    try{
        const user=await User.findById(req.params.id)
        res.json(user)
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json({
            message: "User not found"
        })
    }
    
    
}

const getAllUsers=async (req, res)=>
{
    try{
        const users=await User.find().populate('cart')
        res.json(users)
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json(users)
    }
}

const deleteAllCartItems=async (req, res)=>
{
    try{
        const users=await User.findById(req.params.id)
        users.cart = []
        await users.save()
        res.status(200).json({message: "Cart deleted successfully"})
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json({message: "Cart not deleted"})
    }
}

const getUserCartItems=async (req, res)=>
{
    try{
        const users=await User.findById(req.params.id).populate('cart')
        res.status(200).json(users.cart)
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json({message: "Cart not deleted"})
    }
}

const removeCartItemById=async (req, res)=>
{
    try{
        const {userId, itemId} = req.body
        const users=await User.findById(userId)
        const newcart = users.cart.filter(cartItem => cartItem.id !== itemId)
        users.cart = newcart
        await users.save()
        res.status(200).json(users.cart)
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json({message: "Cart not deleted"})
    }
}

const addToCart=async (req, res)=>
{
    try{
        const {id, userId} = req.body
        const users=await User.findById(userId)
        const newcart = users.cart
        newcart.push(id)
        users.cart = newcart
        await users.save()
        res.status(200).json(users.cart)
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json({message: "Cart not updated"})
    }
}

const getClientSecretKey= async (req, res)=>{
    try {
        console.log('this is working')
        const {totalPrice} = req.body;
        console.log(totalPrice)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: parseInt(totalPrice),
            currency:'INR',
        })

        console.log('leaving....',paymentIntent.client_secret)

        res.status(200).json({clientSecret: paymentIntent.client_secret});
    } catch (error) {
        console.log(error);
    }
}

const productOrdered= async (req, res)=>{
    try {
        const {userEmail, products, cart, address} = req.body
        console.log(req.body)
        const user = await User.find({email:userEmail})
        products.map(async (item)=>{
            const order = await Order.create({
                product : item,
                customer:user._id, 
                amount:item.price,
                isPaid:true,
                address:address,
                merchantId:item.merchant
            })
            
            const prod = await Product.findById(item._id)
            prod.totalSold = prod.totalSold+1
            prod.totalPrice += prod.totalPrice
            
            await prod.save()
            
            const merchant = await Merchant.findById(item._id)
            if(merchant){
                merchant.profits += item.price
                
                await merchant.save()
            }
        })
        
        console.log('done')
        if(cart){
            await user.save()
            user.cart = []
        }

    } catch (error) {
        console.log(error);
    }
}


module.exports={createUser, getUserById, getAllUsers, deleteAllCartItems, getUserCartItems, removeCartItemById, addToCart,userLogin, getClientSecretKey, productOrdered}