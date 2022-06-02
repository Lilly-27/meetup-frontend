import React, {useState, useEffect} from 'react';
import Footer from './Footer';
import Header from './Header';
import StepOne from './SignUpForm/StepOne';
import StepTwo from './SignUpForm/StepTwo';
import FinalStep from './SignUpForm/FinalStep';
import Success from './SignUpForm/Success';


const SignUp = () => {
  const[step, setStep]=useState(0);
  const initialState = { email: '', password: '', name: '', company:'', link_to_github:'', location:'', hobbies:'' };
  const [formState, setFormState] = useState(initialState);

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const FormSteps = ["Step One: Sign Up", "Step Two: Personal Info", "Step Three: Hobbies", "Success"];
  const StepDisplay = () => {
    if (step === 0) {
      return <StepOne />
    } else if (step === 1){
      return <StepTwo />
    } else if (step === 2){
      return <FinalStep />
    } else {
      return <Success />
    }
  }

  return (
    <div className="form">
      <Header />
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