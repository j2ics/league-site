import React, { Component, Fragment } from "react";
import logo from "../assets/img/j2ics-logo-md.png";
import LoaderHOC from "../LoaderHOC";
import db from "../services/database";

class Schedule extends Component {
  state = {
    selectedYear: new Date().getFullYear(),
    races: {2020:{}},
  };

  componentDidMount() {
    db.getAllRaces().then(races => {
      this.setState({ races });
    });
  }

  renderRace = (race, index) => {
    return (
      <tr
        key={index}
        className={`table-${index % 2 === 0 ? "primary" : "secondary"}`}
      >
        <th scope="row">{index + 1}</th>
        <td>{race.location}</td>
        <td>{race.circuit}</td>
        <td>{race.duration}</td>
        <td>{race.date}</td>
      </tr>
    );
  };

  renderSeason = () => {
    return (this.state.races !== null ? Object.values(this.state.races[this.state.selectedYear]) : [])

    // return Object.values(this.state.races)
    // .sort((a, b) => {
    //   return a.date - b.date;
    // })
    .map((race, index) => {
      return this.renderRace(race, index);
    });
  };

  render() {
    this.renderSeason();
    return (
      <Fragment>
        <title>Schedule</title>

        <div className="container">
          <div style={{ textAlign: "center" }}>
            <img alt="league logo" src={logo} style={{ height: "95px" }} />
            <br />
            {/* <select
              className="btn btn-primary btn-large"
              value={this.state.selectedYear}
              onChange={e => this.setState({ selectedYear: e.target.value })}
            >
              {Object.keys(this.state.races).map((key, index) => {
                return <option key={index}>{key}</option>;
              })}
            </select> */}
            <h2>{this.state.selectedYear} Season Schedule:</h2>
          </div>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Round</th>
                <th scope="col">Race</th>
                <th scope="col">Circuit</th>
                <th scope="col">Length</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>{this.renderSeason()}</tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default LoaderHOC(Schedule);
