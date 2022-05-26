import Header from './Header'
import Footer from './Footer'
import React from 'react'

function Show() {
  return (
    <div className="homepage">
        <div className="Header">
            <Header />
        </div>

        {/* <div className="Show">
            <Show />
        </div> */}

        <div className="Footer">
            <Footer />
        </div>
    </div>
  )
}

export default Show