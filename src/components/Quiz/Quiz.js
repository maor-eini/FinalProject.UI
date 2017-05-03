import React from 'react'
import Question from '../Question/Question'
import AnswersList from '../AnswersList/AnswersList'
import './styles.scss'

export default class Quiz extends React.Component {
  render (){
    const quiz = {
      question: "Whats Your Name?",
      answers: [
        { value:"first answer" },
        { value: "second answer" }
      ]
    }

    return (
      <div className="quiz-container">
        <Question question={ quiz.question } />
        <AnswersList answers={ quiz.answers } />
      </div>
    )
  }
}
