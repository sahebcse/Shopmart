const mongoose=require('mongoose')
const Schema=mongoose.Schema

const orderSchema=new Schema({
    product: {type: Schema.Types.ObjectId, ref: 'Product'},
    quantity: {
        type: Number,
        default: 1
    },
    customer: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    address: {
        type: String,
        default: ''
    },
    amount: {
        type: Number, 
        required: true
    },
    isPaid: {
        type: Boolean,
        default: true
    },
    paymentMethod: {
        type: String,
        default: 'Online'
    },
    isDelivered: {
        type: Boolean,
        default: false
    },
    isRefunded: {
        type: Boolean,
        default: false
    },
    date:{
        type:Date,
        default: Date.now()
    },
    merchantId :[{type: Schema.Types.ObjectId, ref: 'Merchant'}]

})

const Order=mongoose.model('Order', orderSchema)

module.exports=Order