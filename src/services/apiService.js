function getSuggestions(name, type) {
  return fetch(`/api/tasteDiveApi/${type}&${name}`)
  .then(res => res.json())
}

export {getSuggestions}

//import into handlesubmit function