const mongoose=require('mongoose')
const Schema=mongoose.Schema

const reviewSchema=new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    title: String,
    content: String,
    rating: {type: Number, default: 3},
})

const Review=mongoose.model('Review', reviewSchema)

module.exports=Review