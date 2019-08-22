import React, { Component, Fragment } from "react";
import logo from "../assets/img/j2ics-logo-md.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-j2ics">
          <Link to="/" className="navbar-brand" href="/">
            <img alt="league logo" src={logo} style={{ height: "28px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse bg-primary"
            id="navbarColor01"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/latest" className="nav-link">
                  Latest
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/standings" className="nav-link">
                  Standings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/schedule" className="nav-link">
                  Schedule
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/roster" className="nav-link">
                  Roster
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
            <p>
              <Link to="/admin">Copyright - J2ICS 2019</Link>
            </p>
          </div>
        </nav>
        <div className="spacer" />
      </Fragment>
    );
  }
}

export default Header;
