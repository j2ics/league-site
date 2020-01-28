import React from "react";
import PrivacyHOC from "./HOC/PrivacyHOC";
import DriverForm from "./FormComponents/DriverForm";
import db from "../services/database";

class AdminDrivers extends React.Component {
  state = {
    drivers: [],
    teams: []
  };

  componentDidMount() {
    db.getAllDrivers().then(all => {
      this.setState({ drivers: all });
    });
    db.getAllTeams().then(all => {
      this.setState({ teams: all });
    });
  }

  renderDrivers = () => {
    //   console.log(Object.keys(this.state.drivers));
    return [
      <div style={{ backgroundColor: "grey", color:"black" }}>
        <h4>NEW DRIVER</h4>
        <DriverForm onSubmitForm={db.addNewDriver} />
      </div>,
      Object.keys(this.state.drivers).map(key => {
        return (
          <div className="col col-md-4">
            <DriverForm
              onSubmitForm={db.updateDriver}
              key={key}
              driverKey={key}
            />
          </div>
        );
      })
    ];
  };

  render() {
    return (
      <>
        <h1>ADMIN DRIVERS</h1>
        <div className="container">
          <div className="row">{this.renderDrivers()}</div>
        </div>
      </>
    );
  }
}

export default PrivacyHOC(AdminDrivers);
// export default AdminDrivers;
