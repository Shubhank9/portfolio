import "./WorkCardStyle.css";

import React from 'react'
import pro1 from "../assets/project1.png"
import {NavLink} from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc}  alt="image" />
    <br /><br />
    <h2 className="project-title">{props.title}</h2>
    <br />
    <div className="pro-details">
        <p>{props.text}</p>
        
        <div className="pro-btns">
            <NavLink to={props.view} className="btn">View</NavLink>
           
            <NavLink to="url.com" className="btn">Source</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard
