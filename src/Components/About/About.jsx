import '../About/about.css'
import { Slide } from "react-awesome-reveal";
import React from "react";

const About = props => {
   return(
      <div className="container">
         
         <div className="about" id="about">
            <div>
                  <div class="bg"></div>
                  <div class="bg bg2"></div>
                  <div class="bg bg3"></div>
            </div>
               <Slide direction='left'>
               <div className="sql">
                  SELECT 
                  *
                  FROM 
                  World
                  WHERE 
                  Someone 
                  LIKE '%
                  You
                  %' <br></br>
                  -
                  NO RESULTS
               </div>
               </Slide>
               <Slide direction='right'>
               <div className="info">
                  <h1>About me</h1>
            
                  <p>
                  Skilled in React, React Native development. Proficient in JavaScript, Typescript, Redux, Node JS. Familiar with programming language: Java.
                  </p>
                  <p>
                  I am highly motivated, creative, team player and passionate about technology. Being a developer for me means creating my own new world in code. I always try to read, learn and keep up to date with the latest technologies. I am always passionate about learning new things and enriching my knowledge every day.
                  </p>
                  <p>
                  I am especially, highly curious about new front-end development technologies and thoroughly mastering them with a keen awareness of new industry developments and the evolution of programming solutions.
                  </p>
                  <a href='../../Assets/CV_Kostya_Kotov_Web_Developer.pdf' download={true} class="download-cv">Get my CV</a>
               </div>
               </Slide>
         </div>

      </div>
   )
}
export default About;