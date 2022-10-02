import React from 'react'
import { RocketCard } from '../RocketCard'
import Rocket from '../../assets/img/rocket.svg'
import RocketImg from '../../assets/img/Group.png'
import './style.css'

export const Welcome = () => {
  return (
    <div>        
        <div className='Main'>
        <h2>You are about to embark on an unforgettable galactic adventure!<br/> Choose your flight and let’s go!</h2>
            <div className='rocketCard'> 
            <RocketCard rocket={Rocket} text="Parker solar Prob"/>
            <RocketCard rocket={RocketImg} text="Solar orbiter"/>
            </div>
        </div>
    
    </div>
  )
}
