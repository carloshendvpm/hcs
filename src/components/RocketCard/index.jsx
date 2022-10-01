import React from 'react'
import Rocket from '../../assets/img/rocket.png'
import './style.css'

export const RocketCard = () => {
  return (
    <div className='Card' >
        <img src={Rocket}/>
        <p>Parker Solar Probe</p>
    </div>
  )
}
