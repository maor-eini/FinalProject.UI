import React from 'react'
import Answer from '../Answer/Answer'

import './styles.scss'

export default function Search(props) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="What are you looking for?"
        value={ props.value }
        onChange={ props.onSearchChange } />
      <Answer onClick={ props.onSearchClick } answer={ { value: "Search" } }/>
    </div>
  )
}