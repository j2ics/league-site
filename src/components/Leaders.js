import React, { Component } from "react";

class Leaders extends Component {
  constructor(props) {
    super();
    this.state = {
      leaders: []
    };
  }

  componentDidMount() {
    const slicedDrivers = this.props.leaders.slice();

    this.setState({
      leaders: slicedDrivers
        .sort((a, b) => {
          return (a.points - b.points) * -1;
        })
        .slice(0, 3)
    });
  }

  leader = (driver, position) => {
    return (
      <div key={position} className="col col-md-4" style={{ paddingBottom: "15px" }}>
        <h3>{position}</h3>
        <h5>{driver.points} Points</h5>
        <div className="card">
          <img className="card-img-top" src={driver.image} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{driver.name}</h5>
            <img
              alt="flag"
              className="card-text"
              src={`https://www.countryflags.io/${driver.country}/flat/64.png`}
            />
            <h5>{driver.car.make}</h5>
          </div>
        </div>
      </div>
    );
  };

  showLeaders = () => {
    return this.state.leaders.map((driver, index) => {
      return this.leader(driver, index + 1);
    });
  };

  render() {
    return (
      <div className="card text-white bg-primary mb-3">
        <div className="card-header">
          <h4 className="card-title">Championship Leaders</h4>
        </div>
        <div className="card-body row">{this.showLeaders()}</div>
      </div>
    );
  }
}

export default Leaders;
