import './projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import first from '../../Assets/1.jpg'
import second from '../../Assets/2.jpg'
import third from '../../Assets/3.jpg'
import fourth from '../../Assets/4.jpg'
import { Fade } from "react-awesome-reveal";

const Projects = props => {
   const settings = {
      dots: true,
      slide: 'div',
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: true,
      lazyLoad: 'ondemand',
      fade: true
  };
   return(
      <div className='container'>
         <div className='projects' id="projects">
            <div className='slider'>
               <Fade delay={300}>      
               <h1>Personal Projects</h1>
               <h2>Take a look at my latest projects. Check-out my Github account for all rest of the projects.</h2>
               </Fade>
               <Fade delay={500}>
               <Slider {...settings}>
                  <div>
                     <a href="https://github.com/kostya-ktv/T-Talk" className='project-link' target="_blank">React Chat<p>React Redux Express</p></a>
                     <img src={fourth}/>
                  </div>
                  <div>
                     <a href="https://github.com/kostya-ktv/resume" className='project-link' target="_blank">
                        Portfolio <p>Using React and deployment on Firebase</p></a>
                     <img src={first}/>
                  </div>
                  <div>
                     <a href="https://github.com/kostya-ktv/chatcord-lite" className='project-link' target="_blank">Chat Cord <p>Using Nodejs, SoketIO and deployment on Heroku</p></a>
                     <img src={second}/>
                  </div>
                  <div>
                     <a href="https://github.com/kostya-ktv/TODO-Lite" className='project-link' target="_blank">TO DO <p>Vanilla JS and CSS</p></a>
                     <img src={third}/>
                  </div>
                              
               </Slider>
               </Fade>
            </div>
         
         </div>
      </div>
   )
}
export default Projects;