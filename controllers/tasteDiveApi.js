import axios from "axios";
import { Profile } from "../models/profile";
import { Movie } from "../models/music";
import { Music } from "../models/music";
import { Podcast } from "../models/podcast"

function getSuggestions(req, res) {
  axios.get(`https://tastedive.com/api/similar?q=${req.params.name}&type=${req.params.type}&k=${process.env.API_KEY}&info=1`)
  .then(apiResponse => {
    res.json(apiResponse.data)
  })
}

export {
  getSuggestions
}