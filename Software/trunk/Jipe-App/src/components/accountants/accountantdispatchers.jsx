import React, { Component } from "react";
import NavBarAccountant from "./navbaraccountant";

class AccountantDispatchers extends Component {
  render() {
    return (
      <div>
        <NavBarAccountant />
        <h1>This is the list of all dispatchers</h1>
      </div>
    );
  }
}

export default AccountantDispatchers;
