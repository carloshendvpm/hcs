import React from 'react'
import Rocket from '../../assets/img/rocket.png'
import './style.css'

export const RocketCard = (props) => {
  return (
    <div className='Card' onClick={() => console.log("Clicou")}>
        <img src={Rocket}/>
        <p>{props.text}</p>
    </div>
  )
}
