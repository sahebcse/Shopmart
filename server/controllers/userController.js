const User=require('../models/userModel')


const createUser=async (req, res)=>
{
    try
    {
        const {result, address} = req.body
        console.log(address)
        const user = await User.create({
            name:result.name,
            email:result.email,
            profilePic:result.imageUrl,
            address:address
        })
        console.log(user)
        res.status(200).json(user)

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


module.exports={createUser, getUserById, getAllUsers, deleteAllCartItems, getUserCartItems, removeCartItemById, addToCart,userLogin}