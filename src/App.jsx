import React, {useEffect, useState} from 'react'
import './App.css'
import { RocketCard } from './components/RocketCard'
import { useContext } from 'react'
import Button from './components/Button'
import Question from './components/Question'
import { QuizContext } from './context/quiz'
import { ModalHover } from 'react-modal-hover'
import GameOver from './components/GameOver'
import { Welcome } from './components/welcome'


export default function App() {
  const [quizState, dispatch] = useContext(QuizContext)
  const [selected, setSelected] = useState(true);

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])
  


  return (
    <div className='App'>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}
