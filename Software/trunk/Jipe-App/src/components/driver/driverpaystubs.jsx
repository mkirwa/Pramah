import React, { Component } from "react";
import NavBarDriver from "./navbardriver";

class DriverPayStubs extends Component {
  render() {
    return (
      <div>
        <NavBarDriver />
        <div style={style}>
          <h4>Pays Stubs</h4>
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

export default DriverPayStubs;
