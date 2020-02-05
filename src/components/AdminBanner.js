import React from "react";
import { Link } from "react-router-dom";

const AdminBanner = props => {
  return (
    <div style={{ backgroundColor: "yellow", color: "black" }}>
      <h3>Welcome Admin</h3>{" "}
      <ul>
        <li>
          <Link
            to="/admin/drivers"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Manage Drivers
          </Link>
        </li>{" "}
        {/* <li>
          <Link
            to="/admin/teams"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Manage Teams
          </Link>
        </li>{" "} */}
        <li>
          <Link
            to="/admin/schedule"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Manage Schedule
          </Link>
        </li>{" "}
        {/* <li>
          <Link
            to="/admin/results"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Post Result
          </Link>
        </li> */}
        <li>
          <Link
            to="/admin/news"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            New Article
          </Link>
        </li>
        <li>
          <Link
            to="/admin/articles"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Edit Articles
          </Link>
        </li>{" "}
      </ul>
      <h4 style={{ cursor: "pointer" }} onClick={() => props.onLogoutClick()}>
        Logout
      </h4>
    </div>
  );
};

export default AdminBanner;
