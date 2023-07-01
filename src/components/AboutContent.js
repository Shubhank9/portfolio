import './AboutContentStyle.css';
import {Link} from 'react-router-dom';

import React from 'react'

import React2 from "../assets/react2.jpg"

const AboutContent = () => {
  return (
    <div className='about'>
    <div className='left'>
        <h1>Who Am i?</h1>
        <p>I m a React Front-End Developer. I create responsive secure Website for my Clients.</p>
        <Link to="/contact">
            <button className='btn'>Contact</button>
        </Link>
    </div>

    <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                
                <img src={React2} className="img" alt="true" />
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default AboutContent;
