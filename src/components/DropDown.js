import React from 'react'
import { useState } from "react"



function DropDown() {
const URL = 'https://meetup-for-devs.herokuapp.com/api/events'
const initialTag = { tag: '' }
const [tagState, setTagState] = useState(initialTag)

const handleTag = (event) => {
    setTagState(event.target.value)
  }
  return (
    
        <label>
            Event Type: 
          <select value={tagState} onChange={handleTag}>
            <option value="coffee_chats">Coffee Chats</option>
            <option value="coding_sessions">Coding Sessions</option>
            <option value="socials">Socials</option>
          </select>
          </label>
  )
}

export default DropDown