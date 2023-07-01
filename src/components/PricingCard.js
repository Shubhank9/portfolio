import "./PricingCardStyle.css"
import {Link} from 'react-router-dom'

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
    <h1 className="project-heading"> #Pricing</h1>
    <br />
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc"> 1000/-</p>
                <p>- 3 Days -</p>
                <p>- 3 Page -</p>
                <p>- Responsive Design -</p>
                
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
                
            </div>

            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc"> 2000/-</p>
                <p>- 5 Days -</p>
                <p>- 5 Page -</p>
                <p>- Responsive Design -</p>
                
                
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
                
            </div>

            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="btc"> 5000/-</p>
                <p>- 10 Days -</p>
                <p>- 7 Page -</p>
                <p>- Responsive Design -</p>
               
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
                
                
            </div>
        </div>      
    </div>
  )
}

export default PricingCard

