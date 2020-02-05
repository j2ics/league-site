import React, { Component } from "react";

// <td>{race.date}</td>
// <td>{race.location}</td>
// <td>{race.circuit}</td>
// <td>{race.duration}</td>

const INITIAL_STATE = {
  race: "TestRaceData - IGNORE",
  location: "TestRaceData - IGNORE",
  circuit: "TestRaceData - IGNORE",
  duration: "TestRaceData - IGNORE",
  datetime: "TestRaceData - IGNORE",
  season: "2020",
};

class RaceForm extends Component {
  state = INITIAL_STATE;

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    let { race, location, circuit, duration, datetime, season } = this.state;
    this.props.onSubmitRace(
      {
        race,
        location,
        circuit,
        duration,
        datetime,
      },
      season
    );
  };

  render() {
    return (
      <>
        <h2>Race Form</h2>
        <form onSubmit={this.handleSubmitForm}>
          <div className="form-group">
            <label>Race Name:</label>
            <input
              type="text"
              name="race"
              value={this.state.race}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Race Location:</label>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Race Circuit:</label>
            <input
              type="text"
              name="circuit"
              value={this.state.circuit}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Race Duration:</label>
            <input
              type="text"
              name="duration"
              value={this.state.duration}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Race Date and Time:</label>
            <input
              type="text"
              name="datetime"
              value={this.state.datetime}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Race Date and Time:</label>
            <select
              name="season"
              value={this.state.season}
              onChange={this.handleChange}
            >
              <option value="2020">2020</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default RaceForm;
