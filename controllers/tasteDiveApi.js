import axios from "axios";

function getSuggestions(req, res) {
  axios.get(`https://tastedive.com/api/similar?q=${req.params.name}&type=${req.params.type}&k=${process.env.API_KEY}&info=1`)
  .then(apiResponse => {
    res.json(apiResponse.data)
  })
}

export {
  getSuggestions
}