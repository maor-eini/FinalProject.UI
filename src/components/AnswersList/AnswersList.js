import React from 'react'
import Answer from '../Answer/Answer'
import './styles.scss'

export default function AnswersList(props){
  return (
    <ul className="answer-list">
    {
      props.answers.map((answer, index) => {
        return (
          <li key={ index }>
            <Answer answer={ answer }/>
          </li>
        )
      })
    }
    </ul>
  )
}
