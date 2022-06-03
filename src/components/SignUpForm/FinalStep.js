import React from 'react'

function FinalStep({formState, handleChange}) {
  console.log(formState.hobbies)
  return (
    <div className="finalstep-container">
      <input 
      type="text" 
      placeholder="Hobbies" 
      id="hobbies"
      value={formState.hobbies}
      onChange={handleChange}
      required />
    </div>
  )
}

export default FinalStep