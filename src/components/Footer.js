import "./FooterStyle.css"

import React from 'react'
import { FaFacebook, FaHome , FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
<div className="left">
    <div className="location">
    
      
        <div className="phone">
        <h4><FaHome size={20} style={ {color: "#fff", marginRight:"2rem"}} />350 Preetam nagar colony
            <pre>              Bina M.P</pre></h4>
            
        </div>
        <div className="phone">
        <h4><FaPhone size={20} style={ {color: "#fff", marginRight:"2rem"}} /> +91-9424607760</h4>
        </div>
        <div className="phone">
        <h4><FaMailBulk size={20} style={ {color: "#fff", marginRight:"2rem"}} /> shubhankthakur9@gmail.com</h4>
        </div>
    </div>
</div>
<div className="right">
    <h4>About</h4>
    <p>This is me Shubhank Thakur. I am a web Developer. I enjoy making new projects and design challenges.</p>
    <div className="social">
    <FaFacebook size={20} style={ {color: "#fff", marginRight:"2rem"}} />
    <FaTwitter size={20} style={ {color: "#fff", marginRight:"2rem"}} />
    <FaLinkedin size={20} style={ {color: "#fff", marginRight:"2rem"}} />
    </div>
</div>
    </div>
    </div>
  )
}

export default Footer
