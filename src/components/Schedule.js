import React, { Component, Fragment } from "react";
import logo from "../assets/img/j2ics-logo-md.png";
import LoaderHOC from "../LoaderHOC";
import db from "../services/database";

class Schedule extends Component {
  state = {
    selectedYear: new Date().getFullYear(),
    races: { 2020: {} }
  };

  componentDidMount() {
    db.getAllRaces().then(races => {
      this.setState({ races });
    });
  }

  userTimeZone = dt => {
    function seconds_with_leading_zeros(dt) {
      return /\((.*)\)/.exec(new Date().toString())[1];
    }
    return seconds_with_leading_zeros(dt);
  };

  getFormattedRaceTime = raceTime => {
    const localTime = new Date(raceTime).toLocaleTimeString();
    const fixedTimeArray = localTime.split(" ");
    fixedTimeArray[0] = fixedTimeArray[0].slice(0,-3);
    return fixedTimeArray.join(" ");
  };

  renderRace = (race, index) => {
    return (
      <tr
        key={index}
        className={`table-${
          index % 2 === 0 ? "primary" : "secondary"
        } text-nowrap`}
      >
        <th scope="row">{index + 1}</th>
        <td>{race.race}</td>
        <td>{race.location}</td>
        <td>{race.circuit}</td>
        <td>{race.duration}</td>
        <td>
          {race.date
            ? `${new Date(
                race.date
              ).toLocaleDateString()}, at ${this.getFormattedRaceTime(
                race.date
              )}`
            : null}
        </td>
      </tr>
    );
  };

  renderSeason = () => {
    return (
      (this.state.races !== null
        ? Object.values(this.state.races[this.state.selectedYear])
        : []
      )

        // return Object.values(this.state.races)
        // .sort((a, b) => {
        //   return a.date - b.date;
        // })
        .map((race, index) => {
          return this.renderRace(race, index);
        })
    );
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
            <h4>
              Race Start Times are shown in your local Time Zone, detected as{" "}
              <b>{this.userTimeZone(new Date())}</b>
            </h4>
          </div>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Round</th>
                <th scope="col">Event</th>
                <th scope="col">Location</th>
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
