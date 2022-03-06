import '../Skills/skills.css'
import React from 'react'
import ball from '../../Assets/Ball.svg'
import { Slide } from "react-awesome-reveal";

const Skills = props => {
   return(
      <div className='container'>
         
         <div className='skills' id="skills">
         
            <div className='title'>
            
               <h1>
               <img src={ball} alt='ball' className='ball'/>
                  Skills</h1>
               <h4>I have experience with a variety of programming languages and technologies:</h4>
            </div>
            <div className='details'>
               <div>
                  <Slide direction='right'>
                  <h3>Programming</h3>
                  </Slide>

                  <Slide direction='left'>
                  <section>
                     <span>HTML</span>
                     <span>CSS</span>
                     <span>JavaScript</span>
                     <span>TypeScript</span>                                     
                     <span>Java</span>
                  </section>      
                  </Slide>          
               </div>
               <div>
               <Slide direction='right'>
                  <h3>Knowledge</h3>

                  </Slide>
                  <Slide direction='right'>
                  <section>
                     <span>OOP</span>
                     <span>Design Patterns</span>
                     <span>Redux</span>
                     <span>Bootstrap</span>
                     <span>React</span>
                     <span>React Native</span>
                     <span>NodeJS</span>   
                  </section>     
                  </Slide>           
               </div>
               
            </div>
         </div>
      </div>
   )
}
export default Skills;