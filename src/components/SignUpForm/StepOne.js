import React from 'react'

function StepOne({formState, handleChange}) {
  // console.log(formState.email)
  // console.log(formState.password)
  return (
    <div className="stepone-container">
      <input 
      type="text" 
      placeholder="Email" 
      id="email"
      value={formState.email}
      onChange={handleChange}
      required />

      <input 
      type="text" 
      placeholder="Password" 
      id="password"
      value={formState.password}
      onChange={handleChange}
      required />

    </div>
  )
}

export default StepOne