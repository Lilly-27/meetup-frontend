import React, {useState, useEffect} from 'react';
import Footer from './Footer';
import StepOne from './SignUpForm/StepOne';
import StepTwo from './SignUpForm/StepTwo';
import FinalStep from './SignUpForm/FinalStep';


const SignUp = () => {
  const[step, setStep]=useState(0);
  const FormSteps = ["Step One: Sign Up", "Step Two: Personal Info", "Step Three: Hobbies"];
  const StepDisplay = () => {
    if (step === 0) {
      return <StepOne />
    } else if (step === 1){
      return <StepTwo />
    } else {
      return <FinalStep />
    }
  }

  return (
    <div className="form">
      <div className="form-progressbar"></div>
      <div className="form-container">
        <div className="form-header">
          <h2>{FormSteps[step]}</h2>
        </div>
        <div className="form-body">{StepDisplay()}</div>
        <div className="form-footer">
          <button disabled={step === 0}onClick={() => {setStep((currStep) => currStep -1)}}>Previous</button>
          <button disabled={step === FormSteps.length - 1}onClick={() => {setStep((currStep) => currStep +1)}}>Next</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignUp;