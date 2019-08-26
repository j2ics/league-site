import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Standings from "./components/Standings";
import Schedule from "./components/Schedule";
import Roster from "./components/Roster";
import About from "./components/About";
import Latest from './components/Latest'
import Post from "./components/Post";
import db from "./Database";
// import Data from "./DATA";

class App extends Component {
  // state = { ...Data.getData() };

  state = {};

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    db.getData().then(data => this.setState(data));
  };

  render() {
    return (
      <div>
        <Router>
          <Header />
          <div style={{ paddingTop: "18px" }}>
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <title>Just 2 Idiots Cup</title>
                  <Main {...this.state} main={true} />
                </div>
              )}
            />
            <Route path="/latest" render={() => <Latest {...this.state} main={false}/>} />
            <Route
              path="/standings"
              render={() => <Standings {...this.state} />}
            />
            <Route
              path="/schedule"
              render={() => <Schedule {...this.state} />}
            />
            <Route path="/drivers" render={() => <Roster {...this.state} />} />
            <Route path="/about" component={About} />
            <Route path="/new" component={Post} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
