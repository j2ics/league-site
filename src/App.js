import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Main} />
      </Router>
    </div>
  );
}

export default App;
