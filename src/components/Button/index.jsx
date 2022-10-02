import React, {useContext}from 'react'
import './style.css'
import { QuizContext } from '../../context/quiz'

const Button = (props) => {

  const [quizState, dispatch ] = useContext(QuizContext);
  return (
    <button disabled={props.disable} >Next</button>
  )
}

export default Button