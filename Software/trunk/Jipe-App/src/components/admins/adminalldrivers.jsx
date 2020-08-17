import React, { Component } from "react";
import NavBarAdmin from "./navbaradmin";
import AllDrivers from "../alldrivers";

class AdminAlldrivers extends Component {
  render() {
    return (
      <div>
        <NavBarAdmin />
        <AllDrivers />
      </div>
    );
  }
}

export default AdminAlldrivers;
