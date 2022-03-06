import './spinner.css'
import React from 'react'
import spinner from '../../Assets/Pulse.svg'

const Spinner = props => {
   return(
      <div className='spinner'>
         <img src={spinner}/>
      </div>
   )
}

export default Spinner;