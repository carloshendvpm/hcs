import React, {useEffect, useState} from 'react'
import './App.css'
import { RocketCard } from './components/RocketCard'
import { useContext } from 'react'
import Button from './components/Button'
import Question from './components/Question'
import { QuizContext } from './context/quiz'
import { ModalHover } from 'react-modal-hover'
import GameOver from './components/GameOver'


export default function App() {
  const [quizState, dispatch] = useContext(QuizContext)
  const [selected, setSelected] = useState(true);

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])
  


  return (
    <div className='App'>
      {quizState.gameStage === "Start" && 
        <>
        <h2>You are about to embark on an unforgettable galactic adventure!<br/> Choose your flight and let’s go!</h2>
        <div className='Main'>
        <div className='rocketCard'> 
        <RocketCard text="Parker solar Prob"/>
        <RocketCard text="Solar orbiter"/>
        </div>
        </div>
        </>
      }
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}
