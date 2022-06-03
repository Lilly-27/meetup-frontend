import React from 'react'

function StepTwo({formState, handleChange}) {
  console.log(formState.name)
  console.log(formState.address)

  return (
    <div className="steptwo-container">
      <input 
      type="text" 
      placeholder="Full Name" 
      id="name"
      value={formState.name}
      onChange={handleChange}
      required />
      
      <input 
      type="text" 
      placeholder="Location (city, state)" 
      id="user_location"
      value={formState.user_location}
      onChange={handleChange}
      required />

      <input 
      type="text" 
      placeholder="Link to Github" 
      id="link_to_github"
      value={formState.link_to_github}
      onChange={handleChange}
       />

      
    </div>
  )
}

export default StepTwo