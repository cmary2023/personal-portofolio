import React from 'react';
import "./ProjectCardStyle.css";
import { FaHandPointRight } from "react-icons/fa";
import {FiGithub} from "react-icons/fi";
import Tilt from 'react-parallax-tilt';
import {Zoom} from "react-awesome-reveal";


export default function ProjectCard(props) {
  const handleOnClick = () => {
    window.open(`${props.projectLink}`);
  }

  return (
    <>
   
    <div className='project-window' id = {props.id}>
    
      <div className={`project-wrapper ${props.className}`}>
        <div className="about-project">
        <Zoom left cascade><div className="project-title">{props.projectTitle}</div></Zoom>
          <div className="desc">{props.projectDesc}</div>
          <button className='btn' onClick={handleOnClick}><span>View on<FiGithub className="social" size={20} style={{ marginLeft: "8px", position: "relative", top: "2px", strokeWidth: "3" }}/></span><FaHandPointRight  className='btn-hand' size={22} style={{marginLeft: "1rem"}}/></button>
         
        </div>
        <Tilt className="project-img" gyroscope= {true} >
            <a href={props.deployedProjectLink} target= "_blank" rel="noopener noreferrer"><img src={props.projectImg} alt="Displaying Project" /></a>
        </Tilt> 
      </div>
    </div>
   
  </>
  )
}