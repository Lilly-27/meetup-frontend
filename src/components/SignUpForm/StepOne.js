import React from 'react'

function StepOne() {
  return (
    <div className="stepone-container">
      <input type="text" placeholder="Email" required="true"/>
      <input type="text" placeholder="Password" required="true" />
      <input type="text" placeholder="Confirm Password" required="true"/>
    </div>
  )
}

export default StepOne