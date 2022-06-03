import React, {useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import StepOne from './SignUpForm/StepOne';
import StepTwo from './SignUpForm/StepTwo';
import FinalStep from './SignUpForm/FinalStep';

const URL = 'https://meetup-for-devs.herokuapp.com/api/users'

const SignUp = () => {
  const initialState = { 
    email:"", 
    password:"", 
    name:"", 
    company:"", 
    link_to_github:"", 
    location:"", 
    hobbies:"" };
    
  const [formState, setFormState] = useState(initialState);

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    await fetch(URL, {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState)
  })

    console.log(formState);
    
    setFormState(initialState);
  };

  const[step, setStep]=useState(0);

  const FormSteps = ["Step One: Sign Up", "Step Two: Personal Info", "Step Three: Hobbies"];
  const StepDisplay = () => {
    if (step === 0) {
      return <StepOne handleChange={handleChange} formState={formState}/>
    } else if (step === 1){
      return <StepTwo handleChange={handleChange} formState={formState}/>
    } else {
      return <FinalStep handleChange={handleChange} formState={formState}/>
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <Header />
      <div className="form-progressbar"></div>
      <div className="form-container">
        <div className="form-header">
          <h2>{FormSteps[step]}</h2>
        </div>
        <div className="form-body">{StepDisplay()}</div>
        <div className="form-footer">
          <button 
            disabled={step === 0}
            onClick={() => {setStep((currStep) => currStep - 1)
              }}>
              Previous
          </button>

          <button 
            onClick={() => {
              if (step === FormSteps.length -1){
                alert ("Congrats! Your account is set!")
              } else {
                setStep((currStep) => currStep +1)
              }
              }}>
            {step === FormSteps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      <Footer />
    </form>
  )
}

export default SignUp;