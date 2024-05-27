import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/cartoon.jpeg";


export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="aboutMe-text">
       <h3>Hey there, 🙋‍♀️</h3>
         Welcome to my personal portofolio. I'm <span> Maria </span>, a graduate with a <span>Bachelor Degree</span> in <span>Engineering in Computers and Information Technology</span> from Romania.<br></br> I started my coding journey in October 2022 and I'm loving it! I enjoy the bliss of solving problems and being able to create things with programming. <br></br> I'm a fast and enthusiastic learner, and I'm very excited to work on the next and more interesting projects.
          To develop my skills I used self-teaching resources such as the awesome <span>FreeCodeCamp.org </span>and <span>Udemy's "The Complete Web Developer in 2023 :Zero to Mastery "</span> course by Andrei Neagoie.
          <br></br>
          Often working on some kind of personal project both for the enjoyment of the process as well as a way to apply the theoretical knowledge gained.<br></br>
          I aspire to be an Front-End Web Developer and later an Full Stack Web Developer.<br></br>
         Want to know more about me? Feel free to <a className='resume' href="https://drive.google.com/file/d/1_Xa-iFqtNOpEnqvwFKEPUhjUsYmU6MCs/view?usp=drive_link" target="_blank" rel="noopener noreferrer">explore my resume.</a>
        </div>
        <div className="profile-photo">
        <div className="heading"> About Me</div>
        <div class="section-heading">
          <p class="sectionHeadingP"></p>
        </div>
          <img className="img" src={myProfile} alt="Profile"></img>
        </div>
        <div className="name">Mary</div>
      </div>
  );
}