function addToList(suggestion) {
  return fetch(`api/lists`, {
    method: 'POST'
  })
  .then(res => {
    return res.json()
  }) 
  .catch(err => {
    console.log(err)
  })
}

export {
  addToList
}