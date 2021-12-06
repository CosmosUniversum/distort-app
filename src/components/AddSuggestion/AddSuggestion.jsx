import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { addToList } from '../../services/listService'

const AddSuggestion = ({suggestion}) => {
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      console.log(`clicked  ${suggestion.Name}`)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    >
        <button >Add To List</button>
    </form>
  );
}

export default AddSuggestion