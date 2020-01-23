import React from "react";
import db from "../../services/database";

class DriverForm extends React.Component {
  state = {
    name: "",
    country: "",
    image: "",
    _car_id: 0,
    _team_id: 0
  };

  static getDerivedStateFromProps(newProps) {
    console.log(newProps);
      return db.getDriver(newProps.driverKey).then(driver => {
        console.log(driver);
        return {...driver};
      });
  }

  handleChange = e => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmitForm}>
          <div className="form-group">
            <label>Enter Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Enter Country</label>
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Enter Image URL</label>
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-success">Submit Values</button>
        </form>
      </>
    );
  }
}

export default DriverForm;
