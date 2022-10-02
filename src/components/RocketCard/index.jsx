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
    props.onClick();
    setMove(!move);
    //dispatc h({type: "CHANGE_STATE"})
  }
  
  return (
    <div className={`card card-${props.isSelected ? 'selected' : 'unselected'}` }  onClick={() => lidar()}>
          <motion.img 
          src={props.rocket}
          whileHover={{ scale: 1.5}}
          />
        <p>{props.text}</p>
    </div>
  )
}
