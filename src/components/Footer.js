// NEED TO INCLUDE PATHS FOR LINKS AS OF 5/25
import React from 'react'

const Footer = () => { 
    return (
        <section className="footer-container">
            <div className="create-event">
                <h4>Create your own event.</h4>
                <button>Get Started</button>
            </div>

            <div className="links-container">
                <div className="your-account">
                    <h4>Your Account</h4>
                    <ul>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Log In</a></li>
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
        
        </section>
    )

}

export default Footer