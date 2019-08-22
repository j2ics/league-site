import React, { Component, Fragment } from "react";
import logo from "../assets/img/j2ics-logo-md.png";
import LoaderHOC from "../LoaderHOC";

class Schedule extends Component {
  renderRace = (race, index) => {
    return (
      <tr
        key={index}
        className={`table-${index % 2 === 0 ? "primary" : "secondary"}`}
      >
        <th scope="row">{index + 1}</th>
        <td>{race.date}</td>
        <td>{race.location}</td>
        <td>{race.circuit}</td>
        <td>{race.duration}</td>
      </tr>
    );
  };

  renderSeason = () => {
    return this.props.schedule
      .sort((a, b) => {
        return a.date - b.date;
      })
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
            <h2>2019 Season Schedule:</h2>
          </div>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Round</th>
                <th scope="col">Date</th>
                <th scope="col">Race</th>
                <th scope="col">Circuit</th>
                <th scope="col">Length</th>
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
