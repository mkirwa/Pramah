import React, { Component } from "react";
import NavBarAdmin from "./navbaradmin";
import Loads from "../loads";

class LoadsAdmin extends Component {
  render() {
    return (
      <div>
        <NavBarAdmin />
        <Loads />
      </div>
    );
  }
}

export default LoadsAdmin;
