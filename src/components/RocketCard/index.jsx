import React, { useState } from 'react'
import Rocket from '../../assets/img/rocket.svg'
import RocketImg from '../../assets/img/Group.png'
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
          <motion.img 
          whileHover={{ y: move ? 1000 : -500 }}
          transition={{ type:'tween', duration: 5}}
          src={props.rocket}
          />
        <p>{props.text}</p>
    </div>
  )
}
