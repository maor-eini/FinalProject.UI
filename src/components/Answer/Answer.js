import React from 'react'
import './styles.scss'

export default function Answer({ answer, onClick }){
  return (
    <div className="answer-container" onClick={ onClick }>
      <span className="answer-text">{ answer.value }</span>
    </div>
  )
}
