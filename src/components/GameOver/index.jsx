import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
 
const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div id="gameover">
        <h2>End of game!</h2>
        <div>
            <p>{quizState.score}% HITS</p>
            <p>{quizState.score - quizState.questions.length}% MISTAKES</p>
        </div>
        <button onClick={() => dispatch({ type: "NEW_GAME" })} className="btn-redo">Redo</button>
    </div>
  )
}

export default GameOver