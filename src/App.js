import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./assets/img/j2ics-logo-md.png";

import Header from "./components/Header";
import Main from "./components/Main";
import Standings from "./components/Standings";
import Data from "./DATA";

const DEFAULT_DATA = Data.getData();

class App extends Component {
  state = DEFAULT_DATA;

  render() {
    return (
      <div>
        <Router>
          <Header />
          <div style={{ paddingTop: "18px" }}>
            <Route path="/" exact render={() => <div><title>Just 2 Idiots Cup</title><Main {...this.state} main={true}/></div>} />
            <Route
              path="/latest"
              render={() => <Main {...this.state} />}
            />
            <Route
              path="/standings"
              render={() => <Standings {...this.state} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
