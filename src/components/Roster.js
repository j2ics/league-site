import React, { Component, Fragment } from "react";
import logo from "../assets/img/j2ics-logo-md.png";
import LoaderHOC from "../LoaderHOC";

class Roster extends Component {
  state = {
    currentDriver: this.props.drivers[0]
  };

  driverCard = (driver, idx) => {
    return (
      <div
        key={idx}
        className="col col-md-3"
        style={{ paddingBottom: "15px" }}
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => this.setState({ currentDriver: driver })}
      >
        <div className="card">
          <img className="profile-img-top" src={driver.image} alt="Card cap" />
          <div className="card-body list-group-item">
            <h5 className="card-title">{driver.name}</h5>
            <img
              alt="flag"
              className="card-text"
              src={`https://www.countryflags.io/${driver.country}/flat/64.png`}
            />
          </div>
        </div>
      </div>
    );
  };

  renderDrivers = () => {
    const { drivers } = this.props;
    return drivers
      .sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      })
      .map((driver, index) => {
        return this.driverCard(driver, index);
      });
  };

  renderModal = () => {
    let { currentDriver } = this.state;
    return this.state.currentDriver !== null ? (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                <img
                  alt="nataional flag"
                  src={`https://www.countryflags.io/${
                    currentDriver.country
                  }/flat/32.png`}
                />{" "}
                {currentDriver.name}
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                className="img-fluid"
                alt="driver"
                src={currentDriver.image}
              />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Team: <h4>{currentDriver.car.make}</h4>
                </li>
                <li className="list-group-item">
                  Chassis: <h5>{currentDriver.car.model}</h5>
                </li>
                <li className="list-group-item">
                  2019 points: <h5>{currentDriver.points}</h5>
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  };

  render() {
    return (
      <Fragment>
        {this.renderModal()}
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
