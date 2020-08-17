import React, { Component } from "react";
import NavBarAccountant from "./navbaraccountant";

//The main accountant class
class Accountant extends Component {
  render() {
    return (
      <div>
        <NavBarAccountant />
        <h1>This is the accountant page</h1>
      </div>
    );
  }
}

export default Accountant;
