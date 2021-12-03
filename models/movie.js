import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  content: String,
  rating: Number,
  author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
}, 
{
timestamps: true
})

const movieSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  wikiUrl: String,
  youtubeUrl: String,
  reviews: [reviewSchema]
},
{
  timestamps: true,  
})

const Movie = mongoose.model('Movie', movieSchema)

export {
  Movie
}