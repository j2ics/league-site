import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Data from './DATA'

const DEFAULT_DATA = Data.getData();

class App extends Component {

  state = DEFAULT_DATA

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route path="/" exact render={() => <Main articles={this.state.articles}/>} />
        </Router>
      </div>
    );
  }
}

export default App;
