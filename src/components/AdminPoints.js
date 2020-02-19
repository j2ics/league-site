import React from "react";
import PrivacyHOC from "./HOC/PrivacyHOC";
import db from "../services/database";

class AdminPoints extends React.Component {
  state = {
    drivers: []
  };

  componentDidMount() {
    db.getAllDrivers().then(all => {
      this.setState({ drivers: all });
    });
  }

  updateDriver = (e, driver, driverKey) => {
    driver.points = e.target.value;
    this.setState(prevState => {
      return {
        drivers: Object.assign({ ...prevState.drivers }, { [driverKey]: driver })
      };
    });
  };

  renderDriverRow = driverKey => {
    let driver = this.state.drivers[driverKey];
    return (
      <div key={driverKey} className="form-group">
        <label htmlFor={driver.name}>{driver.name}</label>
        <input
          value={driver.points}
          name={driver.name}
          type="text"
          onChange={e => this.updateDriver(e, driver, driverKey)}
        />
      </div>
    );
  };
  submitPoints = e => {
    e.preventDefault();
    console.log("submitted");
    db.updateAllDrivers(this.state.drivers);
    this.props.getData();
    this.props.history.push("/standings");
  };

  render() {
    return (
      <>
        <h3>Update Driver Points</h3>
        <form onSubmit={this.submitPoints}>
          <button type="submit" className="btn btn-success">Submit Points</button>
          {Object.keys(this.state.drivers).map(driverKey => {
            return this.renderDriverRow(driverKey);
          })}
        </form>
      </>
    );
  }
}

export default PrivacyHOC(AdminPoints);
