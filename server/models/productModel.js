const mongoose=require('mongoose')
const Schema=mongoose.Schema


const productSchema=new Schema({
    name: {
        type: String, 
        required: true
    },
    image: {
        type: String,
        default: 'https://forestprod.org/global_graphics/default-store-350x350.jpg'
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'General'
    },
    price: {
        type: Number, 
        default: 0
    },
    description: {
        type: String,
        default: ''
    },
    rating: {type: Number, default: 0},
    stock: {type: Number, default: 1},
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]


})

const Product=mongoose.model('Product', productSchema)
module.exports=Product