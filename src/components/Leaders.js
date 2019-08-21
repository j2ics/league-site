import React, { Component, Fragment } from "react";
import logo from "../assets/img/j2ics-logo-md.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Leaders extends Component {
  constructor(props) {
    super();
    this.state = {
      leaders: props.leaders
        .sort((a, b) => {
          return (a.points - b.points) * -1;
        })
        .slice(0, 3)
    };
  }

  leader = (driver, position) => {
    return (
      <div key={position} className="card border-primary mb-3 col col-md-4">
        <div className="card-body" style={{ textAlign: "center" }}>
          <h4>{position} Place</h4>
          <img src={driver.image} />
          <div style={{textAlign: "left", paddingLeft: "8px"}}>
            <h5 style={{margin: 0}}>
              {driver.name.split(" ")[0]} {" "} 
              <img style={{margin: '5px'}}
                src={`https://www.countryflags.io/${
                  driver.country
                }/flat/16.png`}
              />
            </h5>
            <h4>{driver.name.split(" ")[1]}</h4>
          </div>
          {/* <h5 style={{margin: "0px"}}>{driver.points} pts.</h5> */}
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
