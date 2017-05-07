import React from 'react';
import Quiz from './Quiz/Quiz'
import Search from './Search/Search'

import '../styles/styles.scss'

const quiz = {
  1 : {
    question: "Where do you want to put your new TV?",
    answers: [
      { value:"Living room" },
      { value: "Bed Room" }
    ]
  },
  2: {
    question: "What is the size of the room?",
    answers: [
      { value:"Small (3X3)" },
      { value: "Medium (4X4)" },
      { value: "Large (5X5)" }
    ]
  },
  3: {
    question: "What do you usually watch on TV?",
    answers: [
      { value:"Movies" },
      { value: "TV shows" },
      { value: "Prime Time Shows" }
    ]
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isQuizVisible: false,
      searchValue: "",
      currentQuestion: 1,
      answers: {}
    }

    this.handleAnswerClick = this.handleAnswerClick.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchClick(){
    this.setState({
      isQuizVisible: true
    })
  }

  handleSearchChange(event) {
    this.setState({
      searchValue: event.target.value
    })
  }

  handleAnswerClick(value){
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      answers:{
        ...this.state.answers,
        [this.state.currentQuestion]: value
      }
    })
  }

  render() {
    const currentQuestion = quiz[this.state.currentQuestion]

    if(currentQuestion){
      return (
        <div>
          {
            !this.state.isQuizVisible &&
            <div>
              <img className="logo-big" src="/images/logo_big.png"/>
              <h1 className="site-title">Dodi</h1>
              <Search
                onSearchClick={ this.handleSearchClick }
                onSearchChange={ this.handleSearchChange }
                value={ this.state.searchValue } />
            </div>
          }

          { this.state.isQuizVisible &&
           <Quiz
            currentQuestion={ currentQuestion }
            onAnswerClick={ this.handleAnswerClick } /> }
          <img className="items" src="/images/items.png" />
        </div>
      )
    }
    else{
      return (
        <div>
          <h2>Search Results</h2>
        </div>
      )
    }
  }
}

export default App;
