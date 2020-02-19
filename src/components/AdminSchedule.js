import React from "react";
import PrivacyHOC from "./HOC/PrivacyHOC";
import RaceForm from "./FormComponents/RaceForm";
import db from "../services/database";
import { Link } from "react-router-dom";

class AdminSchedule extends React.Component {
  state = {
    races: []
  };

  componentDidMount() {
    db.getAllRaces().then(all => {
      if (all !== null) {
        this.setState({ races: [...Object.values(all)] });
      }
    });
  }

  render() {
    return (
      <>
        <h1>ADMIN SCHEDULE</h1>
        <div className="container">
          <div className="row">
            <RaceForm onSubmitRace={db.addNewRace} />
            <h3>Current Schedule</h3>
            <ul>
              {this.state.races.length > 0 && this.state.races !== null
                ? Object.keys(this.state.races[0]).map(raceKey => {
                    let race = this.state.races[0][raceKey];
                    return (
                      <div key={raceKey}>
                        <li key={Math.random()}>
                          {race.race}, at {race.circuit}
                        </li>
                        <Link to={`/admin/schedule/${raceKey}`} className="btn btn-info">Edit</Link>
                      </div>
                    );
                  })
                : null}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default PrivacyHOC(AdminSchedule);
// export default AdminDrivers;
