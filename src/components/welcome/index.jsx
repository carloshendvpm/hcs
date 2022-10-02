import React from 'react'
import { useState } from 'react'
import { RocketCard } from '../RocketCard'
import Rocket from '../../assets/img/rocket.svg'
import RocketImg from '../../assets/img/Group.png'
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import './style.css'

export const Welcome = () => {
  const [stateCheck, setStateCheck] = useState("");
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div>        
        <div className='Main'>
        <h2>You are about to embark on an unforgettable galactic adventure!<br/> Choose your flight and let’s go!</h2>
            <div className='rocketCard'> 
            <RocketCard rocket={Rocket} onClick={() => setStateCheck('solar_prob')} isSelected={stateCheck === 'solar_prob'} text="Parker solar Prob"/>
            <RocketCard rocket={RocketImg} onClick={() => setStateCheck('solar_orb')} isSelected={stateCheck === 'solar_orb'} text="Solar orbiter"/>
            </div>
        <button onClick={() => dispatch({type: "CHANGE_STATE"}) } disabled={stateCheck === ""} >Next</button>
        </div>
    </div>
  )
}
