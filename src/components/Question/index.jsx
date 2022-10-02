import React from 'react'
import { QuizContext } from '../../context/quiz'
import { useContext } from 'react'
import './style.css'

const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    console.log(quizState)

  return (
    <div className="wrapper"> 
        <div id="question">
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
        <button
        onClick={() => dispatch({type: "CHANGE_QUESTION"})}
        >Continuar</button>
        </div>
    </div>
  )
}

export default Question