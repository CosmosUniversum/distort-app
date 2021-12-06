import mongoose from 'mongoose'


const listSchema = new mongoose.Schema({
  name: String,
  description: String,
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  list: [{type: mongoose.Schema.Types.ObjectId, ref: "Suggestion"}]
},
{
  timestamps: true,  
})

const List = mongoose.model('List', listSchema)

export {
  List
}