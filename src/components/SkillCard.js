import React from 'react'
import "./SkillCardStyle.css";
import html from "../images/Skills/html.png";
import css from "../images/Skills/css.png"
import javascript from "../images/Skills/javascript.png";
import react from "../images//Skills/react.png";
import bootstrap from "../images//Skills/bootstrap.png";
import jquery from "../images//Skills/jquery.png";
import expressjs from "../images//Skills/expressjs.png";
import json from "../images//Skills/json.png";
import postgresql from "../images//Skills/postgresql.png";
import nodejs from "../images//Skills/nodejs.png";
import ajax from "../images//Skills/ajax.png";
import api from "../images//Skills/api.png";
import visual from "../images//Skills/visual.png";
import adobe from "../images//Skills/adobe.png";
import canva from "../images//Skills/canva.png";
import windows from "../images//Skills/windows.png";
import macOS from "../images//Skills/macOS.png";

export default function SkillCard({id}) {
  return (
    <>
        <div className="skill-container" id = {id}>
          <div className="skill-header">My Skills</div>
          <div className="skill-box">
            <h2>Languages</h2>
            <div className="skillset">
              <abbr title='HTML 5'><img src={html} alt="html5-skills" className='techLogo'/></abbr>
              <abbr title='CSS 3'><img src={css} alt="css3-skills" className='techLogo'/></abbr>
             <abbr title='Javascript'><img src={javascript} alt='javascript-skills'  className='techLogo'/></abbr>
             <abbr title='JSON'><img src={json} alt='json-skills'  className='techLogo'/></abbr>
             </div>                     
          </div> 
          <div className="skill-box">
            <h2>Libraries and Frameworks</h2>
            <div className="skillset">
              <abbr title='ReactJS'><img src={react} alt='reactjs-skills'  className='techLogo'/></abbr>
              <abbr title='Bootstrap'><img src={bootstrap} alt='bootstrap-skills' className='techLogo'/></abbr>
              <abbr title='jQuery'><img src={jquery} alt='jquey-skills' className='techLogo'/></abbr>
              <abbr title='ExpressJS'><img src={expressjs} alt='expressjs-skills' className='techLogo'/></abbr>
            </div>            
          </div>
          <div className="skill-box">
            <h2>Databases and Runtime Environment</h2>
            <div className="skillset">
              <abbr title='PostgreSQL'><img src={postgresql} alt='postgresql-skills'  className='techLogo'/></abbr>
              <abbr title='NodeJS'><img src={nodejs} alt='nodejs-skills' className='techLogo'/></abbr>
              <abbr title='Ajax'><img src={ajax} alt='ajax-skills' className='techLogo'/></abbr>
              <abbr title='RestAPI'><img src={api} alt='restApi-skills' className='techLogo'/></abbr>
            </div>            
          </div>
          <div className="skill-box">
            <h2>Tools & Systems</h2>
            <div className="skillset">
              <abbr title='Visual Studio Code'><img src={visual} alt='visual-studio-skills' className='techLogo'/></abbr>
              <abbr title='Adobe Express'><img src={adobe} alt='adobe-skills' className='techLogo'/></abbr>
              <abbr title='Canva'><img src={canva} alt='canva-skills' className='techLogo'/></abbr>
              <abbr title='Windows'><img src={windows} alt='windows-skills' className='techLogo'/></abbr>
              <abbr title='MacOS'><img src={macOS} alt='macOS-skills' className='techLogo'/></abbr>
            </div>            
          </div>
        </div>
    </>
  )
}
