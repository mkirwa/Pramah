import React, { Component } from "react";
import NavBarAccountant from "./navbaraccountant";
import Loads from "../loads";

class LoadsAccountant extends Component {
  render() {
    return (
      <div>
        <NavBarAccountant />
        <Loads />
        <h1>This is loads from the accounant page</h1>
      </div>
    );
  }
}

export default LoadsAccountant;
