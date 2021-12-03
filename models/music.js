import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  content: String,
  rating: Number,
  author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
}, 
{
timestamps: true
})

const musicSchema = new mongoose.Schema({
  name: String,
  type: String,
  tescription: String,
  wikiUrl: String,
  youtubeUrl: String,
  reviews: [reviewSchema]
},
{
  timestamps: true,  
})

const Music = mongoose.model('Music', musicSchema)

export {
  Music
}