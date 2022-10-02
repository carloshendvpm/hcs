import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import './style.css'
 
const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div id="gameover">
        <h2>You can't do well this time. <br/>Try again!</h2>
        <div className="score">
            <p>{quizState.score}% <br/>HITS</p>
            <p>{quizState.score - quizState.questions.length}% <br/>MISTAKES</p>
        </div>
        <button onClick={() => dispatch({ type: "NEW_GAME" })} className="btn-redo">Redo</button>
        <button className="btn-next">Learn now</button>
    </div>
  )
}

export default GameOver