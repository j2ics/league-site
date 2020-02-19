import React, { Component } from "react";

class Next extends Component {
  getFormattedRaceTime = raceTime => {
    const localTime = new Date(raceTime).toLocaleTimeString();
    const fixedTimeArray = localTime.split(" ");
    fixedTimeArray[0] = fixedTimeArray[0].slice(0, -3);
    return fixedTimeArray.join(" ");
  };

  userTimeZone = dt => {
    function seconds_with_leading_zeros(dt) {
      return /\((.*)\)/.exec(new Date().toString())[1];
    }
    return seconds_with_leading_zeros(dt);
  };

  render() {
    let { location, duration, date, circuit } = this.props.race;
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <h3>Next race:</h3>
        </div>
        <div className="card-body">
          <h4 className="card-title">{location}</h4>
          <h5>{circuit}</h5>
          <p className="card-text">{`${new Date(
            date
          ).toDateString()}, at ${this.getFormattedRaceTime(
            date
          )} ${this.userTimeZone(new Date())}`}</p>
          <p>{duration}</p>
        </div>
      </div>
    );
  }
}

export default Next;
