import React from "react";
import './footer.css';


const Footer = props => {
   return(
      <div className="container" id="contact">
         <footer>          
               <div>
                  <h4>Kostya Kotov</h4>
                  <p>I'm Kostya and this is my</p>
                  <p>personal website</p>
                  <p>email: kotov.ktv1@gmail.com</p>
                  <p> © 2021</p>
                  
               </div>

               <div>
                  <h4>EXPLORE</h4>
                  <ul className="tags">
                     <li><a href="#profile">Home</a></li>
                     <li><a href="#about">About</a></li>
                     <li><a href="#skills">Skills</a></li>
                     <li><a href="#projects">Projects</a></li>
                     <li><a href="#contact">Contact</a></li>
                  </ul>
               </div>
               <div className="follow">
                  <h4>FOLLOW</h4>
                  <a href="https://www.facebook.com/people/Konstantin-Kotov/100005225353367" target="_blank">Facebook</a>
                  <a href="https://www.instagram.com/kostya.ktv/" target="_blank">Instagram</a>
                  <a href="https://www.linkedin.com/in/kostya-ktv/" target="_blank">LindedIn</a>
                  <a href="https://github.com/kostya-ktv" target="_blank">GitHub</a>
               </div>
    </footer>
    
         
      </div>
   )
}

export default Footer;