import { User } from '../models/user.js'

function index(req, res) {
  User.find({})
  .then(users => res.json(users))
}

function addFollower(req, res) {
  User.findById(req.params.Id)
  .then(userFollowing => {
    return console.log(userFollowing)
  })
}

export {
  index,
  addFollower
}