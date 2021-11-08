const mongoose=require('mongoose')
const Schema=mongoose.Schema

const merchantSchema=new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 18
    },
    email: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        default: 'https://www.graphicsprings.com/filestorage/stencils/3055581cff0526602142cbb0bfba9fca.png?width=500&height=500'
    },
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    theme: {
        type: String,
        default: ''
    },
    address: Object,
    bankDetails:{
        type:Object
    },
    profits:Number,
    storeName: {
        type: String,
        required: true
    }
})

const Merchant=mongoose.model('Merchant', merchantSchema)

module.exports=Merchant

