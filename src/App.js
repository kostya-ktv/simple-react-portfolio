import { useState } from 'react';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Spinner from './Components/Spinner/Spinner';
import './style.css';

function App() {
  const [showPage, setShowPage] = useState(false);
  setTimeout( ()=> setShowPage(true), 1500)
  if(!showPage){
    return <Spinner/>
  }
  if(showPage) return (
      <div>           
          <Header/>
          <Profile/>
          <About/>
          <Skills/>
          <Projects/>
          <Footer/>   
      </div>
      )
  
}

export default App;
