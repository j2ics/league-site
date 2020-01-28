import React from "react";
import db from "../../services/database";
import { Link } from "react-router-dom";

const INITIAL_DRIVER = {
  name: "",
  country: "",
  image: "",
  _car_id: 0,
  _team_id: 0
};

class DriverForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: INITIAL_DRIVER,
      submitted: false
    };
  }

  componentDidMount() {
    this.collectDriver();
  }

  collectDriver = () => {
    if (this.props.driverKey) {
      db.getDriver(this.props.driverKey).then(driver => {
        this.setState({ driver: driver });
      });
    }
  };

  handleChange = e => {
    console.log(e.target.name);
    this.setState({
      driver: Object.assign({}, this.state.driver, {
        [e.target.name]: e.target.value
      })
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmitForm({
      driver: { ...this.state.driver },
      key: this.props.driverKey
    });
    this.setState({
      driver: INITIAL_DRIVER,
      submitted: true
    });
  };

  render() {
    return (
      <>
        {!this.state.submitted ? (
          <form onSubmit={this.handleSubmitForm}>
          <img src={this.state.driver.image} style={{height: "50px"}}/>
            <div className="form-group">
              <label>Enter Name</label>
              <input
                type="text"
                name="name"
                value={this.state.driver.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Enter Country</label>
              <input
                type="text"
                name="country"
                value={this.state.driver.country}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Enter Image URL</label>
              <input
                type="text"
                name="image"
                value={this.state.driver.image}
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-success">Submit Values</button>
          </form>
        ) : (
          <>
            <p>"Thanks for submitting!"</p>
            <button onClick={() => {this.setState({ submitted: false });this.collectDriver()}}>Submit Again</button>
          </>
        )}
      </>
    );
  }
}

export default DriverForm;
