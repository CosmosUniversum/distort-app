import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  content: String,
  rating: Number,
  author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
}, 
{
timestamps: true
})


const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}