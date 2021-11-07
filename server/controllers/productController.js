const Product=require('../models/productModel')
const Merchant=require('../models/merchantModel')
const Review=require('../models/reviewModel')

const createProduct=async (req, res)=>
{
    try{
        const tempProduct=new Product({
            name: req.body.name,
            image: req.body.image,
            brand: req.body.brand,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description,
            reviews: []
        })
    
        const savedProduct=await tempProduct.save()
        res.status(201).json(savedProduct)
        const merchant=await Merchant.findById(req.body.merchantId)
        await merchant.products.addToSet(savedProduct._id)
        await merchant.save()
        
    }
    catch(error)
    {
        console.log(error)
        res.status(400).json({message: "The product couldn't be created"})
    }
    

}

const getProductById=async (req, res)=>
{
    try{
        const product=await Product.findById(req.params.id).populate({path: 'reviews', populate: {path: 'user'}})
        res.json(product)
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json({message: "Product could not be found"})
    }

}

const editProductById=async (req, res)=>
{
    try{
        const product=await Product.findById(req.params.id)
        product.name=req.body.name
        product.image=req.body.image
        product.brand=req.body.brand
        product.category-req.body.category
        product.price=req.body.price
        product.description=req.body.description
        await product.save()
        res.json(product)
    }   
    catch(error)
    {
        console.log(error)
        res.status(400).json({message: "Product couldn't be successfully edited"})
    }
}

const getAllProducts=async (req, res)=>
{
    try{
        const products=await Product.find()
        res.json(products)
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json({message: 'Products could not be found'})
    }
}

const deleteProductById=async (req, res)=>
{
    try{
        const deletedProduct=await Product.findByIdAndDelete(req.params.id)
        res.json(deletedProduct)
        const merchant=await Merchant.findById(req.body.merchantId)
        await merchant.product.pull(req.params.id)
        await merchant.save()
    }
    catch(error)
    {
        console.log(error)
        res.status(501).json({message: "Product could not be deleted successfully"})
    }
}

const getProductsByMerchant=async (req, res)=>
{
    try{
        const products=await Merchant.findById(req.params.merchantId).populate('products')
        res.json(products)
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json({message: 'Products not found'})
    }
}

const searchProducts=async (req, res)=>
{
    const name=req.params.query
    try{

        const products=await Product.find({name: new RegExp(name)})
        res.json(products)
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json({message: error})
    }
}


const addReview=async (req, res)=>
{
    try{
        const tempReview=new Review({
            user: req.body.userId,
            title: req.body.title,
            content: req.body.content,
            rating: req.body.rating
        })

        const savedReview=await tempReview.save()
        res.status(201).json(savedReview)
    }
    catch(error)
    {
        console.log(error)
        res.status(400).json({message: "Review couldn't be added"})
    }
}

const getProductsByCategory=async (req, res)=>
{
    try
    {
        const products=await Product.find({category: req.params.category}).populate('reviews')
        res.json(products)
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json(products)
    }
}


const getCategoriesList=(req, res)=>
{
    Product.find((err, products)=>
    {
        if (err)
        {
            console.log(err)

        }
        else
        {
            console.log(products)
            let set=new Set()
            for (var i=0;i<products.length;i++)
            {
                set.add(products[i].category)
            }
            return res.json(Array.from(set))
        }
    })
}

module.exports={createProduct, getProductById, editProductById, getAllProducts, deleteProductById, getProductsByMerchant, addReview, searchProducts, getProductsByCategory, getCategoriesList}