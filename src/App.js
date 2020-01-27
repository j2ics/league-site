import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Standings from "./components/Standings";
import Schedule from "./components/Schedule";
import Roster from "./components/Roster";
import About from "./components/About";
import Latest from "./components/Latest";
import Post from "./components/Post";
import { LoginForm } from "./components/FormComponents/LoginForm";
import db from "./services/database";
import DriverForm from "./components/FormComponents/DriverForm";

class App extends Component {
  state = { admin: false, login: false };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    db.getData().then(data => this.setState(data));

    //modify all drivers, for quick db updates
    db.getAllDrivers().then(drivers => {
      console.log(drivers);
      Object.keys(drivers).map(driverId => {
        const driver = drivers[driverId];
        let newDriver = { ...driver };
        // db.removeDriver(driverId);
        // db.addNewDriver({ ...newDriver });
      });
    });
  };
  toggleLogin = () => {
    this.setState({ login: !this.state.login });
  };
  updateDriver = payload => {
    db.updateDriver(payload);
  };
  login = pass => {
    db.checkPassword(pass).then(res => {
      if (res) {
        this.setState({ admin: true });
      } else {
        this.setState({ admin: false });
      }
    });
  };
  render() {
    return (
      <div>
        <Router>
          {/* {this.state.drivers ? (
          <DriverForm
            onSubmitForm={this.updateDriver}
            driverKey={Object.keys(this.state.drivers)[0]}
          />
        ) : null} */}
          <Header onToggleLogin={this.toggleLogin} />
          {this.state.login ? (
            <LoginForm onSubmitPassword={this.login} />
          ) : null}

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
            <Route
              path="/latest"
              render={() => <Latest {...this.state} main={false} />}
            />
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
