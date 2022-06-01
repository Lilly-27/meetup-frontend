// NEED TO INCLUDE PATHS FOR LINKS TO OUR PROFILES AS OF 5/31
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => { 
    return (
        <div className="footer-container">
            <div className="create-event">
                <h4>Create your own event.</h4>
                <button>Get Started</button>
            </div>

            <div className="links-container">
                <div className="your-account">
                    <h4>Your Account</h4>
                    <ul>
                        <li><Link to={`/signup`}>
                        <div className='signup-footer'><h4>Sign Up</h4></div>
                        </Link></li>

                        <li><Link to={`/login`}>
                        <div className='login-footer'><h4>Log In</h4></div>
                        </Link></li>
                    </ul>
                </div>

                <div className="logan">
                    <h4>Connect with Logan</h4>
                    <ul>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>

                <div className="cecilia">
                    <h4>Connect with Cecilia</h4>
                    <ul>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>

                <div className="cesar">
                    <h4>Connect with Cesar</h4>
                    <ul>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>

                <div className="copywrite">
                    <h5>© 2022 Meetup for Devs</h5>
                </div>
            </div>
        
        </div>
    )

}

export default Footer