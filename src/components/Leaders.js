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
      <div key={position} className="col col-md-4">
        <div className="card border-primary mb-3">
          <img
            alt="driver avatar"
            className="card-image-top"
            src={driver.image}
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <h4>{position} Place</h4>
            <div style={{ textAlign: "left", paddingLeft: "8px" }}>
              <img
                alt="national flag"
                style={{ margin: "5px" }}
                src={`https://www.countryflags.io/${
                  driver.country
                }/flat/32.png`}
              />
              <h5 style={{ margin: 0 }}>{driver.name.split(" ")[0]} </h5>
              <h4>{driver.name.split(" ")[1]}</h4>
            </div>
            {/* <h5 style={{margin: "0px"}}>{driver.points} pts.</h5> */}
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
