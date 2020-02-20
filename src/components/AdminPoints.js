import React from "react";
import PrivacyHOC from "./HOC/PrivacyHOC";
import db from "../services/database";

class AdminPoints extends React.Component {
  state = {
    drivers: [],
    toggle: "primary"
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
        drivers: Object.assign(
          { ...prevState.drivers },
          { [driverKey]: driver }
        )
      };
    });
  };

  renderDriverRow = (driverKey, index) => {
    let driver = this.state.drivers[driverKey];
    console.log(driverKey);
    return (
      <tr
        key={driverKey}
        className={`table-${
          index % 2 === 0 ? "primary" : "secondary"
        } form-group`}
      >
        <td htmlFor={driver.name}>{driver.name}</td>
        <td style={{ "padding-top": "12px" }}>
          <input
            className="form-control-sm"
            value={driver.points}
            name={driver.name}
            type="text"
            onChange={e => this.updateDriver(e, driver, driverKey)}
          />
        </td>
      </tr>
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
        <div className="container">
          <div style={{ textAlign: "left" }}>
            <h3>Update Driver Points</h3>
            <form onSubmit={this.submitPoints}>
              <button type="submit" className="btn btn-success">
                Submit Points
              </button>
              <table className="table table-hover">
                <tr>
                  <th>Driver</th>
                  <th>Points</th>
                </tr>
                {Object.keys(this.state.drivers).map((driverKey, index) => {
                  return this.renderDriverRow(driverKey, index);
                })}
              </table>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default AdminPoints;
// export default PrivacyHOC(AdminPoints);
