const Product=require('../models/productModel')
const Merchant=require('../models/merchantModel')
const Review=require('../models/reviewModel')

const {client}=require('../utility/redisClient')


const createProduct=async (req, res)=>
{
    try{
        console.log(req.body)
        const {productData, id} = req.body
        const product = await Product.create({
            name: productData.name,
            image: productData.image,
            brand: productData.brand,
            category: productData.category,
            price: productData.price,
            description: productData.description,
            stock: productData.stock,
            merchant:id,
            reviews: [],
            totalSold:0,
            totalProfit:0
        })
        const merchant=await Merchant.findById(id)
        await merchant.products.addToSet(product._id)
        await merchant.save()
        res.status(201).json(product)
        client.del('home')
        
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
        product.name=productData.name
        product.image=productData.image
        product.brand=productData.brand
        product.category-productData.category
        product.price=productData.price
        product.description=productData.description
        await product.save()
        res.json(product)
        client.del('home')
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
        const products=await Product.find().populate({path: 'reviews'})
        res.json(products)
        client.setex('home', 300, JSON.stringify(products))

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
        const merchant=await Merchant.findById(productData.merchantId)
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
        console.log("aaya hai",req.params.merchantId)
        const products=await Product.find({merchant:req.params.merchantId}).sort({totalProfit:1})
        console.log(products)
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
        client.setex(name, 300, JSON.stringify(products))
    }
    catch(error)
    {
        console.log(error)
        res.status(404).json({message: error})
    }
}


const addReview=async (req, res)=>
{
    console.log(req.body)
    try{
        const tempReview=new Review({
            user: req.body.userId,
            title: req.body.title,
            content: req.body.content,
            rating: req.body.rating
        })

        const savedReview=await tempReview.save()
        console.log(savedReview)
        res.status(201).json(savedReview)
        const product=await Product.findById(req.body.productId)
        await product.reviews.addToSet(savedReview._id)
        await product.save()
        console.log(product)
        client.del('home')
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