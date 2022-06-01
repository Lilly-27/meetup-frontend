import React from 'react'

function StepTwo() {
  return (
    <div className="steptwo-container">
      <input type="text" placeholder="Full Name" required="true"/>
      <input type="text" placeholder="Location (city, state)" required="true" />
      <input type="text" placeholder="Link to Github" />
    </div>
  )
}

export default StepTwo