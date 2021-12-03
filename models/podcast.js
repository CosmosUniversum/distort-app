import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  content: String,
  Rating: Number,
  Author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
}, 
{
timestamps: true
})

const podcastSchema = new mongoose.Schema({
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

const Podcast = mongoose.model('Podcast', podcastSchema)

export {
  Podcast
}