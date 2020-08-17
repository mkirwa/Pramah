import React, { Component } from "react";
import NavBarAccountant from "./navbaraccountant";

class AccountantDrivers extends Component {
  render() {
    return (
      <div>
        <NavBarAccountant />
        <h1>This is the list of all accountants</h1>
      </div>
    );
  }
}

export default AccountantDrivers;
