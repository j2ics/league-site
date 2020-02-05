import React from "react";
import db from "../../services/database";

const INITIAL_DRIVER = {
  name: "",
  country: "",
  image: "",
  points: 0,
};

class DriverForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: INITIAL_DRIVER,
      submitted: false,
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
        [e.target.name]: e.target.value,
      }),
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmitForm({
      driver: { ...this.state.driver },
      key: this.props.driverKey ? this.props.driverKey : null,
    });
    this.setState({
      driver: INITIAL_DRIVER,
      submitted: true,
    });
  };

  render() {
    return (
      <>
        {!this.state.submitted ? (
          <>
            <form onSubmit={this.handleSubmitForm}>
              <img
                src={this.state.driver.image}
                alt="driver avatar"
                style={{ height: "50px" }}
              />
              {/* <div className="form-group">
              <label>Enter Avatar URL</label>
              <input
                type="text"
                name="image"
                value={this.state.driver.image}
                onChange={this.handleChange}
              />
            </div> */}

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
              <div className="form-group">
                <label>CURRENT POINTS</label>
                <input
                  type="text"
                  name="points"
                  value={this.state.driver.points}
                  onChange={this.handleChange}
                />
              </div>

              <button className="btn btn-success">Submit Values</button>
            </form>
            <>
              <button
                className="btn btn-warning"
                onClick={() => {
                  this.setState({ delete: !this.state.delete });
                }}
              >
                Delete Driver Toggle
              </button>
              {this.state.delete ? (
                <button
                  className="btn btn-danger"
                  onClick={() => db.removeDriver(this.props.driverKey)}
                >
                  DELETE DRIVER FOR REAL - ARE YOU SURE?
                </button>
              ) : null}
            </>
          </>
        ) : (
          <>
            <p>"Thanks for submitting!"</p>
            <button
              onClick={() => {
                this.setState({ submitted: false });
                this.collectDriver();
              }}
            >
              Submit Again
            </button>
          </>
        )}
      </>
    );
  }
}

export default DriverForm;
