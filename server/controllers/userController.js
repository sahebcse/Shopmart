const User=require('../models/userModel')


const createUser=async (req, res)=>
{
    const user = await User.findOne({googleId:req.body.googleId});
    if(user){
        console.log('login', user)
        return res.status(201).json(user);
    }

    else
    {
        
        const tempUser=await User.create({
        name: req.body.name,
        email: req.body.email,
        googleId:req.body.googleId,
        profilePic:req.body.imageUrl,
        cart: []
        })
        console.log(tempUser)
        res.status(200).json({user: tempUser})
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


module.exports={createUser, getUserById, getAllUsers}