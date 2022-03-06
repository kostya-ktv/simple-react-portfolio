import React from "react";
import './profile.css'
import videoBg from '../../Assets/background.mp4'
import {Fade} from "react-awesome-reveal";

const Profile = props => {
   return(
      <div className="container">
     
         <video autoPlay="true" loop muted>
                    <source src={videoBg} type="video/mp4" />
                </video>
         <div className="profile" id="profile">
        <Fade delay={300}>
               <div>
                  <p>Hello, my <span>name</span> is</p><br></br>
                  <h1>Kostya Kotov</h1><br></br>
                  <p>And I'm a <span>Full-Stack Developer</span></p>
               </div> 
        </Fade>
                      
         </div>
      </div>
   )
}

export default Profile;