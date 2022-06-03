import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className="header-container">
      <div className="app-name">
        <Link to={`/`}>
          <div className='app-link'><h2>Meet Up for Devs</h2></div>
        </Link>
      </div>

      <div className="accounts">
        <Link to={`/login`}>
          <div className='login-link'><h4>Log In</h4></div>
        </Link>
    
        <Link to={`/signup`}>
            <div className='signup-link'><h4>Sign Up</h4></div>
        </Link>
      </div>
    </section>
  )
}

export default Header