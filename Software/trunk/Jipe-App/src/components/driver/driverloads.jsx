import React, { Component } from "react";
import NavBarDriver from "./navbardriver";

class DriverLoads extends Component {
  render() {
    return (
      <div>
        <NavBarDriver />
        <div style={style}>
          <h4>Driver Loads</h4>
        </div>
      </div>
    );
  }
}
const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "30px auto"
};

export default DriverLoads;
