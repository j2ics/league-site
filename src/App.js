import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Standings from "./components/Standings";
import Schedule from "./components/Schedule";
import Roster from "./components/Roster";
import Post from './components/Post'
import About from "./components/About";
import Latest from "./components/Latest";
import AdminBanner from "./components/AdminBanner";
import AdminDrivers from "./components/AdminDrivers";
import { LoginForm } from "./components/FormComponents/LoginForm";
import db from "./services/database";
import AdminSchedule from "./components/AdminSchedule";

class App extends Component {
  state = { admin: false, login: false };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    db.getData().then(data => this.setState(data));
  };

  toggleLogin = () => {
    this.setState({ login: !this.state.login });
  };

  login = () => {
    db.checkPassword().then(res => {
      if (res) {
        this.setState({ admin: true, login: false });
      } else {
        this.setState({ admin: false, login: false });
      }
    });
  };
  render() {
    return (
      <div>
        <Router>
          <Header onToggleLogin={this.toggleLogin} />
          {this.state.login ? (
            <LoginForm onSubmitPassword={this.login} />
          ) : null}
          {this.state.admin ? (
            <AdminBanner
              onLogoutClick={() => {
                localStorage.removeItem("bv94nb");
                this.setState({ admin: false });
                this.getData();
              }}
            />
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
            <Route
              path="/drivers"
              render={() => <Roster {...this.state} />}
            />
            <Route path="/about" component={About} />
            {/* ADMIN */}
            {/* <Route path="/admin/news" component={Post} /> */}
            <Route
              path="/admin/drivers"
              render={() => (
                <AdminDrivers auth={this.login} admin={this.state.admin} />
              )}
            />{" "}
            <Route
              path="/admin/schedule"
              render={() => (
                <AdminSchedule auth={this.login} admin={this.state.admin} />
              )}
            />
            <Route
              path="/admin/news"
              render={() => (
                <Post auth={this.login} admin={this.state.admin} />
              )}
            />
            {/* <Route
              path="/admin/teams"
              render={() => (
                <AdminTeams
                  auth={this.login}
                  admin={this.state.admin}
                />
              )}
            /> */}
            {/* <Route path="/admin/schedule" component={Post} /> */}
            {/* <Route path="/admin/results" component={Post} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
