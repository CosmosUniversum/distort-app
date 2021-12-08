import { User } from '../models/user.js'

function index(req, res) {
  User.find({})
  .then(users => res.json(users))
}

function follow(req, res) {
  User.findById(req.user.profile)
  .populate('profile')
  .then(profile => {
    console.log(profile)
  })
  .catch((err) => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  follow
}