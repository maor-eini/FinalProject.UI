import React from 'react'
import './styles.scss'

export default function Question(props){
  return (
    <div className="question-container">
      <span className="question-text">{ props.question }</span>
    </div>
  )
}
