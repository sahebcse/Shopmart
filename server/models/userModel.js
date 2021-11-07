const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    name: {
        type: String
    },
    age: {
        type: Number,
        default: 18
    },
    profilePic: {
        type: String
    },
    googleId: {
        type: String
    },
    email: String,
    cart: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    address: {
        type: String, 
        default: ''
    },
    password: String
})

const User=mongoose.model('User', userSchema)
module.exports=User