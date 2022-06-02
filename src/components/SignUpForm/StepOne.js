import React from 'react'

function StepOne({initialState}) {
  return (
    <div className="stepone-container">
      <input 
      type="text" 
      placeholder="Email" 
      value={initialState.email}
      onChange={(e) => {initialState()
        
      }}
      required="true"/>
      <input type="text" placeholder="Password" required="true" />
      <input type="text" placeholder="Confirm Password" required="true"/>
    </div>
  )
}

export default StepOne