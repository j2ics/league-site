import React, { Component, Fragment } from "react";
import logo from "../assets/img/j2ics-logo-md.png";
import LoaderHOC from "../LoaderHOC";

class Schedule extends Component {

  state = {
    selectedYear: new Date().getFullYear() 
  }

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
    return this.props.schedule[this.state.selectedYear]
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
            <h2>
              <div
                class="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button type="button" class="btn btn-primary">
                  {this.state.selectedYear}
                </button>
                <div class="btn-group" role="group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    class="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                  <div
                    class="dropdown-menu"
                    aria-labelledby="btnGroupDrop1"
                    x-placement="bottom-start"
                    style={{
                      position: "absolute",
                      transform: "translate3d(0px, 47px, 0px)",
                      top: "0px",
                      left: "0px",
                      "will-change": "transform"
                    }}
                  >
                    <a class="dropdown-item" href="#">
                      2019
                    </a>
                    <a class="dropdown-item" href="#">
                      2020
                    </a>
                  </div>
                </div>
              </div>{" "}
              Season Schedule:
            </h2>
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
