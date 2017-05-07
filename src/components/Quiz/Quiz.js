import React from 'react'
import Question from '../Question/Question'
import AnswersList from '../AnswersList/AnswersList'
import './styles.scss'

export default class Quiz extends React.Component {
  render (){
    const { currentQuestion, onAnswerClick } = this.props
    console.log(currentQuestion)
    return (
      <div className="quiz-container">
        <Question question={ currentQuestion.question } />
        <AnswersList answers={ currentQuestion.answers } onAnswerClick={ onAnswerClick }/>
      </div>
    )
  }
}
