import React from 'react'
import { useContext, useState } from 'react'
import { QuizContext } from '../../context/quiz'
import './style.css'
 
const GameOver = () => {
  
    const [quizState, dispatch] = useContext(QuizContext);
    const [learnMode, setLearnMode] = useState(false);

  return (
    <div id="gameover">
      {!learnMode ? (
        <>
          <h2>You can't do well this time. <br/>Try again!</h2>
          <div className="score">
              <p>{quizState.score}% <br/>HITS</p>
              <p>{quizState.score - quizState.questions.length}% <br/>MISTAKES</p>
          </div>
          <button onClick={() => dispatch({ type: "NEW_GAME" })} className="btn-redo">Redo</button>
          <button onClick={() => setLearnMode(true)} className="btn-next">Learn now</button>
        </>
      ) : (
        <>
          <h2>Before you start, here is some content to<br/> help you, have fun!</h2>
          {quizState.questions.map( (q, index) => (
            <span key={index}>Question {index + 1}: {q.link} </span>
          ))}
        </>
      )
      }
    </div>
  )
}

export default GameOver