import React from "react";
import './navbar.css'

const Navbar = props => {
   return(
      <div className="container">
         <nav className="navigation">
            <ul>
            <li><a href="#profile" title="Home"> <i class="fa fa-home fa-fw"></i></a></li>
            <li><a href="#about" title="About me"> <i class="fa fa-male fa-fw"></i> </a></li>
            <li><a href="#skills" title="Skills"> <i class="fa fa-tasks fa-fw"></i> </a></li>
            <li><a href="#projects" title="Projects"> <i class="fa fa-code fa-fw"></i> </a></li>
            <li><a href="#contact" title="Contact me"> <i class="fa fa-phone fa-fw"></i> </a></li>
        </ul>
        
    </nav>
  
    
      </div>
   )
}

export default Navbar;