import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

const Options = ({ option }) => {
    const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div>{option}</div>
  )
}

export default Options