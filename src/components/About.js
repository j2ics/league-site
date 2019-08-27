import React from "react";
import Loading from "./Loading";

const About = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <title>About</title>
      <div className="container">
        <div className="jumbotron">
          <p>The Just 2 Idiots Cup series is an online racing series.</p>
          <p>
            Races are run using the <strong>Project Cars 2</strong> simulation
            software.
          </p>
          <p>
            To learn more, including to sign up for our 2020 season, email Dale.
          </p>
          <Loading />
        </div>
      </div>
    </div>
  );
};

export default About;
