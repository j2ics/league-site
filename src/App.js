import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Standings from './components/Standings'
import Data from "./DATA";


const DEFAULT_DATA = Data.getData();

class App extends Component {
  state = DEFAULT_DATA;

  render() {
    return (
      <div>
        <Router>
          <Header />
          <div style={{paddingTop: "18px"}}>

          <Route
            path="/"
            exact
            render={() => <Main articles={this.state.articles} />}
            />
          <Route
            path="/standings"
            render={() => <Standings drivers={this.state.drivers} />}
            />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
