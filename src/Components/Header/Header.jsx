import React from "react";
import Navbar from "./Navbar/Navbar";

const Header = props => {
   return(
      <div className="container">
         <Navbar/>
      </div>
   )
}

export default React.memo(Header);