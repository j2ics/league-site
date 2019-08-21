import React, { Component, Fragment } from "react";
import logo from "../assets/img/j2ics-logo-md.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Next extends Component {
  render() {
    let { location, duration, date, circuit } = this.props.race;
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <h3>Next race:</h3>
        </div>
        <div className="card-body">
          <h4 className="card-title">{location} GTE Challenge</h4>
          <h5>{circuit}</h5>
          <p className="card-text">{date}</p>
          <p>{duration}</p>
        </div>
      </div>
    );
  }
}

export default Next;
