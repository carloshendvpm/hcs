import React, { useState } from 'react'
import Rocket from '../../assets/img/rocket.png'
import { motion } from "framer-motion"
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import './style.css'

export const RocketCard = (props) => {
  const [move, setMove] = useState(false);
  const [quizState, dispatch] = useContext(QuizContext);
  const [selected, setSelected] = useState(true);

  function lidar(){
    setSelected(!selected)
    
  }
  let stateCheck = move ? 'filed' : 'activated'
  return (
    <div className={`card card-${stateCheck}` }  onClick={() => dispatch({type: "CHANGE_STATE"})}>
        { move ? 
          <motion.img 
          animate={{ y: move ? -1000 : 1000 }} 
          transition={{ type:'tween', duration: 5}}
          src={Rocket}/> :
          <img src={Rocket}/>
        }
        <p>{props.text}</p>
    </div>
  )
}
