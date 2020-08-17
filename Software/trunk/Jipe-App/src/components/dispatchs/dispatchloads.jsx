import React, { Component } from "react";
import Loads from "../loads";
import DispatchNavbar from "./dispatchnavbar";

class DispatchLoads extends Component {
  render() {
    return (
      <div>
        <DispatchNavbar />
        <Loads />
      </div>
    );
  }
}

export default DispatchLoads;
