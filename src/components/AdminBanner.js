import React from "react";

const AdminBanner = props => {
  return (
    <div style={{ backgroundColor: "yellow", color: "black" }}>
      <h3>Welcome Admin</h3>{" "}
      <h4 style={{ cursor: "pointer" }} onClick={() => props.onLogoutClick()}>
        Logout
      </h4>
    </div>
  );
};

export default AdminBanner;
