import React, { Component, Fragment } from "react";
import logo from "../assets/img/j2ics-logo-md.png";
import LoaderHOC from "../LoaderHOC";

class Standings extends Component {
  getDrivers = () => {
    const slicedDrivers = Object.values(this.props.drivers).slice();
    const drivers = slicedDrivers.sort((a, b) => {
      return (a.points - b.points) * -1;
    });
    const leaderPoints = drivers[0].points;
    return drivers.map((driver, index) => {
      return (
        <tr key={index} className="table-primary">
          <th scope="row">{index + 1}</th>
          <th scope="row">{driver.name}</th>
          <td>{driver.points}</td>
          <td>
            {leaderPoints - driver.points !== 0
              ? `-${leaderPoints - driver.points}`
              : "-"}
          </td>
          <td>{driver.team}</td>
          <td>
            <img
              src={this.getCountryFlag(driver.country)}
              alt={driver.country}
            />
          </td>
          <td>{driver.car}</td>
        </tr>
      );
    });
  };

  getCountryFlag = code => {
    return `https://www.countryflags.io/${code}/flat/32.png`;
  };
  render() {
    return (
      <Fragment>
        <title>Standings</title>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <img alt="league logo" src={logo} style={{ height: "95px" }} />
            <h2>2020 Driver Standings:</h2>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Pos.</th>
                <th scope="col">Driver</th>
                <th scope="col">Points</th>
                <th scope="col">Gap</th>
                <th scope="col">Team</th>
                <th scope="col">Country</th>
                <th scope="col">Chassis</th>
              </tr>
            </thead>
            <tbody>{this.getDrivers()}</tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default LoaderHOC(Standings);
