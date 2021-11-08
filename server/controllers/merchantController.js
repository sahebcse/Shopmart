const Merchant = require('../models/merchantModel')

const createMerchant=async (req, res)=>
{
    try
    {
        const {result, bankDetails, address} = req.body
        const merchant = await Merchant.create({
            name:result.name,
            email:result.email,
            logo:result.imageUrl,
            address:address,
            bankDetails:bankDetails,
            storeName:address.storeName
        })
        console.log(merchant)
        res.status(200).json(merchant)

    }
    catch(error)
    {
        console.log(error)
        res.status(403).json({message:"unable to create vecndor account at the moment"})
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

const loginMerchant=async (req, res)=> {
    try {
        const merchant = await Merchant.findOne({email:req.body.email}).populate('products')
        console.log("login",merchant)
        res.status(200).json(merchant)
    } catch (error) {
        console.log(error.message)
        res.status(404).json({message:"Merchant not found"})
    }
}

const getAllMerchants = async (req, res)=> {
    const user = await Merchant.find()
    console.log("here",user)
    res.json(user)
}



module.exports={createMerchant, getMerchantById, loginMerchant,getAllMerchants}