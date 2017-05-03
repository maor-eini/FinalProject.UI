import React from 'react';
import Quiz from './Quiz/Quiz'

import { Link, IndexLink } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <Quiz />
      </div>
    )
  }
}

export default App;
