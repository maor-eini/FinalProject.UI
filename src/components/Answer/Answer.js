import React from 'react'
import './styles.scss'

export default function Answer({ answer }){
  return (
    <div className="answer-container">
      <span className="answer-text">{ answer.value }</span>
    </div>
  )
}
