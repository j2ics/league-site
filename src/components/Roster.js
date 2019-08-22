import React, { Component, Fragment } from "react";
import logo from "../assets/img/j2ics-logo-md.png";
import LoaderHOC from "../LoaderHOC";

class Roster extends Component {
  driverCard = driver => {
    return (
      <div className="col col-md-3" style={{paddingBottom: "15px"}}>
        <div class="card">
          <img class="card-img-top" src={driver.image} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{driver.name}</h5>
            <img
              class="card-text"
              src={`https://www.countryflags.io/${driver.country}/flat/64.png`}
            />
            <h5>{driver.car.make}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{driver.car.model}</li>
            <li class="list-group-item">2019 points: {driver.points}</li>
          </ul>
        </div>
      </div>
    );
  };

  renderDrivers = () => {
    const { drivers } = this.props;
    return drivers.map((driver, index) => {
      return this.driverCard(driver);
    });
  };

  render() {
    return (
      <Fragment>
        <title>Standings</title>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <img alt="league logo" src={logo} style={{ height: "65px" }} />
            <h3>2019 Drivers</h3>
            <div className="jumbotron">
              <div className="row">{this.renderDrivers()}</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LoaderHOC(Roster);
