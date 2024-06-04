import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard';
import AboutMe from './components/AboutMe';
import SkillCard from './components/SkillCard';
import ContactForm from './components/ContactForm';
import AnimatedCursor from "react-animated-cursor";
import ViewMoreBtn from "./components/ViewMoreBtn";



function App() {

  return (
    
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={30}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#F94892'
      }}
    />
     
    <div>
    
      <Navbar />
      <HomeBanner id = "home"/> 
      <h1 id="text3d">Projects 👇</h1>
      
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="Robocats"
        projectDesc="A simple REACT app that displays automatically generated robocats using API."
        projectLink="https://cmary2023.github.io/robofriends/"
        deployedProjectLink="https://cmary2023.github.io/robofriends/"
        projectImg={require('./images/Projects/robofriends.png')}
      />

      <ProjectCard
        projectTitle="Drum Machine"
        projectDesc="A drum machine project for freeCodeCamp's frontend libraries certification"
        projectLink="https://github.com/cmary2023/drum-machine"
        deployedProjectLink="https://codepen.io/cmary2023/pen/rNREOGq"
        projectImg={require('./images/Projects/drum-machine.png')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="FCC Calculator"
        projectDesc="This project is part of the FreeCodeCamp's front-end certification. Created with React libarie."
        projectLink="https://github.com/cmary2023/fcc-calculator"
        deployedProjectLink="https://codepen.io/cmary2023/pen/GReVvBM"
        projectImg={require('./images/Projects/calculator.png')}
      />
      <ProjectCard
        projectTitle="WomenTech"
        projectDesc="A landing page project for freeCodeCamp's certification"
        projectLink="https://github.com/cmary2023/landing-page"
        deployedProjectLink="https://codepen.io/cmary2023/pen/MWZrrXZ"
        projectImg={require('./images/Projects/landing-page.png')}
      />
     <ViewMoreBtn id = 'view'>Click here!</ViewMoreBtn>
     <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
  
      <Footer />
      </div>
    </>
  );
}

export default App;
