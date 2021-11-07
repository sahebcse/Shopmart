const Merchant = require('../models/merchantModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const createMerchant=async (req, res)=>
{
    try
    {
        const hashedPassword=await bcrypt.hash(req.body.password, 10)
        const merchant=new Merchant({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            products: [],
            address: req.body.address,
            logo: req.body.logo,
            storeName: req.body.storeName,
            password: hashedPassword
        })
        const savedMerchant=await merchant.save()
        res.json(savedMerchant)
    }
    catch(error)
    {
        console.log(error)
        res.status(403).json({})
    }
}

const getMerchantById=async (req, res)=>
{
    try{
        const merchant=await Merchant.findById(req.params.id).populate('products')
        res.json(merchant) 
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json({message: 'Merchant not found'})
    }
}

const loginMerchant=(req, res)=>
{
    console.log(req.body)
    Merchant.findOne({email: req.body.email}, (err, user)=>
    {
        if (err)
        {
            console.log(err)
            return reply.send(err)
        }
        else
        {
            console.log(user)
            bcrypt.compare(req.body.password, user.password, function(berr, result)
            {
                if (berr)
                {
                    console.log(berr)
                }
                else
                {
                    if (result)
                    {
                        const token=jwt.sign({id:user._id}, 'fsdfsdfsdfsdfdsfds') //put process.env.SECRET_KEY here
                        res.json({result: user, token: token})
                    }
                }
            })
        }
    })
}

module.exports={createMerchant, getMerchantById, loginMerchant}