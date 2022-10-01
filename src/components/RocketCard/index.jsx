import React, { useState } from 'react'
import Rocket from '../../assets/img/rocket.png'
import { motion } from "framer-motion"
import './style.css'

export const RocketCard = (props) => {
  const [move, setMove] = useState(false);
  return (
    <div  className='Card' onClick={() => console.log("Clicou")}>
        <motion.img 
        animate={{ y: move ? 1000 : -1000 }} 
        transition={{ type:'tween', duration: 5}}
        onClick={ () => {
          setMove(!move)
        }}
        src={Rocket}/>
        <p>{props.text}</p>
    </div>
  )
}
